EF.ProductsProductRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        this._super(controller, model);
        if (ga) ga('send', 'pageview', '/products/' + model.get('id'));

        document.title = model.get('name') - ' Haagen Software';
    }
});