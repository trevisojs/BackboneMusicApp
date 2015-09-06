(function($,Backbone,_, MA){
  'use strict';

  //nested namespaces
  MA.View = MusicApp.View || {};

  MA.View.NavigatorView = Backbone.View.extend({
      el: '#navigator',
      events: {
        'click .list-group-item': 'navigate',
        'keyup .search-box': 'filter'
      },
      initialize: function() {
        console.log(this.$el);

        this.$links = this.$el.find('.list-group-item');
      },
      filter: function(e) {
        console.log(e.currentTarget.value);

        //after navigation reinit this view with a different model or change the model associated to the view
        //this.model.set('filterText', e.currentTargetValue);
      },
      navigate: function(e) {
        this.$links.removeClass('active');
        $(e.currentTarget).addClass('active');
      }
  });


})(jQuery,Backbone,_, MusicApp);
