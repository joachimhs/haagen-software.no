EF.ProjectsProjectController = Ember.ObjectController.extend({
    modelObserver: function() {
        if (this.get('model')) {
            var body = $("html, body");
            body.animate({scrollTop:450}, '500', 'swing', function() { });
        }
    }.observes('model')
});