HS.PageModel = DS.Model.extend({
	id: DS.attr('string'),
	pageName: DS.attr('string'),
	pageTitle: DS.attr('string'),
	pageImageUrl: DS.attr('string'),
	pageDescription: DS.attr('string'),
	pageFilename: DS.attr('string'),
	parentPage: DS.belongsTo('HS.PageModel'),
	childrenPages: DS.hasMany('HS.PageModel'),
	isExpanded: false,

    postFullUrl: function() {
        return "/" + this.get('id');
    }.property('id').cacheable(),

    linkClickString: function() {
        return "HS.performLink('', '" + this.get('id') + "'); return false;";
    }.property('id').cacheable()
});

//We are reopening the class so that we can add the URL that the 
//JSON Hash will be received from the server
HS.PageModel.reopenClass({
	url: '/pages.json'
});

HS.BlogPost = DS.Model.extend({
    primaryKey: 'id',
    id: DS.attr('string'),
    postTitle: DS.attr('string'),
    postDate: DS.attr('string'),
    postShortIntro: DS.attr('string'),
    postLongIntro: DS.attr('string'),
    postFullUrl: function() {
        return "/blog/post/" + this.get('id');
    }.property('id').cacheable(),

    linkClickString: function() {
        return "HS.performLink('blog/post', '" + this.get('id') + "'); return false;";
    }.property('id').cacheable()
});

HS.BlogPost.reopenClass({
    url: '/posts.json'
});