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
    },
    toggle: function() {
      this.set({'isPlaying': !this.get('isPlaying')});
    }
  });


})(jQuery,Backbone,_, MusicApp);
