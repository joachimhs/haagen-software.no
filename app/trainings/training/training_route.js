EF.TrainingsTrainingRoute = Ember.Route.extend(EF.ResetScroll, {
    model: function(params) {
        return this.store.find('training', params.training_id);
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        if (ga) ga('send', 'pageview', '/trainings/' + model.get('id'));

        document.title = model.get('name') - ' Haagen Software';
    }
});