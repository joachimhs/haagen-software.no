//Our Views go in here
HS.PageItemView = Ember.View.extend({
	content: null,
	templateName: 'tableCellTemplate',
	classNames: ["tablecell", "pointer"],
	
	click: function() {
		//HS.FrontPagesController.set('selectedPage', this.get('content'));
		SC.routes.set('location', '' + this.get('content').get('id'));
	}
});

HS.PageView = Ember.View.extend({
	content: null,
	elementId: "pageContent",
	
	contentObserver: function() {
        this.rerender();
    }.observes('content')
})

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
		SC.routes.set('location', '' + this.get('content').get('id'));
	}
});