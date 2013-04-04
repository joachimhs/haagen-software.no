HS.Model = Ember.Object.extend({

});

HS.Model.reopenClass({
    collection: Ember.A(),

    find: function(id, type) {
        var foundItem = this.contentArrayContains(id, type);

        if (!foundItem) {
            foundItem = type.create({ id: id, isLoaded: false});
            Ember.get(type, 'collection').pushObject(foundItem);
        }

        return foundItem;
    },

    contentArrayContains: function(id, type) {
        var contains = null;

        Ember.get(type, 'collection').forEach(function(item) {
            if (item.get('id') === id) {
                contains = item;
            }
        });

        return contains;
    },

    findAll: function(url, type, key) {
        console.log('findAll: ' + type + " " + url + " " + key);
        var result = [];

        var collection = this;
        $.getJSON(url, function(data) {
            $.each(data[key], function(i, row) {
                var page = collection.contentArrayContains(row.id, type);
                if (!page) {
                    page =  type.create();
                }
                page.setProperties(row);
                page.set('isLoaded', true);
                result.pushObject(page);
            });
        });

        Ember.set(type, 'collection', result);
        return Ember.get(type, 'collection');
    }
})

HS.Page = HS.Model.extend({
    childrenPages: function() {
        var children = [];
        if (this.get('childrenPageIds')) {
            console.log('childrenPages: ' + this.get('childrenPageIds'));

            this.get('childrenPageIds').forEach(function(childPage) {
                children.pushObject(HS.Page.find(childPage));
            });
        }
        return children;
    }.property('childrenPageIds')
});

HS.Page.reopenClass({
    find: function(id) {
        return HS.Model.find(id, HS.Page);
    },

    findAll: function() {
        return HS.Model.findAll('/pages', HS.Page, 'pages');
    }
});

HS.Post = HS.Model.extend();

HS.Post.reopenClass({
    find: function(id) {
        return HS.Model.find(id, HS.Post);
    },

    findAll: function() {
        return HS.Model.findAll("/posts", HS.Post, "posts");
    }
});

HS.CurriculumVitae = HS.Model.extend({
    education: function() {
        console.log('education CP');
        var educations = [];
        if (this.get('educationIds')) {
            console.log('educations: ' + this.get('educationIds'));

            this.get('educationIds').forEach(function(edu) {
                educations.pushObject(HS.Education.find(edu));
            });
        }
        return educations;
    }.property('id', 'educationIds', 'educationIds.length'),

    experience: function() {
        console.log('education CP');
        var experiences = [];
        if (this.get('experienceIds')) {
            console.log('experience: ' + this.get('experienceIds'));

            this.get('experienceIds').forEach(function(exp) {
                experiences.pushObject(HS.Experience.find(exp));
            });
        }
        return experiences;
    }.property('experienceIds.length'),

    project: function() {
        console.log('education CP');
        var projects = [];
        if (this.get('projectIds')) {
            console.log('experience: ' + this.get('projectIds'));

            this.get('projectIds').forEach(function(proj) {
                projects.pushObject(HS.Project.find(proj));
            });
        }
        return projects;
    }.property('projectIds.length'),

    opensource: function() {
        console.log('opensource CP');
        var projects = [];
        if (this.get('opensourceIds')) {
            console.log('opensource: ' + this.get('opensourceIds'));

            this.get('opensourceIds').forEach(function(oss) {
                projects.pushObject(HS.OpenSource.find(oss));
            });
        }
        return projects;
    }.property('opensourceIds.length'),

    publication: function() {
        console.log('publication CP');
        var publications = [];
        if (this.get('publicationIds')) {
            console.log('opensource: ' + this.get('publicationIds'));

            this.get('publicationIds').forEach(function(oss) {
                publications.pushObject(HS.Publication.find(oss));
            });
        }
        return publications;
    }.property('publicationIds.length'),

    course: function() {
        console.log('publication CP');
        var courses = [];
        if (this.get('courseIds')) {
            console.log('course: ' + this.get('courseIds'));

            this.get('courseIds').forEach(function(item) {
                courses.pushObject(HS.Course.find(item));
            });
        }
        return courses;
    }.property('courseIds.length')
});

HS.CurriculumVitae.reopenClass({
    find: function(id) {
        return HS.Model.find(id, HS.CurriculumVitae);
    },

    findAll: function() {
        return HS.Model.findAll("/curriculum_vitaes", HS.CurriculumVitae, "curriculum_vitaes");
    }
});

HS.Education = HS.Model.extend();

HS.Education.reopenClass({
    find: function(id) {
        return HS.Model.find(id, HS.Education);
    },

    findAll: function() {
        return HS.Model.findAll("/educations", HS.Education, "educations");
    }
});

HS.Experience = HS.Model.extend();

HS.Experience.reopenClass({
    find: function(id) {
        return HS.Model.find(id, HS.Experience);
    },

    findAll: function() {
        return HS.Model.findAll("/experiences", HS.Experience, "experiences");
    }
});

HS.Project = HS.Model.extend();

HS.Project.reopenClass({
    find: function(id) {
        return HS.Model.find(id, HS.Project);
    },

    findAll: function() {
        return HS.Model.findAll("/projects", HS.Project, "projects");
    }
});

HS.OpenSource = HS.Model.extend();

HS.OpenSource.reopenClass({
    find: function(id) {
        return HS.Model.find(id, HS.OpenSource);
    },

    findAll: function() {
        return HS.Model.findAll("/open_sources", HS.OpenSource, "open_sources");
    }
});

HS.Publication = HS.Model.extend();

HS.Publication.reopenClass({
    find: function(id) {
        return HS.Model.find(id, HS.Publication);
    },

    findAll: function() {
        return HS.Model.findAll("/publications", HS.Publication, "publications");
    }
});

HS.Course = HS.Model.extend();

HS.Course.reopenClass({
    find: function(id) {
        return HS.Model.find(id, HS.Course);
    },

    findAll: function() {
        return HS.Model.findAll("/courses", HS.Course, "courses");
    }
});