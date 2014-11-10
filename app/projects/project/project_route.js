EF.ProjectsProjectRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        this._super(controller, model);
        if (ga) ga('send', 'pageview', '/projects/' + model.get('id'));

        document.title = model.get('name') - ' Haagen Software';
    }
});