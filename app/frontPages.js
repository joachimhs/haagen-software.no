HS.FrontPagesRoute = Ember.Route.extend({
    model: function() {
        return HS.Page.findAll();
    },

    setupController: function(controller) {
        this._super(controller);
        _gaq.push(['_trackPageview', "/"]);
    }
});

HS.FrontPagesIndexController = Ember.ArrayController.extend({
    needs: ['frontPages'],

    navigateToRoute: function(a) {
        this.transitionToRoute(a.get('id'));
    }
});

Ember.TEMPLATES['frontPages'] = Ember.Handlebars.compile('' +
    '{{outlet}}'
);

Ember.TEMPLATES['frontPages/index'] = Ember.Handlebars.compile('' +
    '{{render header}}' +
    '<div class="row-fluid">' +
    '{{#each controllers.frontPages}}' +
        '{{#if visibleOnFrontPage}}{{view HS.PageItemView contentBinding="this"}}{{/if}}' +
    '{{/each}}' +
    '</div>'
);

Ember.TEMPLATES['tableCellTemplate'] = Ember.Handlebars.compile('' +
    '<img {{bindAttr src="pageImageUrl"}} class="imgdiv">' +
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