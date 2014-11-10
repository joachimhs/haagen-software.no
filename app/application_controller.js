EF.ApplicationController = Ember.Controller.extend({
    init: function() {
        this._super();

        Ember.run.schedule('afterRender', this, function(){
            console.log('initializing Stellar.js!');
            $.stellar();
        });

        console.log('applicationController is initialized!');
    }
});