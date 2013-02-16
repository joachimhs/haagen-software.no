HS.Page = DS.Model.extend({
	pageName: DS.attr('string'),
	pageTitle: DS.attr('string'),
	pageImageUrl: DS.attr('string'),
	pageDescription: DS.attr('string'),
	pageFilename: DS.attr('string'),
	parentPage: DS.belongsTo('HS.Page'),
	childrenPages: DS.hasMany('HS.Page'),
    visibleOnFrontPage: DS.attr('boolean'),
	isExpanded: false,

    postFullUrl: function() {
        if (this.get('pageFilename') != null) {
            return "/pages/" + this.get('id');
        } else {
            return "/" + this.get('id');
        }

    }.property('id').cacheable(),

    markdown: null
});


HS.Post = DS.Model.extend({
    postTitle: DS.attr('string'),
    postDate: DS.attr('string'),
    postShortIntro: DS.attr('string'),
    postLongIntro: DS.attr('string'),
    postFullUrl: function() {
        return "/blog/post/" + this.get('id');
    }.property('id').cacheable(),
    markdown: null
});

HS.CurriculumVitae = DS.Model.extend({
    name: DS.attr('string'),
    about: DS.hasMany('HS.DataString', { embedded: true }),
    languages: DS.hasMany('HS.DataString', { embedded: true }),
    programming: DS.hasMany('HS.DataString', { embedded: true }),
    interest: DS.attr('string'),
    education: DS.hasMany('HS.Education'),
    experience: DS.hasMany('HS.Experience'),
    project: DS.hasMany('HS.Project'),
    opensource: DS.hasMany('HS.OpenSource'),
    publication: DS.hasMany('HS.Publication'),
    course: DS.hasMany('HS.Course')
});

HS.DataString = DS.Model.extend({
    id: DS.attr('string')
});

HS.Education = DS.Model.extend({
    period: DS.attr('string'),
    title: DS.attr('string'),
    description: DS.attr('string'),
    externalLink: DS.attr('string')
});

HS.Experience = DS.Model.extend({
    period: DS.attr('string'),
    title: DS.attr('string'),
    description: DS.attr('string'),
    link: DS.attr('string')
});

HS.Project = DS.Model.extend({
    period: DS.attr('string'),
    title: DS.attr('string'),
    description: DS.attr('string'),
    client: DS.attr('string'),
    link: DS.attr('string')
});

HS.OpenSource = DS.Model.extend({
    period: DS.attr('string'),
    title: DS.attr('string'),
    description: DS.attr('string'),
    client: DS.attr('string'),
    link: DS.attr('string')
});

HS.Publication = DS.Model.extend({
    publicationDate: DS.attr('string'),
    title: DS.attr('string'),
    description: DS.attr('string'),
    link: DS.attr('string'),
    location: DS.attr('string')
});

HS.Course = DS.Model.extend({
    publicationDate: DS.attr('string'),
    title: DS.attr('string'),
    description: DS.attr('string'),
    link: DS.attr('string')
});