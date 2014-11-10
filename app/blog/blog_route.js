EF.BlogRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('post');
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        if (ga) ga('send', 'pageview', '/blog/');

        document.title = "Blog -  Haagen Software";
    }
});