//The application StateManager go in here. It will define the path the user can take
//throughout the application. 
setTimeout(function() {
    HS.router = Ember.Router.create({
        rootElement: '#emberArea',
        initialState: 'indexState',

        indexState: Ember.ViewState.extend({
            enter: function(sm) {
                this._super(sm);

                if (window.console) console.log('enter: /');
            },

            view: Ember.View.extend({
                templateName: 'indexTemplate',
                contentBinding: 'HS.PagesController.content'
            })
        }),

        viewPageState: Ember.ViewState.extend({

            enter: function(sm) {
                this._super(sm);
            },

            view: Em.View.extend({
                templateName: 'pageTemplate',
                elementId: 'page',
                contentBinding: 'HS.SelectedPage'
            })
        }),

        viewBlogIntroState: Ember.ViewState.extend({
            enter: function(sm) {
                this._super(sm);
            },

            view: Em.View.extend({
                templateName: 'blogIntroTemplate',
                elementId: 'page',
                contentBinding: 'HS.BlogPostsListController.arrangedContent'
            })
        }),

        viewBlogPostState: Ember.ViewState.extend({
            enter: function(sm) {
                this._super(sm);
            },

            view: Ember.View.extend({
                templateName: 'blogPostTemplate',
                elementId: 'page',
                contentBinding: 'HS.SelectedBlogPostController'
            })
        })
    });
}, 100);

setTimeout(function() {
HS.routes = Em.Object.create({
	currentRoute: null,
	
	gotoRoute: function(routeParams) {
		console.log(routeParams);
		if (window.console) console.log('HS.routes gotoRoute. page: ' + routeParams.page + " subpage: " + routeParams.subpage + " id: " + routeParams.id);

		if (routeParams.page === 'about' || 
			routeParams.page === 'opensource' ||
			routeParams.page === 'consultancy' ||
			routeParams.page === 'eurekaj' ||
			routeParams.page === 'btrace') {
			
			HS.PagesController.selectPageWithId(routeParams.page);
			
			HS.router.goToState('viewPageState');
		} else if (routeParams.page === 'blog') {
            if (routeParams.subpage === 'post' && routeParams.id) {
                console.log('blogid: ' + routeParams.id);
                HS.BlogPostsListController.selectBlogPostWithId(routeParams.id);
                HS.router.goToState('viewBlogPostState');
            } else {
                HS.router.goToState('viewBlogIntroState');
            }
        }
		
		if (!routeParams.page) {
			HS.router.goToState('indexState');
		}
	}
});

SC.routes.add(":page", HS.routes, 'gotoRoute');
SC.routes.add(":page/:subpage/:id", HS.routes, 'gotoRoute');
SC.routes.add(":page/:id", HS.routes, 'gotoRoute');
}, 200);