HS.BlogRoute = Ember.Route.extend({
    model: function() {
        return HS.Post.findAll();
    }
});

HS.BlogController = Ember.ArrayController.extend({
    sortAscending: false,
    sortProperties: ['postDate']
});

HS.BlogIndexRoute = Ember.Route.extend({
    setupController: function(controller) {
        this._super(controller);
        _gaq.push(['_trackPageview', "/blog"]);
    }
});

HS.BlogPostRoute = Ember.Route.extend({
    model: function(id) {
        return HS.Post.find(id.post_id);
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        _gaq.push(['_trackPageview', "/blog/" + model.get('id')]);
    }
});

HS.BlogPostController = Em.Controller.extend({
    content: null,

    contentObserver: function() {
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
