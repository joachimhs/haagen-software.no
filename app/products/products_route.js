EF.ProductsRoute = Ember.Route.extend(EF.ResetScroll, {
    model: function() {
        return this.store.find('product');
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        _gaq.push(['_trackPageview', "/products"]);

        document.title = "Products -  Haagen Software";
    }
});