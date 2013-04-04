HS.AdminHeaderController = Ember.Controller.extend({
    showBrowseModal: function() {
        $("#adminBrowseModal").modal({show: true});
    }
});

HS.AdminController = Ember.Controller.extend({
    markdownObserver: function() {
        var markdown = this.get('markdown');
        if (markdown) {
            var converter = new Showdown.converter();

            this.set('html', new Handlebars.SafeString(converter.makeHtml(markdown)));
        }
    }.observes('markdown')
});

HS.AdminHeaderView = Ember.View.extend({
    elementId: 'adminHeader'
});

HS.AdminBrowseModalView = Ember.View.extend({
    elementId: "adminBrowseModal",
    classNames: ["modal",  "hide"]
});

Ember.TEMPLATES['admin'] = Ember.Handlebars.compile('' +
    '{{render adminHeader}}' +
    '{{render adminBrowseModal}}' +
    '<div id="adminpage">' +
        '<div id="adminLeftColumn" style="background: #ccc;">' +
            '{{view Ember.TextArea valueBinding="markdown"}}' +
        '</div>' +
        '<div id="adminRigthColumn" style="background: #bca;">' +
            '{{html}}' +
        '</div>' +
    '</div>'
);

Ember.TEMPLATES['adminHeader'] = Ember.Handlebars.compile('' +
    '<button class="btn" style="margin-right: 5px;">Save</button>' +
    '<button class="btn" style="margin-right: 5px;" {{action showBrowseModal}}>Browse</button>' +
    '<button class="btn" style="margin-right: 5px;">Upload</button>' +
    '<button class="btn" style="margin-right: 5px;">Markdown Guide</button>' +
    '<button class="btn" style="margin-right: 5px;">Force Refresh</button>' +
    '<button class="btn" style="margin-right: 5px;">Exit</button>'
);

Ember.TEMPLATES['adminBrowseModal'] = Ember.Handlebars.compile('' +
    '<div class="modal-header centerAlign">' +
        '<button type="button" class="close" data-dismiss="modal" class="floatRight">×</button>' +
        '<h1 class="centerAlign">HEADER</h1>' +
    '</div>' +
    '<div class="modal-body">' +
        'BODY' +
        '</div>' +
    '<div class="modal-footer">' +
        'FOOTER' +
    '</div>'
);