EF.ApplicationController = Ember.Controller.extend({
    init: function() {
        this._super();

        Ember.run.schedule('afterRender', this, function(){
            console.log('initializing Stellar.js!');
            $.stellar();
        });

        console.log('applicationController is initialized!');

        var controller = this;

        /*console.log('Finding pageElements!');
        this.store.find('pageElement').then(function(data) {
            data.content.forEach(function(pageElement) {
                controller.pageElements.set(pageElement.id, pageElement);
            });
        });*/
    }
});