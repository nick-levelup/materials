define([
    'backbone',
    'task/task-model'
  ],
  function(
    Backbone,
    TaskModel
  ) {

    return Backbone.Collection.extend({
      url: 'data.json',

      model: TaskModel,

      initialize: function () {
        this.listenTo(this, 'sync', this.syncEvent);
      },

      parse: function (response) {
        return _.shuffle(response);
      },

      syncEvent: function () {
      }
    });
  }
);