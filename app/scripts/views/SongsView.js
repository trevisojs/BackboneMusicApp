(function($,Backbone,_, MA){
  'use strict';

  //nested namespaces
  MA.View = MusicApp.View || {};

  MA.View.SongsView = Backbone.View.extend({
      tagName: 'div',
      id: 'songs-view',
      tmpl: _.template($('#songs-view-tmpl').html()),
      initialize: function() {
        this.collection.on('reset', _.bind(this.render,this));
        this.collection.fetch({reset: true});
      },
      render: function() {
        this.$el.html(
          this.tmpl({
            songs: this.collection.toJSON()
          })
        );

        return this;
      }
  });


})(jQuery,Backbone,_, MusicApp);
