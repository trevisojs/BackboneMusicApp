(function($,Backbone,_, MA){
  'use strict';

  //nested namespaces
  MA.View = MusicApp.View || {};

  MA.View.SongsView = Backbone.View.extend({
      tagName: 'div',
      id: 'songs-view',
      events: {
        'click tr': 'setActiveSong'
      },
      tmpl: _.template($('#songs-view-tmpl').html()),
      initialize: function() {
        this.collection.on('reset', _.bind(this.render,this));
        this.collection.on('change:isPlaying', _.bind(this.render,this));
        this.collection.fetch({reset: true});
      },
      render: function() {
        this.$el.html(
          this.tmpl({
            songs: this.collection.toJSON()
          })
        );

        return this;
      },
      setActiveSong: function(e) {
        e.preventDefault();
        var modelId = $(e.currentTarget).data('id');
        var model = this.collection.get(modelId);

        _.each(this.collection.models, function(m) {
          if(m.id !== modelId) {
            m.set({isPlaying:false},{silent: true});
          }
        });
        model.set({isPlaying: true});
      }
  });


})(jQuery,Backbone,_, MusicApp);
