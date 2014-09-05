EF.TrainingsRoute = Ember.Route.extend(EF.ResetScroll, {
    model: function() {
        return this.store.find('training');
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        _gaq.push(['_trackPageview', "/trainings"]);

        document.title = 'Trainings -  Haagen Software';
    }
});