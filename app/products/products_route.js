EF.ProductsRoute = Ember.Route.extend(EF.ResetScroll, {
    model: function() {
        return this.store.find('product');
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        if (ga) ga('send', 'pageview', '/products/' + model.get('id'));

        document.title = "Products -  Haagen Software";
    }
});