EF.PagesPageRoute = Ember.Route.extend(EF.ResetScroll, {
    setupController: function(controller, model) {
        this._super(controller, model);

        if (ga) ga('send', 'pageview', '/pages/' + model.get('id'));

        document.title = model.get('title') + ' - Haagen Software';
    }
});