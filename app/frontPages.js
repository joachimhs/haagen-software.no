HS.FrontPagesRoute = Ember.Route.extend({
    model: function() {
        console.log('FrontPagesRoute model');
        HS.Page.find();
        var frontPages = HS.store.filter(HS.Page, function(data) {
            if (data.get('parentPage') == null) { return true; }
        });

        return frontPages;
    },

    setupControler: function(controller) {
        this._super(controller);

        mixpanel.track(path, {'page name' : document.title, 'url' : "/"});
        _gaq.push(['_trackPageview', "/"]);
    }
});

HS.FrontPagesController = Ember.ArrayController.extend({

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