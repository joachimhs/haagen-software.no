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

        if (ga) ga('send', 'pageview', '/pages/' + model.get('id'));

        document.title = model.get('title') + ' - Haagen Software';
    }
});
EF.PagesRoute = Ember.Route.extend(EF.ResetScroll, {

});
EF.Router = Ember.Router.extend({
    location: 'history'
});

EF.Router.map(function() {

});
EF.RawTransform = DS.Transform.extend({
    deserialize: function(serialized) {
        return serialized;
    },
    serialize: function(deserialized) {
        return deserialized;
    }
});