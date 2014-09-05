EF.Router = Ember.Router.extend({
    location: 'history'
});

EF.Router.map(function() {
    this.resource('projects', {"path": "/projects"}, function() {
        this.route('project', {path: "/:project_id"});
    });

    this.resource('pages', {"path": "/pages"}, function() {
        this.route('page', {"path": "/:page_id"});
    });

    this.resource('trainings', {"path": "/trainings"}, function() {
        this.route('training', {"path": "/:training_id"});
    });

    this.resource('products', {"path": "/products"}, function() {
        this.route('product', {"path": "/:product_id"});
    });
});