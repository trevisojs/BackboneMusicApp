(function(global,$, MA){
    'use strict';

    $(function(){
//        new MusicApp.Router

        new MA.View.NavigatorView();
        var player = new MA.View.PlayerView();
        player.render();
    });



})(window, jQuery, MusicApp);



