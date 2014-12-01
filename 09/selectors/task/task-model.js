define([
    'backbone'
  ],
  function(
    Backbone
  ) {

    return Backbone.Model.extend({
      defaults: {
        wrongCount: 0
      }
    });
  }
);