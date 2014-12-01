requirejs.config({
  paths: {
    backbone: 'http://yastatic.net/backbone/1.1.2/backbone',
    jquery: 'http://yastatic.net/jquery/2.1.1/jquery',
    underscore: 'http://yastatic.net/underscore/1.6.0/underscore',
    handlebars: 'http://cdnjs.cloudflare.com/ajax/libs/handlebars.js/2.0.0/handlebars',
  },
  shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'underscore': {
      exports: '_'
    },
    'handlebars': {
      exports: 'Handlebars'
    }
  }
});

requirejs([
  'backbone',
  'app',
  'router'
  ],
  function (
    Backbone,
    app,
    Router
  ) {

    app.router = new Router();

    Backbone.history.start();
});