var TodoView = Backbone.View.extend({
    tagName: 'li',
// Кэширование функции шаблона для отдельного элемента.
    todoTpl: _.template( "An example template" ),
    events: {
        'dblclick label': 'edit',
        'keypress .edit': 'updateOnEnter',
        'blur .edit': 'close'
    },
// Повторное отображение заголовка задачи.
    render: function() {
        this.$el.html( this.todoTpl( this.model.toJSON() ) );
        this.input = this.$('.edit');
        return this;
    },
    edit: function() {
// выполняется при двойном щелчке по задаче
    },
    close: function() {
// выполняется, когда задача теряет фокус
    },
    updateOnEnter: function( e ) {
// выполняется при каждом нажатии клавиши в режиме редактирования задачи,
// но мы будем ждать нажатия enter, чтобы попасть в действие
    }
});
var todoView = new TodoView();
// помещаем в журнал ссылку на DOM-элемент,
// соответствующий экземпляру представления
console.log(todoView.el); // в журнале: <li></li>


var TodosView = Backbone.View.extend({
    tagName: 'ul', // обязательное свойство, но устанавливается в 'div',
// если не задано
    className: 'container', // необязательное свойство; можно присваивать ему
// несколько классов, например 'container homepage'
    id: 'todos', // необязательное свойство
});

var todosView = new TodosView({el: $('#footer')});

// setElement
view.setElement('<p><a><b>test</b></a></p>');
view.setElement($('<button></button>'));
view.setElement($('button'));