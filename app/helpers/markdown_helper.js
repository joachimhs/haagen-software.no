Ember.Handlebars.registerBoundHelper('markdown', function(property) {
    if (property) {
        return new Handlebars.SafeString(Markdown(property));
    }
});