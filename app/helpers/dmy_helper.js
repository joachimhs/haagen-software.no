Ember.Handlebars.registerBoundHelper('dmy', function(property) {
    if (property !== null) {
        var parsedDate = moment(property);
        return parsedDate.format("DD-MM-YYYY");
    }
});

Ember.Handlebars.registerBoundHelper('dmy_no', function(property) {
    if (property !== null) {
        var parsedDate = moment(property);
        return parsedDate.format("DD MMMM YYYY");
    }
});

Ember.Handlebars.registerBoundHelper('moment', function(property) {
    if (property !== null) {
        return moment(property);
    }
});