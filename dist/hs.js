var EF = Ember.Application.create({

});

DS.RESTAdapter.reopen({
    namespace: 'json/data'
});

EF.Adapter = DS.RESTAdapter.extend();

EF.Store = DS.Store.extend({
    adapter:  "Scene.Adapter"
});

/*Scene.PageElementAdapter = Scene.Adapter.extend({
 namespace: 'json/data'
 });*/

Ember.Inflector.inflector.irregular('productCategory', 'productCategories');
EF.ApplicationController = Ember.Controller.extend({
    init: function() {
        this._super();

        Ember.run.schedule('afterRender', this, function(){
            console.log('initializing Stellar.js!');
            $.stellar();
        });

        console.log('applicationController is initialized!');
    }
});
EF.HeaderController = Ember.ArrayController.extend({
    sortProperties: ['sortIndex'],
    sortAscending: true,

    init: function() {
        this._super();

        var pages = [];

        this.store.find('page').then(function(data) {
            data.forEach(function(page) {
                var topMenu = page.get('topMenu');

                if (topMenu) {
                    pages.pushObject(page);
                }
            });
        });

        var sortedResult = Em.ArrayProxy.createWithMixins(
            Ember.SortableMixin,
            { content:pages, sortProperties: this.sortProperties }
        );

        this.set('content', sortedResult);
    }
});
EF.HeaderView = Ember.View.extend({
    
});
EF.ResetScroll = Ember.Mixin.create({
    activate: function() {
        this._super();
        var body = $("html, body");
        body.animate({scrollTop:450}, '500', 'swing', function() { });

        setTimeout(function() {
            Ember.run.schedule('afterRender', this, function(){
                console.log('initializing Stellar.js!');
                $.stellar();
            });
        }, 1000);
    },

    deactivate: function() {
        this._super();
        var body = $("html, body");
        body.animate({scrollTop:450}, '500', 'swing', function() { });

        setTimeout(function() {
            Ember.run.schedule('afterRender', this, function(){
                console.log('initializing Stellar.js!');
                $.stellar();
            });
        }, 1000);
    }
});
EF.Page = DS.Model.extend({
    title: DS.attr('string'),
    route: DS.attr('string'),
    sortIndex: DS.attr('number'),
    topMenu: DS.attr('boolean'),
    content: DS.attr('string')
});
EF.PagesPageController = Ember.ObjectController.extend({
    modelObserver: function() {
        if (this.get('model')) {
            var body = $("html, body");
            body.animate({scrollTop:450}, '500', 'swing', function() { });
        }
    }.observes('model')
});
EF.PagesPageRoute = Ember.Route.extend(EF.ResetScroll, {
    setupController: function(controller, model) {
        this._super(controller, model);

        if (ga) ga('send', 'pageview', '/pages/' + model.get('id'));

        document.title = model.get('title') + ' - Haagen Software';
    }
});
EF.PagesRoute = Ember.Route.extend(EF.ResetScroll, {

});
EF.Router = Ember.Router.extend({
    location: 'history'
});

EF.Router.map(function() {

});
EF.RawTransform = DS.Transform.extend({
    deserialize: function(serialized) {
        return serialized;
    },
    serialize: function(deserialized) {
        return deserialized;
    }
});