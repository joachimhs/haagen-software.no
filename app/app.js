var EF = Ember.Application.create({

});

DS.RESTAdapter.reopen({
    namespace: 'json/data'
});

EF.Adapter = DS.RESTAdapter.extend();

EF.Store = DS.Store.extend({
    adapter:  "Scene.Adapter"
});

/*Scene.PageElementAdapter = Scene.Adapter.extend({
 namespace: 'json/data'
 });*/

Ember.Inflector.inflector.irregular('productCategory', 'productCategories');