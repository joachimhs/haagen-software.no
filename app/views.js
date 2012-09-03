HS.ApplicationView = Ember.View.extend({
    elementId: 'mainArea',
    templateName: 'application'
});

HS.PagesView = Ember.View.extend({
    templateName: 'indexTemplate'
});

HS.PageItemView = Ember.View.extend({
	content: null,
	templateName: 'tableCellTemplate',
	classNames: ["tablecell", "pointer"],

	click: function() {
		//HS.FrontPagesController.set('selectedPage', this.get('content'));
		//SC.routes.set('location', '' + this.get('content').get('id'));
        console.log('PageItemView click: ' + this.get('content').get('id'));
        if (this.get('content').get('pageFilename') != null) {
            HS.router.get('pagesController').set('selectedPageId', this.get('content').get('id'));
            HS.router.transitionTo("pages.page", {"page_id": this.get('content').get('id')});
        } else {
            HS.router.transitionTo(this.get('content').get('id'));
        }
	}
});

HS.MenuView = Ember.View.extend({
    templateName: 'menuTemplate',
    elementId: 'menuArea'
});

HS.PageView = Ember.View.extend({
    elementId: 'page',
    templateName: 'pageTemplate'
});

HS.PageContentView = Ember.View.extend({
	content: null,
	elementId: "pageContent",
	
	contentObserver: function() {
        this.rerender();
    }.observes('content')
});

HS.LeftMenuItemView = Ember.View.extend({
	content: null,
	templateName: 'menuItemTemplate'
});

HS.LeftMenuItemTextView = Ember.View.extend({
    content: null,
	templateName: 'menuItemTextTemplate',
	classNames: ["pointer"],
	
	click: function() {
		//HS.FrontPagesController.set('selectedPage', this.get('content'));
		//SC.routes.set('location', '' + this.get('content').get('id'));
        console.log('HS.LeftMenuItemTextView click');
        console.log(this.get('content'));
        if (this.get('content').get('pageFilename') != null) {
            HS.router.transitionTo("pages.page", {"page_id": this.get('content').get('id')});
        } else {
            HS.router.transitionTo(this.get('content').get('id'));
        }
	},

    clickMenuLink: function() {
        console.log('HS.LeftMenuItemTextView clickMenuLink');
    },

    contentObserver: function() {
        console.log('\tcontent observer');
        console.log(this.get('content'));
    }.observes('content')
});

HS.BlogsView = Ember.View.extend({
    content: null,
    templateName: 'blogIndexTemplate',
    elementId: 'page'
});

HS.BlogPostView = Ember.View.extend({
    content: null,
    templateName: 'blogPostTemplate'
});

HS.FooterView = Ember.View.extend({
    templateName: 'footerTemplate'
});

HS.CvsView = Ember.View.extend({
    templateName: 'cvs',
    elementId: 'page'
});

HS.CvView = Ember.View.extend({
    templateName: 'cv',
    elementId: 'page',
    didInsertElement: function() {
        $("#rightCV h1").html(function(i, v) { return v.replace(/(^\w{3})/, '<span style="color: ' + colorArray[i] + ';">$1</span>'); })
        $("#leftCV h1").html(function(i, v) { return v.replace(/(^\w{3})/, '<span style="color: ' + colorArray[i] + ';">$1</span>'); })
    }
});
