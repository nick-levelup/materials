define([
    'backbone'
  ], function (
    Backbone
  ) {

    return new (Backbone.View.extend({

      initialize: function () {
        console.log('start app');
      }
    }))();
  }
)