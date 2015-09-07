(function($,Backbone,_, MA){
  'use strict';

  //nested namespaces
  MA.Model = MA.Model || {};

  MA.Model.Song = Backbone.Model.extend({
    defaults: {
      'title': '',
      'artist': '',
      'album': '',
      'duration': '',
      'isPlaying': false
    }
  });


})(jQuery,Backbone,_, MusicApp);
