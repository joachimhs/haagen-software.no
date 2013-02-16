HS.router = Ember.Router.create({
    enableLogging: true,
    location: 'history',
    root: Ember.Route.extend({
        enter: function() {
            //HS.router.get('blogPostsListController').set('content', HS.store.findAll(HS.BlogPost));
            console.log('enter root state');
            HS.store.findAll(HS.PageModel);
            HS.store.findAll(HS.BlogPost);
        },

        index: Ember.Route.extend({
            route: '/',

            connectOutlets: function(router) {
                router.get('applicationController').connectOutlet('pages');
                router.get('applicationController').connectOutlet('footer', 'footer');

                var frontPages = HS.store.filter(HS.PageModel, function(data) {
                    if (data.get('parentPage') === null) { return true; }
                });
                router.get('pagesController').set('content', frontPages);
            }
        }),
        pages: Ember.Route.extend({
            route: '/pages',

            connectOutlets: function(router) {
                var frontPages = HS.store.filter(HS.PageModel, function(data) {
                    if (data.get('parentPage') === null) { return true; }
                });

                router.get('applicationController').connectOutlet('menu', 'menu', frontPages);
                router.get('applicationController').connectOutlet('footer', 'footer');
                router.get('applicationController').connectOutlet('page', HS.PageModel.find());
                router.get('pagesController').set('content', HS.PageModel.find());
                router.get('blogsController').set('content', HS.BlogPost.find());
            },

            page: Ember.Route.extend({
                route: '/:page_id',

                enter: function() {
                    console.log('enter page state');
                },

                connectOutlets: function(router, page) {
                    console.log('markdown page id: ' + page.page_id);
                    console.log(page);
                    router.get('pagesController').set('selectedPageId', page.page_id);
                    router.get('applicationController').connectOutlet('page');//, HS.PageModel.find(page.page_id));
                }
            })
        }),
        /* //Legacy states */
        blogs: Ember.Route.extend({
            route: '/blog',
            initialState: 'index',

            connectOutlets: function(router) {
                var frontPages = HS.store.filter(HS.PageModel, function(data) {
                    if (data.get('parentPage') === null) { return true; }
                });

                router.get('applicationController').connectOutlet('menu', 'menu', frontPages);
                router.get('applicationController').connectOutlet('footer', 'footer');
                router.get('applicationController').connectOutlet('blogs', HS.BlogPost.find());
            },

            index: Ember.Route.extend({
                route: '/',

                connectOutlets: function(router) {
                    router.get('applicationController').connectOutlet('blogs', HS.BlogPost.find());
                }
            }),

            blog: Ember.Route.extend({
                route: '/post/:post_id',

                connectOutlets: function(router, post) {
                    console.log('blog post id: ' + post.post_id);
                    router.get('applicationController').connectOutlet('blogPost');
                    router.get('blogsController').set('selectedPostId', post.post_id);
                }
            })
        }),
        cv: Ember.Route.extend({
            route: '/curriculum_vitaes',
            initialState: 'index',

            connectOutlets: function(router) {

                router.get('blogsController').set('content', HS.BlogPost.find());
                var frontPages = HS.store.filter(HS.PageModel, function(data) {
                    if (data.get('parentPage') === null) { return true; }
                });

                router.get('applicationController').connectOutlet('menu', 'menu', frontPages);
                router.get('applicationController').connectOutlet('footer', 'footer');


                HS.store.findAll(HS.CVData);
                router.get('applicationController').connectOutlet('curriculum_vitaes', HS.store.find(HS.CVData));
            },

            index: Ember.Route.extend({
                route: '/',

                connectOutlets: function(router) {
                    router.get('applicationController').connectOutlet('curriculum_vitaes', HS.store.find(HS.CVData));
                }
            }),

            showCV: Ember.Route.extend({
                route: '/:cv_id',

                connectOutlets: function(router, cv) {
                    console.log('CV id: ' + cv.cv_id);

                    router.get('applicationController').connectOutlet('cv');
                    router.get('cvsController').set('selectedCvId', cv.cv_id);
                }
            })
        }),
        /* Legacy states, rerouting to new states */
        about: Ember.Route.extend({
            route: '/about',
            connectOutlets: function(router) {
                router.transitionTo('pages.page', {"page_id": "about"});
            }
        }),
        opensource: Ember.Route.extend({
            route: '/opensource',
            connectOutlets: function(router) {
                router.transitionTo('pages.page', {"page_id": "opensource"});
            }

        }),
        consultancy: Ember.Route.extend({
            route: '/consultancy',
            connectOutlets: function(router) {
                router.transitionTo('pages.page', {"page_id": "consultancy"});
            }
        })
    })
});