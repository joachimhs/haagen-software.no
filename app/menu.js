HS.MenuController = Ember.ArrayController.extend({
    needs: ['frontPages'],

    navigateToRoute: function(a) {
        this.transitionToRoute(a.get('id'));
    }
});

HS.MenuView = Ember.View.extend({
    elementId: 'menuArea'
});

HS.LeftMenuItemView = Ember.View.extend({
    content: null,
    templateName: 'menuItemTemplate'
});

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