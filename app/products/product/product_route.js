EF.ProductsProductRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        this._super(controller, model);
        _gaq.push(['_trackPageview', "/products/" + model.get('id')]);

        document.title = model.get('name') - ' Haagen Software';
    }
});