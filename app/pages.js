HS.PagesRoute = Ember.Route.extend({
    model: function() {
        return HS.Page.find();
    }
});

HS.PagesPageController = Ember.Controller.extend({
    content: null,

    contentObserver: function() {
        if (this.get('content')) {
            var page = this.get('content');

            $.get("/document/pages/" + this.get('content.pageFilename'), function(data) {
                var converter = new Showdown.converter();

                page.set('markdown', new Handlebars.SafeString(converter.makeHtml(data)));
            }, "text").error(function() {
                    page.set('markdown',  "Unable to find specified page");
                    //TODO: Navigate to 404 state
                });

            document.title = page.get('pageName') + ' - Haagen Software AS';
        }
    }.observes('content')
});

HS.PageItemView = Ember.View.extend({
    content: null,
    templateName: 'tableCellTemplate',
    classNames: ["tablecell"]
});

Ember.TEMPLATES['pages'] = Ember.Handlebars.compile('' +
    '{{render menu}}' +
    '<div id="page">{{outlet}}</div>'
);

Ember.TEMPLATES['pages/page'] = Ember.Handlebars.compile('' +
    '{{content.markdown}}'
);