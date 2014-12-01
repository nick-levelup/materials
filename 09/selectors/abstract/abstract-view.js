define([
    'backbone',
    'handlebars'
  ],
  function(
      Backbone,
      Handlebars
    ) {

    return Backbone.View.extend({
      initialize: function (options) {
        this.initOptions = options;

        this.listenTo(this, 'closeEvent', this.closeEvent);

        this.setTemplate(this.templateName);

      },

      closeEvent: function () {
        this.trigger('beforeClose');

        console.log('Unbinding events for ' + this.cid);

        this.remove();
        this.unbind();

        if (this.onClose) {
          this.onClose();
        }
      },

      appendView: function ($el) {
        var $el = $el || $('body');

        $el.append(this.el);
      },

      render: function () {
        this.trigger('beforeRender');

        this.setElement(this.template(this.model.toJSON()));

        this.trigger('afterRender');

        return this;
      },

      setTemplate: function (id) {
        this.template = this.getTemplate(id);
      },

      getTemplate: function (id) {
        return Handlebars.compile($('#' + id + '-template').html());
      }
    });
  }
);