var HS = Ember.Application.create({
});

HS.Router = Ember.Router.extend({
    location: 'history'
});

HS.Router.map(function() {
    this.resource("frontPages", {path: "/"}, function() {
        this.resource("pages", {path: "/pages"}, function() {
           this.route("page", {path: "/:page_id"})
        });
        this.resource("blog", {path: "/blog"}, function() {
            this.route("index", {path: "/"});
            this.route("post", {path: "/post/:blog_post_id"});
        });
        this.resource("cv", {path: "/cv"}, function() {
            this.route("index", {path: "/"});
            this.route("person", {path: "/:curriculum_vitae_id"});
        });
    });
});

HS.PagesRoute = Ember.Route.extend({
    model: function() {
        return HS.Page.find();
    }
});

HS.FrontPagesRoute = Ember.Route.extend({
    model: function() {
        console.log('FrontPagesRoute model');
        HS.Page.find();
        var frontPages = HS.store.filter(HS.Page, function(data) {
            if (data.get('parentPage') == null) { return true; }
        });

        return frontPages;
    }
});

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

});

HS.CvRoute = Ember.Route.extend({
    model: function() {
        return HS.CurriculumVitae.find();
    }
});

HS.CvIndexController = Ember.ArrayController.extend({
    needs: ['cv']
});

HS.CvPersonController = Ember.ObjectController.extend({
});

HS.FrontPagesController = Ember.ArrayController.extend({

});

HS.FrontPagesIndexController = Ember.ArrayController.extend({
    needs: ['frontPages'],

    navigateToRoute: function(a) {
        this.transitionToRoute(a.get('id'));
    }
});

