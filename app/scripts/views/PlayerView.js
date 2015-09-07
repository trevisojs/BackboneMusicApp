(function($,Backbone,_, MA){
  'use strict';

  //nested namespaces
  MA.View = MusicApp.View || {};


  MA.View.ProgressBarView = Backbone.View.extend({
    tagName: 'div',
    tmpl: _.template($('#progress-tmpl').html()),
    initialize: function() {
      this.render();
    },
    render: function() {
      var percent = 100 * this.model.get('currentTime') / this.model.get('duration');
      this.$el.html(
        this.tmpl({
          value: percent
        })
      );
      if(this.model.get('isPlaying') && this.model.get('currentTime') < this.model.get('duration')) {
        this.model.set({'currentTime': this.model.get('currentTime')+1 });
        setTimeout(function(){
            this.render();
        }.bind(this),1000);
      }
      return this;
    }
  });

  MA.View.PlayerView = Backbone.View.extend({
      el: '#player',
      tmpl: _.template($('#player-tmpl').html()),
      events: {
        'click .prev': 'prevTrack',
        'click .play-pause': 'playPauseTrack',
        'click .next': 'nextTrack'
      },
      initialize: function() {
        console.log('Started Player View');

        this.currentSongModel = new MA.Model.Song({
          'title': '-----',
          'isPlaying': false,
          'artist': '------',
          'duration': 0
        });

        this.collection.on('change:isPlaying', function(model) {

            this.currentSongModel = model;
            this.render();

        }.bind(this));

      },
      prevTrack: function(e) {
        e.preventDefault();
        var idx = (this.currentSongModel.id-1) % this.collection.length;
        var nextSong = this.collection.get(idx);
        this.collection.play(nextSong);
      },
      nextTrack: function(e) {
        e.preventDefault();
        var idx = (this.currentSongModel.id+1) % this.collection.length;
        var nextSong = this.collection.get(idx);
        this.collection.play(nextSong);
      },
      playPauseTrack: function(e) {
        e.preventDefault();
        this.currentSongModel.toggle();
      },
      render: function() {
          if(!this.currentSongModel.get('currentTime')) {
            this.currentSongModel.set('currentTime',0);
          }
          this.progressBarView = new MA.View.ProgressBarView({ model: this.currentSongModel });
          this.$el.html(this.tmpl(this.currentSongModel.toJSON()));

          this.$el.find('#progress').html(
            this.progressBarView.render().el
          );
      }
  });




})(jQuery,Backbone,_, MusicApp);
