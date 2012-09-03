//Our Controllers go here
HS.ApplicationController = Ember.Controller.extend({

});

HS.MenuController = Ember.ArrayController.extend({
    content: []
});

HS.PagesController = Ember.ArrayController.extend({
	content: [],
	selectedPageId: null,

    selectedPageIdObserver: function() {
        this.selectPageWithId(this.get('selectedPageId'));
    }.observes('selectedPageId'),

	//Function to return the correct chapter based on the chapter ID
	selectPageWithId: function(pageId) {
		var foundPage = null;
		
		this.get('content').forEach(function(page) {
			if (page.get('id') == pageId) {
				foundPage = page;
			}
		})
		
		HS.router.get('pageController').set('content', foundPage);
		this.set('selectedPageId', pageId);
	},
	
	contentObserver: function() {
        this.selectPageWithId(this.get('selectedPageId'));
	}.observes('content.length')
});

HS.PageController = Ember.Controller.extend({
	content: null,

    contentObserver: function() {
        if (this.get('content')) {
            var page = this.get('content');

            $.get("/markdown/" + this.get('content.pageFilename'), function(data) {
                var converter = new Showdown.converter();

                page.set('markdown', new Handlebars.SafeString(converter.makeHtml(data)));
            }, "text")
                .error(function() {
                    page.set('markdown',  "Unable to find specified page");
                    //TODO: Navigate to 404 state
                });

        }
    }.observes('content')
});

HS.BlogsController= Em.ArrayController.extend({
        content: [],
        sortAscending: false,
        sortProperties: ['postDate'],
        selectedPostId: null,

        selectBlogPostWithId: function(postId) {
            var foundPost = null;

            this.get('content').forEach(function(post) {
                if (post.get('id') == postId) {
                    foundPost = post;
                }
            });

            HS.router.get('blogPostController').set('content', foundPost);
            this.set('selectedPostId', postId);
        },

        selectedPostIdObserver: function() {
            this.selectBlogPostWithId(this.get('selectedPostId'));
        }.observes('selectedPostId'),

        contentObserver: function() {
            this.selectBlogPostWithId(this.get('selectedPostId'));
        }.observes('content.length')
    });

HS.BlogPostController = Em.Controller.extend({
    content: null,

    contentObserver: function() {
        if (this.get('content')) {
            var page = this.get('content');

            $.get("/posts/" + this.get('content.id') + ".md", function(data) {
                var converter = new Showdown.converter();

                page.set('markdown', new Handlebars.SafeString(converter.makeHtml(data)));
            }, "text")
                .error(function() {
                    page.set('markdown',  "Unable to find specified page");
                    //TODO: Navigate to 404 state
                });

        }
    }.observes('content')
});

HS.CvsController = Ember.ArrayController.extend({
    content: [],
    selectedCvId: null,

    selectCvWithId: function(cvId) {
        console.log('getting CV with ID: ' + cvId);
        var foundCv = null;

        this.get('content').forEach(function(cv) {
            console.log('id: ' + cv.get('id') + " cvId: " + cvId);
            if (cv.get('id') === cvId) {
                foundCv = cv;
            }
        });

        console.log(foundCv);
        HS.router.get('cvController').set('content', foundCv);
        this.set('selectedCvId', cvId);
    },

    selectedCvIdObserver: function() {
        this.selectCvWithId(this.get('selectedCvId'));
    }.observes('selectedCvId'),

    contentObserver: function() {
        this.selectCvWithId(this.get('selectedCvId'));
    }.observes('content.length')
});

HS.CvController = Ember.Controller.extend({
    content: null
});