HS.MenuController = Ember.ArrayController.extend({
    needs: ['frontPages'],

    navigateToRoute: function(a) {
        this.transitionToRoute(a.get('id'));
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

HS.BlogPostController = Em.Controller.extend({
    content: null,

    contentObserver: function() {
        console.log('BlogPostController contentObserver: ' + this.get('content'));
        if (this.get('content')) {
            var page = this.get('content');

            $.get("/document/posts/" + this.get('content.id') + ".md", function(data) {
                var converter = new Showdown.converter();

                page.set('markdown', new Handlebars.SafeString(converter.makeHtml(data)));
            }, "text")
                .error(function() {
                    page.set('markdown',  "Unable to find specified page");
                    //TODO: Navigate to 404 state
                });

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

HS.FooterView = Ember.View.extend({
    elementId: 'footer'
});

HS.HeaderView = Ember.View.extend({
    elementId: 'header'
});

HS.MenuView = Ember.View.extend({
    elementId: 'menuArea'
});

HS.PageItemView = Ember.View.extend({
    content: null,
    templateName: 'tableCellTemplate',
    classNames: ["tablecell"]
});

HS.LeftMenuItemView = Ember.View.extend({
    content: null,
    templateName: 'menuItemTemplate'
});

HS.CvPersonView = Ember.View.extend({
    didInsertElement: function() {
        $("#rightCV h1").html(function(i, v) { return v.replace(/(^\w{3})/, '<span style="color: ' + colorArray[i] + ';">$1</span>'); })
        $("#leftCV h1").html(function(i, v) { return v.replace(/(^\w{3})/, '<span style="color: ' + colorArray[i] + ';">$1</span>'); })
    }
});

Ember.TEMPLATES['application'] = Ember.Handlebars.compile('' +
    '<div id="emberArea">{{outlet}}</div>' +
    '{{render footer}}'
);

Ember.TEMPLATES['frontPages'] = Ember.Handlebars.compile('' +
    '{{outlet}}'
);

Ember.TEMPLATES['frontPages/index'] = Ember.Handlebars.compile('' +
    '{{render header}}' +
    '{{#each controllers.frontPages}}' +
        '{{#if visibleOnFrontPage}}{{view HS.PageItemView contentBinding="this"}}{{/if}}' +
    '{{/each}}'
);

Ember.TEMPLATES['tableCellTemplate'] = Ember.Handlebars.compile('' +
    '<div class="imgdiv"><img {{bindAttr src="pageImageUrl"}}></div>' +
    '<div class="txtdiv">' +
        '<h1>{{pageTitle}}</h1>' +
        '{{pageDescription}}<br/>' +
        '{{#if pageFilename}}' +
            '-&gt; {{#linkTo pages.page this}}Read More{{/linkTo}}' +
        '{{else}}' +
            '-&gt; <a {{action navigateToRoute this}} class="pointer">Read More</a>' +
        '{{/if}}' +
    '</div>'
);

Ember.TEMPLATES['pages'] = Ember.Handlebars.compile('' +
    '{{render menu}}' +
    '<div id="page">{{outlet}}</div>'
);

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

Ember.TEMPLATES['pages/page'] = Ember.Handlebars.compile('' +
    '{{content.markdown}}'
);

Ember.TEMPLATES['menu'] = Ember.Handlebars.compile('' +
    '<div><a href="/"><img src="/img/hs_small.png" width="100" height="120" alt="Hs Small" style="margin-left: 50px;" /></a></div>' +
    '{{#each controllers.frontPages}}' +
        '{{#unless parentPage}}{{view HS.LeftMenuItemView contentBinding="this"}}{{/unless}}' +
    '{{/each}}'
);

Ember.TEMPLATES['menuItemTemplate'] = Ember.Handlebars.compile('' +
    '{{#if pageFilename}}' +
        '{{#linkTo pages.page this}}{{pageName}}{{/linkTo}}' +
    '{{else}}' +
        '<a {{action navigateToRoute this}} class="pointer">{{pageName}}</a>' +
    '{{/if}}' +

    '{{#each childrenPages}}' +
        '<div style="margin-left: 18px;">{{view HS.LeftMenuItemView contentBinding="this"}}</div>' +
    '{{/each}}'
);

Ember.TEMPLATES['header'] = Ember.Handlebars.compile('' +
    '<h1>The Open Source Application Monitoring Tool</h1>' +
    '<h1>Featuring EurekaJ</h1>'
);

Ember.TEMPLATES['cv'] = Ember.Handlebars.compile('' +
    '{{render menu}}' +
    '<div id="page">{{outlet}}</div>'
);

Ember.TEMPLATES['cv/index'] = Ember.Handlebars.compile('' +
    '{{#each controllers.cv}}' +
        '-&gt; {{#linkTo cv.person this}}{{name}}{{/linkTo}}<br />' +
    '{{/each}}'
);

Ember.TEMPLATES['cv/person'] = Ember.Handlebars.compile('' +
    '<h1>Curriculum Vitae</h1>' +
    '<div id="leftCV">' +
        '<h1>about me</h1>' +
        '{{#each about}}' +
        '{{id}}<br/>' +
        '{{/each}}' +

        '<h1>languages</h1>' +
        '{{#each languages}}' +
        '{{id}}</br />' +
        '{{/each}}' +

        '<h1>programming</h1>' +
        '{{#each programming}}' +
        '{{id}}<br/>' +
        '{{/each}}' +
    '</div>' +

    '<div id="rightCV">' +
        '<h1>interest</h1>' +
        '{{interest}}' +

        '<h1>education</h1>' +
        '<table class="cvtable">' +
        '{{#each education}}' +
            '<tr>' +
                '<td>{{this.period}}</td>' +
                '<td>' +
                    '<span style="font-weight: 900;">{{title}}</span><br/>{{description}}' +
                    '{{#if externalLink}}' +
                        '<br /><a {{bindAttr href="externalLink"}}>{{externalLink}}</a>' +
                    '{{/if}}' +
                '</td>' +
                '<td>{{location}}</td>' +
            '</tr>' +
        '{{/each}}' +
        '</table>' +

        '<h1>experience</h1>' +
        '<table class="cvtable">' +
        '{{#each experience}}' +
            '<tr>' +
            '<td>{{period}}</td>' +
            '<td>' +
                '<span style="font-weight: 900;">{{title}}</span><br/>{{description}}' +
                '{{#if externalLink}}' +
                    '<br /><a {{bindAttr href="externalLink"}}>{{externalLink}}</a>' +
                '{{/if}}' +
            '</td>' +
            '</tr>' +
        '{{/each}}' +
        '</table>' +

        '<h1>projects</h1>' +
        '<table class="cvtable">' +
        '{{#each project}}' +
            '<tr>' +
            '<td>{{period}}</td>' +
            '<td>' +
                '<span style="font-weight: 900;">{{title}}</span><br/>{{description}}' +
                '{{#if externalLink}}' +
                    '<br /><a {{bindAttr href="externalLink"}}>{{externalLink}}</a>' +
                '{{/if}}' +
            '</td>' +
            '<td>' +
                '{{client}}' +
                '{{#if location}}' +
                    '<br /><span style="color: #666;">{{location}}</span>' +
                '{{/if}}' +
            '</td>' +
            '</tr>' +
        '{{/each}}' +
        '</table>' +

        '<h1>open source</h1>' +
        '<table class="cvtable">' +
        '{{#each opensource}}' +
            '<tr>' +
            '<td>{{period}}</td>' +
            '<td>' +
                '<span style="font-weight: 900;">{{title}}</span><br/>{{description}}' +
                '{{#if externalLink}}' +
                    '<br /><a {{bindAttr href="externalLink"}}>{{externalLink}}</a>' +
                '{{/if}}' +
            '</td>' +
            '</tr>' +
        '{{/each}}' +
        '</table>' +

        '<h1>publications and presentations</h1>' +
        '<table class="cvtable">' +
        '{{#each publication}}' +
            '<tr>' +
            '<td>{{publicationDate}}</td>' +
            '<td>' +
                '<span style="font-weight: 900;">{{title}}</span><br/>{{description}}' +
                '{{#if externalLink}}' +
                 '<br /><a {{bindAttr href="externalLink"}}>{{externalLink}}</a>' +
                '{{/if}}' +
            '</td>' +
            '</tr>' +
        '{{/each}}' +
        '</table>' +

        '<h1>courses and certifications</h1>' +
        '<table class="cvtable">' +
        '{{#each course}}' +
            '<tr>' +
            '<td>{{publicationDate}}</td>' +
            '<td>' +
                '<span style="font-weight: 900;">{{title}}</span><br/>{{description}}' +
                '{{#if externalLink}}' +
                    '<br /><a {{bindAttr href="externalLink"}}>{{externalLink}}</a>' +
                '{{/if}}' +
            '</td>' +
            '</tr>' +
        '{{/each}}' +
        '</table>' +
    '</div>'
);

Ember.TEMPLATES['footer'] = Ember.Handlebars.compile('' +
    '<a href="/"><img src="/img/logo_blackOnWhite_small.png" width="222" height="85" alt="Logo BlackOnWhite Small" style="float:left;"></a>' +
    '<div class="footerText">' +
        'Copyright 2012 Haagen Software AS. Org. Number: NO 998 392 578.<br />' +
        'Code:  <a href="http://www.opensource.org/licenses/mit-license.html">MIT license</a>. Content: <a href="http://creativecommons.org/licenses/by-sa/3.0/us/">Creative Commons</a>. Code at <a href="https://github.com/joachimhs/haagen-software.no">GitHub</a><br />' +
        'Built using <a href="http://emberjs.com">Ember.js</a>, <a href="http://jquery.com/">jQuery</a>, <a href="http://softwaremaniacs.org/soft/highlight/en/">Highlight.js</a> and <a href="https://github.com/coreyti/showdown">Showdown</a>.' +
        '<div style="float:right">' +
        '<a href="https://mixpanel.com/f/partner"><img src="https://mixpanel.com/site_media/images/partner/badge_blue.png" alt="Mobile and Web Analytics" /></a>' +
        '</div>' +
    '</div>'
);

var colorArray = ["#f35", "#c3d", "#0f3", "#41c", "#ca5", "#947", "#1ce", "#f0d", "#ff0", "#00f", "#bae", "#dd8"];

HS.Adapter = DS.RESTAdapter.extend({
    find: function(store, type, id) {
        this.findAll(store, type);
    }
});

HS.store = DS.Store.create({
    revision: 11,
    adapter: HS.Adapter.create({
        mappings: {
            experience: "HS.Experience",
            experiences: "HS.Experience"
        }
    })
});