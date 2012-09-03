Ember.TEMPLATES['application'] = Ember.Handlebars.compile('' +
    '{{outlet elementId="emberArea"}}' +
    '{{outlet menu}}' +
    '{{outlet footer}}'
);

Ember.TEMPLATES['tableCellTemplate'] = Ember.Handlebars.compile('' +
    '<div class="imgdiv"><img {{bindAttr src="pageImageUrl"}}></div>' +
    '<div class="txtdiv">' +
        '<h1>{{pageTitle}}</h1>' +
        '{{pageDescription}}<br/>' +
        '-&gt; <a {{bindAttr href="postFullUrl"}} {{bindAttr onclick="linkClickString"}} >Read more</a>' +
    '</div>'
);

Ember.TEMPLATES['indexTemplate'] = Ember.Handlebars.compile('' +
    '<div id="header">' +
    '<h1>The Open Source Application Monitoring Tool</h1>' +
    '<h1>Featuring EurekaJ</h1>' +
    '</div>' +

    '<div id="content">' +
    '{{#each content}}' +
        '{{#if visibleOnFrontPage}}' +
            '{{view HS.PageItemView contentBinding="this"}}' +
        '{{/if}}' +
    '{{/each}}' +
    '</div>'
);

Ember.TEMPLATES['pageTemplate'] = Ember.Handlebars.compile('' +
    '{{content.markdown}}'
);

//'<img src="/img/hs_small.png" width="100" height="120" alt="Hs Small" style="margin-left: 50px;" onclick="SC.routes.set('location', '');">
Ember.TEMPLATES['menuTemplate'] = Ember.Handlebars.compile('' +
    '<a href="/"><img src="/img/hs_small.png" width="100" height="120" alt="Hs Small" style="margin-left: 50px;" /></a>' +
    '{{#each content}}' +
        '{{view HS.LeftMenuItemView contentBinding="this"}}' +
    '{{/each}}' +

    '<h3>Blog Posts:</h3>' +
    '<ul class="blogmenuLinkList">' +
    '{{#each HS.router.blogsController.arrangedContent}}' +
        '<li> <a {{bindAttr href="postFullUrl"}} {{bindAttr onclick="linkClickString"}} >{{postTitle}}</a></li>' +
    '{{/each}}' +
    '</ul>'
);

Ember.TEMPLATES['menuItemTemplate'] = Ember.Handlebars.compile('' +
    '{{view HS.LeftMenuItemTextView contentBinding="this"}}' +

    '{{#each childrenPages}}' +
        '<div style="margin-left: 18px;">{{view HS.LeftMenuItemView contentBinding="this"}}</div>' +
    '{{/each}}'
);


Ember.TEMPLATES['menuItemTextTemplate'] = Ember.Handlebars.compile('' +
    '{{pageName}}'
);

Ember.TEMPLATES['blogIndexTemplate'] = Ember.Handlebars.compile('' +
    '<div id="pageContent">' +
    '<h1>Haagen Software Blog</h1>' +

    '{{#each arrangedContent}}' +
    '<div class="blogPostIntro">' +
    '<h2>{{postDate}}: {{postTitle}}</h2>' +
    '{{postLongIntro}}' +
    '<br />' +
    '&gt; <a {{bindAttr href="postFullUrl"}} {{bindAttr onclick="linkClickString"}} >Read More</a>' +
    '</div>' +
    '{{/each}}' +
    '</div>'
);

Ember.TEMPLATES['blogPostTemplate'] = Ember.Handlebars.compile('' +
    '{{view HS.PageView contentBinding="content"}}'
);

Ember.TEMPLATES['footerTemplate'] = Ember.Handlebars.compile('' +
    '<div id="footer">' +
    '<a href="/"><img src="/img/logo_blackOnWhite_small.png" width="222" height="85" alt="Logo BlackOnWhite Small" style="float:left;"></a>' +
        '<div class="footerText">' +
            'Copyright 2012 Haagen Software AS. Org. Number: NO 998 392 578.<br />' +
            'Code:  <a href="http://www.opensource.org/licenses/mit-license.html">MIT license</a>. Content: <a href="http://creativecommons.org/licenses/by-sa/3.0/us/">Creative Commons</a>. Code at <a href="https://github.com/joachimhs/haagen-software.no">GitHub</a><br />' +
            'Built using <a href="http://emberjs.com">Ember.js</a>, <a href="http://jquery.com/">jQuery</a>, <a href="http://softwaremaniacs.org/soft/highlight/en/">Highlight.js</a> and <a href="https://github.com/coreyti/showdown">Showdown</a>.' +
            '<div style="float:right">' +
                '<a href="https://mixpanel.com/f/partner"><img src="https://mixpanel.com/site_media/images/partner/badge_blue.png" alt="Mobile and Web Analytics" /></a>' +
            '</div>' +
        '</div>' +
    '</div>'
);

