HS.CvRoute = Ember.Route.extend({
    model: function() {
        return HS.CurriculumVitae.find();
    }
});

HS.CvIndexController = Ember.ArrayController.extend({
    needs: ['cv']
});

HS.CvPersonController = Ember.ObjectController.extend({
});

HS.CvPersonView = Ember.View.extend({
    didInsertElement: function() {
        $("#rightCV h1").html(function(i, v) { return v.replace(/(^\w{3})/, '<span style="color: ' + colorArray[i] + ';">$1</span>'); })
        $("#leftCV h1").html(function(i, v) { return v.replace(/(^\w{3})/, '<span style="color: ' + colorArray[i] + ';">$1</span>'); })
    }
});

Ember.TEMPLATES['cv'] = Ember.Handlebars.compile('' +
    '{{render menu}}' +
    '<div id="page">{{outlet}}</div>'
);

Ember.TEMPLATES['cv/index'] = Ember.Handlebars.compile('' +
    '{{#each controllers.cv}}' +
    '-&gt; {{#linkTo cv.person this}}{{name}}{{/linkTo}}<br />' +
    '{{/each}}'
);

Ember.TEMPLATES['cv/person'] = Ember.Handlebars.compile('' +
    '<h1>Curriculum Vitae</h1>' +
    '<div id="leftCV">' +
    '<h1>about me</h1>' +
    '{{#each about}}' +
    '{{id}}<br/>' +
    '{{/each}}' +

    '<h1>languages</h1>' +
    '{{#each languages}}' +
    '{{id}}</br />' +
    '{{/each}}' +

    '<h1>programming</h1>' +
    '{{#each programming}}' +
    '{{id}}<br/>' +
    '{{/each}}' +
    '</div>' +

    '<div id="rightCV">' +
    '<h1>interest</h1>' +
    '{{interest}}' +

    '<h1>education</h1>' +
    '<table class="cvtable">' +
    '{{#each education}}' +
    '<tr>' +
    '<td>{{this.period}}</td>' +
    '<td>' +
    '<span style="font-weight: 900;">{{title}}</span><br/>{{description}}' +
    '{{#if externalLink}}' +
    '<br /><a {{bindAttr href="externalLink"}}>{{externalLink}}</a>' +
    '{{/if}}' +
    '</td>' +
    '<td>{{location}}</td>' +
    '</tr>' +
    '{{/each}}' +
    '</table>' +

    '<h1>experience</h1>' +
    '<table class="cvtable">' +
    '{{#each experience}}' +
    '<tr>' +
    '<td>{{period}}</td>' +
    '<td>' +
    '<span style="font-weight: 900;">{{title}}</span><br/>{{description}}' +
    '{{#if externalLink}}' +
    '<br /><a {{bindAttr href="externalLink"}}>{{externalLink}}</a>' +
    '{{/if}}' +
    '</td>' +
    '</tr>' +
    '{{/each}}' +
    '</table>' +

    '<h1>projects</h1>' +
    '<table class="cvtable">' +
    '{{#each project}}' +
    '<tr>' +
    '<td>{{period}}</td>' +
    '<td>' +
    '<span style="font-weight: 900;">{{title}}</span><br/>{{description}}' +
    '{{#if externalLink}}' +
    '<br /><a {{bindAttr href="externalLink"}}>{{externalLink}}</a>' +
    '{{/if}}' +
    '</td>' +
    '<td>' +
    '{{client}}' +
    '{{#if location}}' +
    '<br /><span style="color: #666;">{{location}}</span>' +
    '{{/if}}' +
    '</td>' +
    '</tr>' +
    '{{/each}}' +
    '</table>' +

    '<h1>open source</h1>' +
    '<table class="cvtable">' +
    '{{#each opensource}}' +
    '<tr>' +
    '<td>{{period}}</td>' +
    '<td>' +
    '<span style="font-weight: 900;">{{title}}</span><br/>{{description}}' +
    '{{#if externalLink}}' +
    '<br /><a {{bindAttr href="externalLink"}}>{{externalLink}}</a>' +
    '{{/if}}' +
    '</td>' +
    '</tr>' +
    '{{/each}}' +
    '</table>' +

    '<h1>publications and presentations</h1>' +
    '<table class="cvtable">' +
    '{{#each publication}}' +
    '<tr>' +
    '<td>{{publicationDate}}</td>' +
    '<td>' +
    '<span style="font-weight: 900;">{{title}}</span><br/>{{description}}' +
    '{{#if externalLink}}' +
    '<br /><a {{bindAttr href="externalLink"}}>{{externalLink}}</a>' +
    '{{/if}}' +
    '</td>' +
    '</tr>' +
    '{{/each}}' +
    '</table>' +

    '<h1>courses and certifications</h1>' +
    '<table class="cvtable">' +
    '{{#each course}}' +
    '<tr>' +
    '<td>{{publicationDate}}</td>' +
    '<td>' +
    '<span style="font-weight: 900;">{{title}}</span><br/>{{description}}' +
    '{{#if externalLink}}' +
    '<br /><a {{bindAttr href="externalLink"}}>{{externalLink}}</a>' +
    '{{/if}}' +
    '</td>' +
    '</tr>' +
    '{{/each}}' +
    '</table>' +
    '</div>'
);