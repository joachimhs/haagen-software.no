HS.BlogRoute = Ember.Route.extend({
    model: function() {
        return HS.Post.find();
    }
});

HS.BlogController = Ember.ArrayController.extend({
    sortAscending: false,
    sortProperties: ['postDate']
});

HS.BlogIndexRoute = Ember.Route.extend({
    setupControler: function(controller) {
        this._super(controller);

        mixpanel.track(path, {'page name' : document.title, 'url' : "/blog"});
        _gaq.push(['_trackPageview', "/blog"]);
    }
});

HS.BlogPostRoute = Ember.Route.extend({
    setupControler: function(controller, model) {
        this._super(controller, model);

        mixpanel.track(path, {'page name' : document.title, 'url' : "/blog/" + model.get('id')});
        _gaq.push(['_trackPageview', "/blog/" + model.get('id')]);
    }
});

HS.BlogPostController = Em.Controller.extend({
    content: null,

    contentObserver: function() {
        console.log('BlogPostController contentObserver: ' + this.get('content'));
        if (this.get('content')) {
            var page = this.get('content');

            $.get("/document/posts/" + this.get('content.id') + ".md", function(data) {
                var converter = new Showdown.converter();

                page.set('markdown', new Handlebars.SafeString(converter.makeHtml(data)));
            }, "text").error(function() {
                page.set('markdown',  "Unable to find specified page");
                //TODO: Navigate to 404 state
            });

            document.title = this.get('content.postTitle') + " - Haagen Software AS";
        }
    }.observes('content')
});

HS.BlogIndexController = Ember.ArrayController.extend({
    needs: ['blog'],

    contentObserver: function() {
        console.log('contentObserver: ' + this.get('content.length'));
        document.title = 'Blog - Haagen Software AS';
    }.observes('content')
});

Ember.TEMPLATES['blog'] = Ember.Handlebars.compile('' +
    '{{render menu}}' +
    '<div id="page">{{outlet}}</div>'
);

Ember.TEMPLATES['blog/index'] = Ember.Handlebars.compile('' +
    '<div id="pageContent">' +
    '<h1>Haagen Software Blog</h1>' +

    '{{#each controllers.blog.arrangedContent}}' +
    '<div class="blogPostIntro">' +
    '<h2>{{postDate}}: {{postTitle}}</h2>' +
    '{{postLongIntro}}' +
    '<br />' +
    '&gt; {{#linkTo blog.post this}}Read More{{/linkTo}}</a>' +
    '</div>' +
    '{{/each}}' +
    '</div>'
);

Ember.TEMPLATES['blog/post'] = Ember.Handlebars.compile('' +
    '{{#linkTo blog}}&lt;-- Back{{/linkTo}}' +
    '{{content.markdown}}' +
    '{{#linkTo blog}}&lt;-- Back{{/linkTo}}'
);
