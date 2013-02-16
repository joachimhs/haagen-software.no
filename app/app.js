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

HS.FooterView = Ember.View.extend({
    elementId: 'footer'
});

HS.HeaderView = Ember.View.extend({
    elementId: 'header'
});

Ember.TEMPLATES['application'] = Ember.Handlebars.compile('' +
    '<div id="emberArea">{{outlet}}</div>' +
    '{{render footer}}'
);


Ember.TEMPLATES['header'] = Ember.Handlebars.compile('' +
    '<h1>The Open Source Application Monitoring Tool</h1>' +
    '<h1>Featuring EurekaJ</h1>'
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
    adapter: HS.Adapter.create({})
});