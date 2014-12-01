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
      templateName: 'result',

      initialize: function (options) {
        AbstractView.prototype.initialize.apply(this, arguments);
      }
    });
  }
);