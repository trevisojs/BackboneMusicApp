(function($,Backbone,_, MA){
  'use strict';

  //nested namespaces
  MA.View = MA.View || {};

  MA.View.SongView = Backbone.View.extend({
      tagName: 'tr',
      tmpl: _.template($('#song-view-tmpl').html()),
      initialize: function() {
        this.render();
        this.model.on('change', _.bind(this.render, this));
      },
      render: function() {
        this.$el.html(
          this.tmpl(
            _.extend(
              this.model.toJSON(),
              {
                time: function(seconds) {
                    return parseInt(seconds/60,10)+':'+(seconds%60);
                }
              }
            )
          )
        );

        return this;
      }
  });


})(jQuery,Backbone,_, MusicApp);
