define([
  'backbone',
  'app',

  'task/tasks-view'
  ],
  function(
    Backbone,
    app,

    Tasks
  ) {

    return Backbone.Router.extend({

      routes: {
        '': 'start',
        'test': 'test',
        'result': 'result'
      },

      initialize: function () {
        this.listenTo(this, 'changeView', this.changeView);
      },

      all: function (q,w) {
        console.log('event', q,w)
      },

      test: function () {
        this.trigger('changeView');

        app.currentView = new Tasks();
      },

      result: function () {
        this.trigger('changeView');
      },

      start: function () {
        this.trigger('changeView');

        // app.currentView = new Tasks();
      },

      changeView: function (q, w) {
        if (app.currentView) {
          app.currentView.trigger('closeEvent');
        };
      }

    });
  }
);