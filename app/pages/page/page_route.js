EF.PagesPageRoute = Ember.Route.extend(EF.ResetScroll, {
    setupController: function(controller, model) {
        this._super(controller, model);
        _gaq.push(['_trackPageview', "/pages/" + model.get('id')]);

        document.title = model.get('title') + ' - Haagen Software';
    }
});