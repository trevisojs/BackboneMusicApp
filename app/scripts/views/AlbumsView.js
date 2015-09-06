(function($,Backbone,_, MA){
  'use strict';

  //nested namespaces
  MA.View = MusicApp.View || {};

  MA.View.AlbumsView = Backbone.View.extend({
      tagName: 'div',
      id: 'albums-view',
      tmpl: _.template($('#albums-view-tmpl').html()),
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
