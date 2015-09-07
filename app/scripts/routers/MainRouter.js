(function($,Backbone,_, MA){
  'use strict';

  //nested namespaces
  MA.Router = MusicApp.Router || {};

  MA.Router.MainRouter = Backbone.Router.extend({
    routes: {
      'songs': 'showSongs',
      'artists': 'showArtists',
      'albums': 'showAlbums',
      '': 'defaultNavigation'
    },
    initialize: function() {
      console.log('Initilize router');


      this.$mainContent = $('#main-content');

      this.songsCollection = new MA.Collection.Songs();

      this.navigatorView = new MA.View.NavigatorView();
      this.playerView = new MA.View.PlayerView({collection: this.songsCollection});


      this.playerView.render();

    },
    defaultNavigation: function() {
      this.navigate('songs', {trigger: true});
    },
    showSongs: function() {
      console.log('Navigate songs');

      this.navigatorView.setActive('songs');

      if(!this.songsView) {
          this.songsView = new MA.View.SongsView({ collection: this.songsCollection });
      }

      this.$mainContent.html(this.songsView.render().el);
    },
    showArtists: function() {
      console.log('Navigate artists');
      this.navigatorView.setActive('artists');

      if(!this.artistsView) {
          this.artistsView = new MA.View.ArtistsView();
      }

      this.$mainContent.html(this.artistsView.render().el);
    },
    showAlbums: function() {
      console.log('Navigate albums');
      this.navigatorView.setActive('albums');


      if(!this.albumsView) {
          this.albumsView = new MA.View.AlbumsView();
      }

      this.$mainContent.html(this.albumsView.render().el);
    }
  });


})(jQuery,Backbone,_, MusicApp);
