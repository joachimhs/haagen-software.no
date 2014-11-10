EF.ProjectsRoute = Ember.Route.extend(EF.ResetScroll, {
    model: function() {
        return this.store.find('project');
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        if (ga) ga('send', 'pageview', '/projects/');

        document.title = 'Projects -  Haagen Software';
    }
});