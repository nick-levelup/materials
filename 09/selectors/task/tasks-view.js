define(
  [
    'jquery',

    'task/task-collection',
    'task/task-view',

    'result/results-view',

    'abstract/abstract-view',

    'app'
  ],
  function (
    $,

    TaskCollection,
    TaskView,

    Result,

    AbstractView,

    app
  ) {

    return AbstractView.extend({
      collection: new TaskCollection(),
      model: new (Backbone.Model.extend({
        defaults: {
          questionCount: 0,
          questionNumber: 0
        }
      }))(),

      templateName: 'tasks',

      initialize: function () {
        this.collection.fetch();

        this.listenTo(this.collection, 'sync', this.syncEvent);
        this.listenTo(this.collection, 'beforeCloseEvent', this.beforeCloseEvent);
        this.listenTo(this.model, 'change:questionNumber', this.changeTaskEvent);
        this.listenTo(this.model, 'change:questionNumber', this.reRenderNumber);

        AbstractView.prototype.initialize.apply(this, arguments);
      },

      syncEvent: function () {
        this.model.set('questionCount', this.collection.length);
        this.model.set('questionNumber', 1, {silent: true});

        this.render();

        this.setDataAttr();

        this.model.trigger('change:questionNumber', this.model, 1);

        this.appendView();
      },

      setDataAttr: function () {
        var $allEl = this.$el.find('#test-html').find('*');

        $allEl.each(function (index, el) {
          $(el).data('result', index);
        });

        console.log($allEl)
      },

      nextTask: function () {
        if (this.model.get('questionNumber') === this.collection.length) {
          this.createResult();
        } else {
          this.model.set('questionNumber', this.model.get('questionNumber') + 1);
        }
      },

      createResult: function () {
        this.currentTask.closeCurrentTask();

        app.currentView = new Result({collection: this.collection});

        this.trigger('closeEvent');
      },

      changeTaskEvent: function (model, value) {
        if (this.currentTask) {
          this.currentTask.closeCurrentTask();
        };

        this.currentTask = new TaskView(
          {
            model: this.collection.at(value - 1),
            $wrap: this.$el.find('.js-question-render'),
            parent: this
          });
      },

      beforeCloseEvent: function () {
        this.currentTask.closeCurrentTask();
      },

      getHtmlCount: function (string) {
        var answer = false,
            $html, dataArray = [];

        if (string) {
          try{
            $html = $('#test-html').find(string);
          } catch(e) {
            return answer;
          };

          if ($html.length) {
            $html.each(function (index, el) {
              dataArray.push($(el).data('result'));
            });

            answer = {
              count: $html.length,
              dataArray: dataArray
            }

            this.markHTML($html);
          };
        };

        return answer;
      },

      markHTML: function ($html) {
        $html.addClass('is-active');

        setTimeout(function () {
          $html.removeClass('is-active')
        }, 1000)
      },

      reRenderNumber: function () {
        this.$el.find('.js-qw-number').text(this.model.get('questionNumber'))
      }

    });
  }
);