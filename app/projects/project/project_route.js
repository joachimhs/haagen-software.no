EF.ProjectsProjectRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        this._super(controller, model);
        _gaq.push(['_trackPageview', "/projects/" + model.get('id')]);

        document.title = model.get('name') - ' Haagen Software';
    }
});