(function($,Backbone,_, MA){
  'use strict';

  //nested namespaces
  MA.View = MusicApp.View || {};

  MA.View.SongsView = Backbone.View.extend({
      tagName: 'div',
      id: 'songs-view',
      tmpl: _.template($('#songs-view-tmpl').html()),
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
