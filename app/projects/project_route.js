EF.ProjectsRoute = Ember.Route.extend(EF.ResetScroll, {
    model: function() {
        return this.store.find('project');
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        _gaq.push(['_trackPageview', "/projects"]);

        document.title = 'Projects -  Haagen Software';
    }
});