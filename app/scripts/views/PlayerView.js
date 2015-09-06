(function($,Backbone,_, MA){
  'use strict';

  //nested namespaces
  MA.View = MusicApp.View || {};


  MA.View.ProgressBarView = Backbone.View.extend({
    tagName: 'div',
    tmpl: _.template($('#progress-tmpl').html()),
    initialize: function(options) {
      this.options = options || {};
    },
    render: function() {
      var percent = 100 * this.options.currentTime / this.options.totalTime;
      this.$el.html(
        this.tmpl({
          value: percent,
          time: {
            minutes: parseInt(this.options.currentTime / 60,10),
            seconds: this.options.currentTime % 60
          }
        })
      );
      if(this.options.isPlaying && this.options.currentTime < this.options.totalTime) {
        this.options.currentTime++;
        setTimeout(function(){
            this.render();
        }.bind(this),1000);
      }
      return this;
    }
  });

  MA.View.PlayerView = Backbone.View.extend({
      el: '#player',
      tmpl: _.template($('#player-status-tmpl').html()),
      events: {
        'click .prev': 'prevTrack',
        'click .play-pause': 'playPauseTrack',
        'click .next': 'nextTrack'
      },
      initialize: function() {
        console.log('Started Player View');
        this.$playerStatus = this.$el.find('#player-status');
      },
      prevTrack: function(e) {
        window.alert('Prev track');
        e.preventDefault();
      },
      nextTrack: function(e) {
        window.alert('Next track');
        e.preventDefault();
      },
      playPauseTrack: function(e) {
        window.alert('Play/Pause track');
        e.preventDefault();
      },
      render: function() {
          var progressBarView = new MA.View.ProgressBarView({
            'currentTime': 0,
            'totalTime': 180,
            'isPlaying': true
          });

          this.$playerStatus.html(this.tmpl({
              'title': 'No Woman, No Cry',
              'duration': {
                minutes: parseInt(190 / 60,10),
                seconds: 190 % 60
              }
          }));
          this.$el.find('#progress').html(
            progressBarView.render().el
          );
      }
  });




})(jQuery,Backbone,_, MusicApp);
