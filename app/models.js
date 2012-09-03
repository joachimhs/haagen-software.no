HS.PageModel = DS.Model.extend({
	pageName: DS.attr('string'),
	pageTitle: DS.attr('string'),
	pageImageUrl: DS.attr('string'),
	pageDescription: DS.attr('string'),
	pageFilename: DS.attr('string'),
	parentPage: DS.belongsTo('HS.PageModel'),
	childrenPages: DS.hasMany('HS.PageModel'),
    visibleOnFrontPage: DS.attr('boolean'),
	isExpanded: false,

    postFullUrl: function() {
        if (this.get('pageFilename') != null) {
            return "/#/pages/" + this.get('id');
        } else {
            return "/#/" + this.get('id');
        }

    }.property('id').cacheable(),

    markdown: null,
    pageFileNameObserver: function() {
        if (this.get('pageFilename')) {
            var page = this;

            $.get("/pages/" + this.get('pageFilename'), function(data) {
                //console.log('got Markdown: ' + data);
                var converter = new Showdown.converter();

                page.set('markdown', new Handlebars.SafeString(converter.makeHtml(data)));
            }, "text")
                .error(function() {
                    page.set('markdown',  "Unable to find specified page");
                    //TODO: Navigate to 404 state
                });

        } else {
            this.set('markdown', null);
        }
    }.observes('pageFilename')
});

//We are reopening the class so that we can add the URL that the 
//JSON Hash will be received from the server
HS.PageModel.reopenClass({
	url: '/pages.json?ids=%@'
});

HS.BlogPost = DS.Model.extend({
    postTitle: DS.attr('string'),
    postDate: DS.attr('string'),
    postShortIntro: DS.attr('string'),
    postLongIntro: DS.attr('string'),
    postFullUrl: function() {
        return "/#/blog/post/" + this.get('id');
    }.property('id').cacheable(),

    postIdObserver: function() {
        if (this.get('id')) {
            var page = this;

            $.get("/posts/" + this.get('id') + ".md", function(data) {
                //console.log('got Markdown: ' + data);
                var converter = new Showdown.converter();

                page.set('markdown', new Handlebars.SafeString(converter.makeHtml(data)));
            }, "text")
                .error(function() {
                    page.set('markdown',  "Unable to find specified page");
                    //TODO: Navigate to 404 state
                });

        } else {
            this.set('markdown', null);
        }
    }.observes('id')
});

HS.BlogPost.reopenClass({
    url: '/posts.json?ids=%@'
});

HS.CVData = DS.Model.extend({
    primaryKey: 'id',
    id: DS.attr('string'),
    name: DS.attr('string'),
    about: DS.hasMany('HS.DataString', { embedded: true }),
    languages: DS.hasMany('HS.DataString', { embedded: true }),
    programming: DS.hasMany('HS.DataString', { embedded: true }),
    interest: DS.attr('string'),
    education: DS.hasMany('HS.EducationData', { key: 'educationIDs' }),
    experience: DS.hasMany('HS.ExperienceData', { key: 'experienceIDs' }),
    project: DS.hasMany('HS.ProjectData', { key: 'projectIDs' }),
    opensource: DS.hasMany('HS.OpenSourceData', { key: 'opensourceIDs' }),
    publication: DS.hasMany('HS.PublicationData', {key: 'publicationIDs'}),
    course: DS.hasMany('HS.CourseData', {key: 'courseIDs'}),

    cvFullUrl: function() {
        return '/#/cv/' + this.get('id');
    }.property('id').cacheable()
});

HS.CVData.reopenClass({
    url: '/cvdata.json?ids=%@'
});

HS.DataString = DS.Model.extend({
    id: DS.attr('string')
});

HS.EducationData = DS.Model.extend({
    primaryKey: 'id',
    id: DS.attr('string'),
    period: DS.attr('string'),
    title: DS.attr('string'),
    description: DS.attr('string'),
    link: DS.attr('string')
});

HS.EducationData.reopenClass({
    url: '/education.json?ids=%@'
});

HS.ExperienceData = DS.Model.extend({
    primaryKey: 'id',
    id: DS.attr('string'),
    period: DS.attr('string'),
    title: DS.attr('string'),
    description: DS.attr('string'),
    link: DS.attr('string')
});

HS.ExperienceData.reopenClass({
    url: '/experience.json?ids=%@'
});

HS.ProjectData = DS.Model.extend({
    primaryKey: 'id',
    id: DS.attr('string'),
    period: DS.attr('string'),
    title: DS.attr('string'),
    description: DS.attr('string'),
    client: DS.attr('string'),
    link: DS.attr('string')
});

HS.ProjectData.reopenClass({
    url: '/projects.json?ids=%@'
});

HS.OpenSourceData = DS.Model.extend({
    primaryKey: 'id',
    id: DS.attr('string'),
    period: DS.attr('string'),
    title: DS.attr('string'),
    description: DS.attr('string'),
    client: DS.attr('string'),
    link: DS.attr('string')
});

HS.OpenSourceData.reopenClass({
    url: '/opensource.json?ids=%@'
});

HS.PublicationData = DS.Model.extend({
    primaryKey: 'id',
    id: DS.attr('string'),
    publicationDate: DS.attr('string'),
    title: DS.attr('string'),
    description: DS.attr('string'),
    link: DS.attr('string'),
    location: DS.attr('string')
});

HS.PublicationData.reopenClass({
    url: '/publications.json?ids=%@'
});

HS.CourseData = DS.Model.extend({
    primaryKey: 'id',
    id: DS.attr('string'),
    publicationDate: DS.attr('string'),
    title: DS.attr('string'),
    description: DS.attr('string'),
    link: DS.attr('string')
});

HS.CourseData.reopenClass({
    url: '/courses.json?ids=%@'
});