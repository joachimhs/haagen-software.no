EF.HeaderView = Ember.View.extend({
    topPositionToShowFloat: 380,

    didInsertElement: function() {
        console.log('HEADER VIEW');

        view = this;

        setTimeout(function() {
            view.detectScroll();

            $(window).scroll(function() {
                view.detectScroll();
            });
        }, 1000);
    },

    detectScroll: function() {
        if ($(window).scrollTop() > view.get('topPositionToShowFloat')) {
            view.set('isFloating', true);
        } else {
            view.set('isFloating', false);
        }
    },

    isFloatingObserver: function() {
        var view = this;
        Ember.run.scheduleOnce('afterRender', function() {
            console.log('isFloatingChanged: ' + view.get('isFloating'));
            if (view.get('isFloating')) {
                $('#headerLinkDiv').addClass('floatingTop');
                $('#logoImage').addClass('hidden');
                $('#logoImageSmall').removeClass('hidden');
                $('#headerLinkContainer').removeClass('pull-right');

                $('#logoCols').removeClass('col-md-12');
                $('#logoCols').addClass('col-md-3');
                $('#linkCols').removeClass('col-md-12');
                $('#linkCols').addClass('col-md-9');

                $('#logoCols').removeClass('col-sm-12');
                $('#logoCols').addClass('col-sm-3');
                $('#linkCols').removeClass('col-sm-12');
                $('#linkCols').addClass('col-sm-9');

                $("#headerLinkDiv").animate({top:'0px'}, 500, function() {
                    $(".headerLink").animate({"margin-right":"25px"}, 200);
                    $('#headerLinkContainer').animate({"margin-left":"-65px"}, 200, function() {
                        $('#logoImageSmall').animate({'margin-top': '0px'}, 500);
                    });
                });
            } else {
                $("#headerLinkDiv").animate({top:'-80px'}, 250, function() {
                    $('#headerLinkDiv').removeClass('floatingTop');
                    $('#logoImage').removeClass('hidden');
                    $('#logoImageSmall').addClass('hidden');

                    $('#logoCols').removeClass('col-md-3');
                    $('#logoCols').addClass('col-md-12');

                    $('#linkCols').removeClass('col-md-9');
                    $('#linkCols').addClass('col-md-12');


                    $('#logoCols').removeClass('col-sm-3');
                    $('#logoCols').addClass('col-sm-12');

                    $('#linkCols').removeClass('col-sm-9');
                    $('#linkCols').addClass('col-sm-12');


                    $('#headerLinkContainer').addClass('pull-right');

                    $(".headerLink").animate({"margin-right":"5px"}, 0);
                    $('#headerLinkContainer').animate({"margin-left":"0px"}, 0);
                    $('#logoImageSmall').animate({'margin-top': '-100px'}, 0);
                });
            }
        });
    }.observes('isFloating')
});