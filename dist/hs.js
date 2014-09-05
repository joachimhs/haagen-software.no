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
EF.ApplicationController = Ember.Controller.extend({
    init: function() {
        this._super();

        Ember.run.schedule('afterRender', this, function(){
            console.log('initializing Stellar.js!');
            $.stellar();
        });

        console.log('applicationController is initialized!');

        var controller = this;

        /*console.log('Finding pageElements!');
        this.store.find('pageElement').then(function(data) {
            data.content.forEach(function(pageElement) {
                controller.pageElements.set(pageElement.id, pageElement);
            });
        });*/
    }
});
EF.HeaderController = Ember.ArrayController.extend({
    sortProperties: ['sortIndex'],
    sortAscending: true,

    init: function() {
        this._super();

        var pages = [];

        this.store.find('page').then(function(data) {
            data.forEach(function(page) {
                var topMenu = page.get('topMenu');

                if (topMenu) {
                    pages.pushObject(page);
                }
            });
        });

        var sortedResult = Em.ArrayProxy.createWithMixins(
            Ember.SortableMixin,
            { content:pages, sortProperties: this.sortProperties }
        );

        this.set('content', sortedResult);
    }
});
EF.HeaderView = Ember.View.extend({
    topPositionToShowFloat: 380,

    didInsertElement: function() {
        console.log('HEADER VIEW');

        view = this;

        setTimeout(function() {
            view.detectScroll();

            $(window).scroll(function() {
                view.detectScroll();
            });
        }, 1000);
    },

    detectScroll: function() {
        if ($(window).scrollTop() > view.get('topPositionToShowFloat')) {
            view.set('isFloating', true);
        } else {
            view.set('isFloating', false);
        }
    },

    isFloatingObserver: function() {
        var view = this;
        Ember.run.scheduleOnce('afterRender', function() {
            console.log('isFloatingChanged: ' + view.get('isFloating'));
            if (view.get('isFloating')) {
                $('#headerLinkDiv').addClass('floatingTop');
                $('#logoImage').addClass('hidden');
                $('#logoImageSmall').removeClass('hidden');
                $('#headerLinkContainer').removeClass('pull-right');

                $('#logoCols').removeClass('col-md-12');
                $('#logoCols').addClass('col-md-3');
                $('#linkCols').removeClass('col-md-12');
                $('#linkCols').addClass('col-md-9');

                $('#logoCols').removeClass('col-sm-12');
                $('#logoCols').addClass('col-sm-3');
                $('#linkCols').removeClass('col-sm-12');
                $('#linkCols').addClass('col-sm-9');

                $("#headerLinkDiv").animate({top:'0px'}, 500, function() {
                    $(".headerLink").animate({"margin-right":"25px"}, 200);
                    $('#headerLinkContainer').animate({"margin-left":"-65px"}, 200, function() {
                        $('#logoImageSmall').animate({'margin-top': '0px'}, 500);
                    });
                });
            } else {
                $("#headerLinkDiv").animate({top:'-80px'}, 250, function() {
                    $('#headerLinkDiv').removeClass('floatingTop');
                    $('#logoImage').removeClass('hidden');
                    $('#logoImageSmall').addClass('hidden');

                    $('#logoCols').removeClass('col-md-3');
                    $('#logoCols').addClass('col-md-12');

                    $('#linkCols').removeClass('col-md-9');
                    $('#linkCols').addClass('col-md-12');


                    $('#logoCols').removeClass('col-sm-3');
                    $('#logoCols').addClass('col-sm-12');

                    $('#linkCols').removeClass('col-sm-9');
                    $('#linkCols').addClass('col-sm-12');


                    $('#headerLinkContainer').addClass('pull-right');

                    $(".headerLink").animate({"margin-right":"5px"}, 0);
                    $('#headerLinkContainer').animate({"margin-left":"0px"}, 0);
                    $('#logoImageSmall').animate({'margin-top': '-100px'}, 0);
                });
            }
        });
    }.observes('isFloating')
});
Ember.Handlebars.registerBoundHelper('markdown', function(property) {
    if (property) {
        return new Handlebars.SafeString(Markdown(property));
    }
});
EF.ResetScroll = Ember.Mixin.create({
    activate: function() {
        this._super();
        var body = $("html, body");
        body.animate({scrollTop:450}, '500', 'swing', function() { });

        setTimeout(function() {
            Ember.run.schedule('afterRender', this, function(){
                console.log('initializing Stellar.js!');
                $.stellar();
            });
        }, 1000);
    },

    deactivate: function() {
        this._super();
        var body = $("html, body");
        body.animate({scrollTop:450}, '500', 'swing', function() { });

        setTimeout(function() {
            Ember.run.schedule('afterRender', this, function(){
                console.log('initializing Stellar.js!');
                $.stellar();
            });
        }, 1000);
    }
});
EF.Page = DS.Model.extend({
    title: DS.attr('string'),
    route: DS.attr('string'),
    sortIndex: DS.attr('number'),
    topMenu: DS.attr('boolean'),
    content: DS.attr('string')
});
EF.Product = DS.Model.extend({
    name: DS.attr('string'),
    content: DS.attr('string'),
    intro: DS.attr('string'),
    sortIndex: DS.attr('number'),
    cover: DS.attr('string'),
    largeImg: DS.attr('string')
});
EF.Project = DS.Model.extend({
    name: DS.attr('string'),
    content: DS.attr('string'),
    fromDate: DS.attr('date'),
    toDate: DS.attr('date'),
    intro: DS.attr('string'),
    sortIndex: DS.attr('number'),
    cover: DS.attr('string'),
    largeImg: DS.attr('string')
});
EF.Training = DS.Model.extend({
    name: DS.attr('string'),
    content: DS.attr('string'),
    intro: DS.attr('string')
});
EF.PagesPageController = Ember.ObjectController.extend({
    modelObserver: function() {
        if (this.get('model')) {
            var body = $("html, body");
            body.animate({scrollTop:450}, '500', 'swing', function() { });
        }
    }.observes('model')
});
EF.PagesPageRoute = Ember.Route.extend(EF.ResetScroll, {
    setupController: function(controller, model) {
        this._super(controller, model);
        _gaq.push(['_trackPageview', "/pages/" + model.get('id')]);

        document.title = model.get('title') + ' - Haagen Software';
    }
});
EF.PagesRoute = Ember.Route.extend(EF.ResetScroll, {

});
EF.ProductsProductController = Ember.ObjectController.extend({
    modelObserver: function() {
        if (this.get('model')) {
            var body = $("html, body");
            body.animate({scrollTop:450}, '500', 'swing', function() { });
        }
    }.observes('model')
});
EF.ProductsProductRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        this._super(controller, model);
        _gaq.push(['_trackPageview', "/products/" + model.get('id')]);

        document.title = model.get('name') - ' Haagen Software';
    }
});
EF.ProductsController = Ember.ArrayController.extend({
    sortProperties: ['sortIndex'],
    sortAscending: true
});
EF.ProductsIndexController = Ember.ArrayController.extend({
    sortProperties: ['sortIndex'],
    sortAscending: true
});
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
EF.ProjectsProjectController = Ember.ObjectController.extend({
    modelObserver: function() {
        if (this.get('model')) {
            var body = $("html, body");
            body.animate({scrollTop:450}, '500', 'swing', function() { });
        }
    }.observes('model')
});
EF.ProjectsProjectRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        this._super(controller, model);
        _gaq.push(['_trackPageview', "/projects/" + model.get('id')]);

        document.title = model.get('name') - ' Haagen Software';
    }
});
EF.ProjectsRoute = Ember.Route.extend(EF.ResetScroll, {
    model: function() {
        return this.store.find('project');
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        _gaq.push(['_trackPageview', "/projects"]);

        document.title = 'Projects -  Haagen Software';
    }
});
EF.ProjectsController = Ember.ArrayController.extend({
    sortProperties: ['sortIndex'],
    sortAscending: true
});
EF.ProjectsIndexController = Ember.ArrayController.extend({
    sortProperties: ['sortIndex'],
    sortAscending: true
});
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
EF.TrainingsTrainingRoute = Ember.Route.extend(EF.ResetScroll, {
    model: function(params) {
        return this.store.find('training', params.training_id);
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        _gaq.push(['_trackPageview', "/trainings/" + model.get('id')]);

        document.title = model.get('name') - ' Haagen Software';
    }
});
EF.TrainingsRoute = Ember.Route.extend(EF.ResetScroll, {
    model: function() {
        return this.store.find('training');
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        _gaq.push(['_trackPageview', "/trainings"]);

        document.title = 'Trainings -  Haagen Software';
    }
});