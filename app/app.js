//This creates the namespace for our Ember application. In this case HS
HS = Ember.Application.create({
	ready: function() {
		this._super();
	}
});

var colorArray = ["#f35", "#c3d", "#0f3", "#41c", "#ca5", "#947", "#1ce", "#f0d", "#ff0", "#00f", "#bae", "#dd8"];

//Removing the Camelcase-to-dash convention from Ember Data
DS.Model.reopen({
  namingConvention: {
	keyToJSONKey: function(key) {
	  return key;
	},

	foreignKey: function(key) {
	  return key;
	}
  }
});

//Setting up the adapter to receive data from the server
HS.Adapter = DS.Adapter.create({
    //Finding all object of a certain type. Fetching from the server
    findAll: function(store, type, ids) {
        var url = type.url.substring(0, (type.url.length - 7));
        jQuery.getJSON(url, function(data) {
            if (window.console) console.log('findAll. getting from url: ' + url + ' length: ' + data.length + " type: " + type);
            if (type === HS.CVData) {
                if (data.experience) store.loadMany(HS.ExperienceData, data.experience);
                if (data.course) store.loadMany(HS.CourseData, data.course);
                if (data.education) store.loadMany(HS.EducationData, data.education);
                if (data.opensource) store.loadMany(HS.OpenSourceData, data.opensource);
                if (data.projects) store.loadMany(HS.ProjectData, data.projects);
                if (data.publications) store.loadMany(HS.PublicationData, data.publications);
                if (data.cvs) store.loadMany(type, data.cvs);
            } else {
                store.loadMany(type, data);
            }
        });
    },

    //Finding a single item from the store based on the object type and the ID
    //of the object that you are querying for.
    find: function(store, type, id) {
        var url = type.url;
        url = url.fmt(id);

        jQuery.getJSON(url, function(data) {
            console.log('find from url: ' + url);
            console.log(data);
            store.load(type, id, data);
        });
    },

    updateRecord: function(store, type, model) {
        if (window.console)console.log('update record');
        if (window.console)console.log(model);

        jQuery.ajax({
            url: type.url,
            dataType: 'json',
            type: 'POST',

            success: function(data) {
                // data is a hash of key/value pairs representing the record
                // in its current state on the server.
                if (window.console)console.log(type.url);
                if (window.console)console.log(data);
                store.didUpdateRecord(model, data);
            }
        });
    },

    updateRecords: function(store, type, array) {
        if (window.console)console.log('update records');

        var root = this.rootForType(type);
        var plural = this.pluralize(root);

        if (window.console)console.log(root);

        var data = {};
        data[root] = array.map(function(record) {
            return record.toJSON();
        });

        if (window.console)console.log(JSON.stringify(data));

        jQuery.ajax({
            url: type.url,
            data: JSON.stringify(data),
            dataType: 'json',
            type: 'POST',

            success: function(data) {
                // data is an array of hashes in the same order as
                // the original records that were sent.
                if (window.console)console.log(type.url);
                if (window.console)console.log(data);
                store.didUpdateRecords(array);
            }
        });
    },

    commit: function(store, commitDetails) {
        commitDetails.updated.eachType(function(type, array) {
            this.updateRecords(store, type, array.slice());
        }, this);

        commitDetails.created.eachType(function(type, array) {
            this.createRecords(store, type, array.slice());
        }, this);

        commitDetails.deleted.eachType(function(type, array) {
            this.deleteRecords(store, type, array.slice());
        }, this);
    },

    plurals: {},

    // define a plurals hash in your subclass to define
    // special-case pluralization
    pluralize: function(name) {
        return this.plurals[name] || name + "s";
    },

    rootForType: function(type) {
        if (type.url) { return type.url; }

        // use the last part of the name as the URL
        var parts = type.toString().split(".");
        var name = parts[parts.length - 1];
        return name.replace(/([A-Z])/g, '_$1').toLowerCase().slice(1);
    }

    //There are other Adaptor methods that can be implemented to allow for a richer
    //object store in the database. Please see https://github.com/emberjs/data for
    //more information on this topic.

});

HS.store = DS.Store.create({
    revision: 4, //Revision 4 is the newest revision of Ember Data, as of 26th of May 2012
    adapter: HS.Adapter
    //adapter: Ember.RESTAdapter
});

