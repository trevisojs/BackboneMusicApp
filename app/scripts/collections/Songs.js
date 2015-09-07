(function($,Backbone,_, MA){
  'use strict';

  //nested namespaces
  MA.Collection = MA.Collection || {};

  MA.Collection.Songs = Backbone.Collection.extend({
    model: MA.Model.Song,
    url: '/fixtures/songs.json',
    play: function(model) {
      _.each(this.models, function(m) {
        if(m.id !== model.id) {
          m.set({isPlaying:false},{silent: true});
        }
      });
      model.set({isPlaying: true});
    }
  });


})(jQuery,Backbone,_, MusicApp);
