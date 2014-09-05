EF.ResetScroll = Ember.Mixin.create({
    activate: function() {
        this._super();
        var body = $("html, body");
        body.animate({scrollTop:450}, '500', 'swing', function() { });

        setTimeout(function() {
            Ember.run.schedule('afterRender', this, function(){
                console.log('initializing Stellar.js!');
                $.stellar();
            });
        }, 1000);
    },

    deactivate: function() {
        this._super();
        var body = $("html, body");
        body.animate({scrollTop:450}, '500', 'swing', function() { });

        setTimeout(function() {
            Ember.run.schedule('afterRender', this, function(){
                console.log('initializing Stellar.js!');
                $.stellar();
            });
        }, 1000);
    }
});