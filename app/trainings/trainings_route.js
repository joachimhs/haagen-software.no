EF.TrainingsRoute = Ember.Route.extend(EF.ResetScroll, {
    model: function() {
        return this.store.find('training');
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        if (ga) ga('send', 'pageview', '/trainings');

        document.title = 'Trainings -  Haagen Software';
    }
});