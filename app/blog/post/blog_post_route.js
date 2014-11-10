EF.BlogPostRoute = Ember.Route.extend({
    model: function(params) {
        return this.store.find('post', params.post_id);
    },

    setupController: function(controller, model) {
        this._super(controller, model);

        if (ga) ga('send', 'pageview', '/blog/' + model.get('id'));

        document.title = model.get('title') + ' - Haagen Software';
    }
});