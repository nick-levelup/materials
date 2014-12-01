define(
  [
    'jquery',

    'abstract/abstract-view',

    'result/result-view'
  ],
  function (
    $,

    AbstractView,

    Result
  ) {

    return AbstractView.extend({

      templateName: 'results',

      model: new (Backbone.Model.extend({
        initialize: function () {
          this.listenTo(this, 'calcResult', this.calcResult);
        },

        calcResult: function (collection) {
          var result = (collection.length - collection.where({wasWrong: true}).length)/collection.length * 100;

          this.set('result', result)
        }
      }))(),

      initialize: function (options) {
        this.collection = options.collection;

        this.model.trigger('calcResult', options.collection);

        AbstractView.prototype.initialize.apply(this, arguments);

        this.render();
        this.renderAnswers();
        this.appendView();
      },

      beforeClose: function () {
        for (var i = 0; i < results.length; i++) {
          results[i].trigger('closeEvent');
        };
      },

      renderAnswers: function (model, value) {
        var $html = $(), resultsView = this;

        this.results = [];

        this.collection.each(function (model) {
          var view = new Result({model: model});

          resultsView.results.push(view);
          $html = $html.add(view.render().el);
        });

        this.$el.find('.js-result-list').append($html)
      }

    });
  }
);