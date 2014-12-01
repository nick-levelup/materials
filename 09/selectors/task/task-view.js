define(
  [
    'abstract/abstract-view',
    'jquery'
  ],
  function (
    AbstractView,
    $
  ) {

    return AbstractView.extend({
      templateName: 'task',

      events: {
        'click .js-dont-know': 'dontKnowEvent',
        'click .js-check': 'checkEvent'
      },

      initialize: function (options) {
        AbstractView.prototype.initialize.apply(this, arguments);

        this.render();
        this.appendView(options.$wrap);

        this.listenTo(this.model, 'change:answer', this.afterCheckEvent);
      },

      getHtmlCount: function () {
        return this.initOptions.parent.getHtmlCount.apply(this.initOptions.parent, arguments);
      },

      checkEvent: function () {
        var value = $.trim(this.$el.find('.js-input').val()),
            result, answerCount, answerData, isCorrect = false;

        result = this.getHtmlCount(value);

        if (result) {
          answerCount = this.model.get('answerCount');
          answerData = this.model.get('answerData');

          if (result.count === answerCount && _.difference(result.dataArray, answerData).length === 0) {
            isCorrect = true;
          };
        };

        this.model.set('answer', isCorrect);

        if (isCorrect === false) {
          this.setWrongCount();
        };
      },

      setWrongCount: function () {
        this.model.set('wasWrong', true);
        this.model.set('wrongCount', this.model.get('wrongCount') + 1);
      },

      closeCurrentTask: function () {
        this.trigger('closeEvent');
      },

      afterCheckEvent: function (model, value) {
        if (value === false) {
          alert('Wrong');
        };

        if (value === true) {
          this.initOptions.parent.nextTask();
        };
      }
    });
  }
);