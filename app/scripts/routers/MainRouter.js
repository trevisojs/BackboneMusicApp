(function($,Backbone,_, MA){
  'use strict';

  //nested namespaces
  MA.Router = MusicApp.Router || {};

  MA.Router.MainRouter = Backbone.Router.extend({
    routes: {
      'songs': 'showSongs',
      'artists': 'showArtists',
      'albums': 'showAlbums'
    },
    initialize: function() {
      console.log('Initilize router');


      this.$mainContent = $('#main-content');

      this.navigatorView = new MA.View.NavigatorView();
      this.playerView = new MA.View.PlayerView();
      this.songsView = new MA.View.SongsView();
      this.artistsView = new MA.View.ArtistsView();
      this.albumsView = new MA.View.AlbumsView();


      this.playerView.render();

    },
    showSongs: function() {
      console.log('Navigate songs');
      this.navigatorView.setActive('songs');
      this.$mainContent.html(this.songsView.render().el);
    },
    showArtists: function() {
      console.log('Navigate artists');
      this.navigatorView.setActive('artists');
      this.$mainContent.html(this.artistsView.render().el);
    },
    showAlbums: function() {
      console.log('Navigate albums');
      this.navigatorView.setActive('albums');
      this.$mainContent.html('');
      this.$mainContent.html(this.albumsView.render().el);
    }
  });


})(jQuery,Backbone,_, MusicApp);
