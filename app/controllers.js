//Our Controllers go here

HS.PagesController = Ember.ArrayController.create({
	content: [], 
	roots: null,
	selectedPage: null,
	selectedPageId: null,
	
	//Function to return the correct chapter based on the chapter ID
	selectPageWithId: function(pageId) {
		var foundPage = null;
		
		this.get('roots').forEach(function(page) {
			if (page.get('id') == pageId) {
				foundPage = page;
			}
		})
		
		this.set('selectedPage', foundPage);
		this.set('selectedPageId', pageId);
	},
	
	contentObserver: function() {
		if (this.get('selectedPageId')) {
			this.selectPageWithId(this.get('selectedPageId'));
		}
	}.observes('content.length'),
	
	rootsObserver: function() {
		var roots = this.get('roots');
		
		console.log('rootsObserver: ' + roots.get('length'));
		
		if (roots.get('length') > 0) {
			var content = [];

			for (index = 0; index < roots.get('length'); index++) {
				if (roots.objectAt(index).get('parentPage') === null)
					content.pushObject(roots.objectAt(index));
			}

			this.set('content', content);
		}
	}.observes('roots.length')
});

HS.SelectedPage = Ember.Object.create({
	contentBinding: 'HS.PagesController.selectedPage',
	markdown: null,
	
	contentObserver: function() {
		 if (this.get('content')) {
			console.log('getting contents for Page: ' + this.get('content').get('id'));
			var markdown = null;
			$.get("/pages/" + this.get('content').get('pageFilename'), function(data) {
				HS.SelectedPage.set('markdown', data);
			}, "text")
				.error(function() { 
					HS.SelectedPage.set('markdown', "Unable to find specified page"); 
					//TODO: Navigate to 404 state
				});				
		} else {
			this.set('markdown', null);
		}
	}.observes('content')
});

HS.BlogPostsListController = Em.ArrayController.create({
    content: [],
    sortAscending: false,
    sortProperties: ['postDate'],
    selectedPost: null,
    selectedPostId: null,

    selectBlogPostWithId: function(postId) {
        var foundPost = null;

        this.get('content').forEach(function(post) {
            if (post.get('id') == postId) {
                foundPost = post;
            }
        })

        this.set('selectedPost', foundPost);
        this.set('selectedPostId', postId);
    },

    contentObserver: function() {
        if (this.get('selectedPostId')) {
            this.selectBlogPostWithId(this.get('selectedPostId'));
        }
    }.observes('content.length')
});

HS.SelectedBlogPostController = Em.Object.create({
    contentBinding: 'HS.BlogPostsListController.selectedPost',
    markdown: null,

    contentObserver: function() {
        if (this.get('content')) {
            console.log('getting contents for Post: ' + this.get('content').get('id'));
            var markdown = null;
            $.get("/posts/" + this.get('content').get('id') + ".md", function(data) {
                HS.SelectedBlogPostController.set('markdown', data);
            }, "text")
                .error(function() {
                    HS.SelectedBlogPostController.set('markdown', "Unable to find specified page");
                    //TODO: Navigate to 404 state
                });
        } else {
            this.set('markdown', null);
        }
    }.observes('content')
});