//This creates the namespace for our Ember application. In this case HS
HS = Ember.Application.create({
	ready: function() {
		this._super();
		
		var frontPages = HS.store.findAll(HS.PageModel);
		HS.PagesController.set('roots',frontPages);

        var blogPosts = HS.store.findAll(HS.BlogPost);
        HS.BlogPostsListController.set('content', blogPosts);
	}
});

//Removing the Camelcase-to-dash convention from Ember Data
DS.Model.reopen({
  namingConvention: {
	keyToJSONKey: function(key) {
	  return key;
	},

	foreignKey: function(key) {
	  return key;
	}
  }
});

Handlebars.registerHelper('convertMarkdown', function(property) {
	var value = Ember.getPath(this, property);
    console.log('value');
    console.log(value);
    console.log('property');
    console.log(property);

    if (value) {
        var converter = new Showdown.converter();
        console.log(value.toString());
        return new Handlebars.SafeString(converter.makeHtml(value.toString()));
    }

    return '';
});

HS.performLink = function(pageType, linkid) {
    if(pageType.substr(-1) === "" || pageType.substr(-1) === "/") {
        SC.routes.set("location", linkid);
    } else {
        SC.routes.set("location", pageType + "/" + linkid);
    }
}


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
            '{{view HS.PageItemView contentBinding="this"}}' +
        '{{/each}}' +
    '</div>'
);

Ember.TEMPLATES['pageTemplate'] = Ember.Handlebars.compile('' +
    '{{view HS.PageView templateName="pageContentTemplate" contentBinding="content.markdown"}}' +
    '{{view Em.View templateName="menuTemplate" elementId="menu" contentBinding="HS.PagesController.content"}}'
);

Ember.TEMPLATES['pageContentTemplate'] = Ember.Handlebars.compile('' +
    '{{#with content}}' +
        '{{convertMarkdown markdown}}' +
    '{{/with}}'
);

//'<img src="/img/hs_small.png" width="100" height="120" alt="Hs Small" style="margin-left: 50px;" onclick="SC.routes.set('location', '');">
Ember.TEMPLATES['menuTemplate'] = Ember.Handlebars.compile('' +
    '<a href="/"><img src="/img/hs_small.png" width="100" height="120" alt="Hs Small" style="margin-left: 50px;"></a>' +
    '{{#each HS.PagesController.content}}' +
        '{{view HS.LeftMenuItemView contentBinding="content"}}' +
    '{{/each}}' +

    '<h3>Blog Posts:</h3>' +
    '<ul class="blogmenuLinkList">' +
        '{{#each HS.BlogPostsListController.arrangedContent}}' +
            '<li> <a {{bindAttr href="postFullUrl"}} {{bindAttr onclick="linkClickString"}} >{{postTitle}}</a></li>' +
        '{{/each}}' +
    '</ul>'
);

Ember.TEMPLATES['menuItemTemplate'] = Ember.Handlebars.compile('' +
    '{{view HS.LeftMenuItemTextView contentBinding="content"}}' +

    '{{#each childrenPages}}' +
        '{{#with this}}' +
            '<div style="margin-left: 18px;">{{view HS.LeftMenuItemView contentBinding="content"}}</div>' +
        '{{/with}}' +
    '{{/each}}'
);


Ember.TEMPLATES['menuItemTextTemplate'] = Ember.Handlebars.compile('' +
    '<a {{bindAttr href="postFullUrl"}} {{bindAttr onclick="linkClickString"}} >{{pageName}}</a>'
);

Ember.TEMPLATES['blogIntroTemplate'] = Ember.Handlebars.compile('' +
    '{{view Em.View templateName="menuTemplate" elementId="menu"}}' +
    '<div id="pageContent">' +
        '<h1>Haagen Software Blog</h1>' +

        '{{#each content}}' +
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
    '{{view Em.View templateName="menuTemplate" elementId="menu" contentBinding="HS.PagesController.content"}}' +
    '{{view HS.PageView templateName="pageContentTemplate" contentBinding="content.markdown"}}'
);