Ember.TEMPLATES['cvs'] = Ember.Handlebars.compile('' +
    '{{#each content}}' +
        '-&gt; <a {{bindAttr href="cvFullUrl"}}>{{name}}</a>' +
    '{{/each}}'
);

Ember.TEMPLATES['cv'] = Ember.Handlebars.compile('' +
    '<h1>Curriculum Vitae</h1>' +
    '<div id="leftCV">' +
        '<h1>about me</h1>' +
        '{{#each content.about}}' +
            '{{id}}<br/>' +
        '{{/each}}' +

        '<h1>languages</h1>' +
        '{{#each content.languages}}' +
            '{{id}}</br />' +
        '{{/each}}' +

        '<h1>programming</h1>' +
        '{{#each content.programming}}' +
            '{{id}}<br/>' +
        '{{/each}}' +
    '</div>' +

    '<div id="rightCV">' +
        '<h1>interest</h1>' +
        '{{content.interest}}' +

        '<h1>education</h1>' +
        '<table class="cvtable">' +
        '{{#each content.education}}' +
            '<tr>' +
                '<td>{{period}}</td>' +
                '<td>' +
                    '<span style="font-weight: 900;">{{title}}</span><br/>{{description}}' +
                    '{{#if link}}' +
                        '<br /><a {{bindAttr href="link"}}>{{link}}</a>' +
                    '{{/if}}' +
                '</td>' +
                '<td>{{location}}</td>' +
            '</tr>' +
        '{{/each}}' +
        '</table>' +

        '<h1>experience</h1>' +
        '<table class="cvtable">' +
        '{{#each content.experience}}' +
            '<tr>' +
                '<td>{{period}}</td>' +
                '<td>' +
                    '<span style="font-weight: 900;">{{title}}</span><br/>{{description}}' +
                    '{{#if link}}' +
                        '<br /><a {{bindAttr href="link"}}>{{link}}</a>' +
                    '{{/if}}' +
                '</td>' +
            '</tr>' +
        '{{/each}}' +
        '</table>' +

        '<h1>projects</h1>' +
        '<table class="cvtable">' +
        '{{#each content.project}}' +
            '<tr>' +
                '<td>{{period}}</td>' +
                '<td>' +
                    '<span style="font-weight: 900;">{{title}}</span><br/>{{description}}' +
                    '{{#if link}}' +
                     '<br /><a {{bindAttr href="link"}}>{{link}}</a>' +
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
        '{{#each content.opensource}}' +
            '<tr>' +
                '<td>{{period}}</td>' +
                '<td>' +
                    '<span style="font-weight: 900;">{{title}}</span><br/>{{description}}' +
                    '{{#if link}}' +
                        '<br /><a {{bindAttr href="link"}}>{{link}}</a>' +
                    '{{/if}}' +
                '</td>' +
            '</tr>' +
        '{{/each}}' +
        '</table>' +

        '<h1>publications and presentations</h1>' +
        '<table class="cvtable">' +
        '{{#each content.publication}}' +
            '<tr>' +
                '<td>{{publicationDate}}</td>' +
                '<td>' +
                    '<span style="font-weight: 900;">{{title}}</span><br/>{{description}}' +
                    '{{#if link}}' +
                      '<br /><a {{bindAttr href="link"}}>{{link}}</a>' +
                    '{{/if}}' +
                '</td>' +
            '</tr>' +
        '{{/each}}' +
        '</table>' +

        '<h1>courses and certifications</h1>' +
        '<table class="cvtable">' +
        '{{#each content.course}}' +
            '<tr>' +
                '<td>{{publicationDate}}</td>' +
                '<td>' +
                    '<span style="font-weight: 900;">{{title}}</span><br/>{{description}}' +
                    '{{#if link}}' +
                      '<br /><a {{bindAttr href="link"}}>{{link}}</a>' +
                    '{{/if}}' +
                '</td>' +
            '</tr>' +
        '{{/each}}' +
        '</table>' +
    '</div>' +

    '<div>CV Design inspired by <a href="https://github.com/afriggeri/cv">https://github.com/afriggeri/cv</a>.</div>'
);