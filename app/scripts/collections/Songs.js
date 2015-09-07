(function($,Backbone,_, MA){
  'use strict';

  //nested namespaces
  MA.Collection = MA.Collection || {};

  MA.Collection.Songs = Backbone.Collection.extend({
    model: MA.Model.Song,
    url: '/fixtures/songs.json'
  });


})(jQuery,Backbone,_, MusicApp);
