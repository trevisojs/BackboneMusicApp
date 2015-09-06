(function($,Backbone,_, MA){
  'use strict';

  //nested namespaces
  MA.View = MusicApp.View || {};

  MA.View.ArtistsView = Backbone.View.extend({
      tagName: 'div',
      id: 'artists-view',
      tmpl: _.template($('#artists-view-tmpl').html()),
      initialize: function() {
        this.render();
      },
      render: function() {
        this.$el.html(
          this.tmpl({})
        );

        return this;
      }
  });


})(jQuery,Backbone,_, MusicApp);
