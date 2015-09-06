(function(global,$, MA){
    'use strict';

    $(function(){
//        new MusicApp.Router

        new MA.Router.MainRouter();
        Backbone.history.start();
    });



})(window, jQuery, MusicApp);



