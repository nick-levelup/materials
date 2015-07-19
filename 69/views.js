var TodoView = Backbone.View.extend({
    tagName: 'li',
// ����������� ������� ������� ��� ���������� ��������.
    todoTpl: _.template( "An example template" ),
    events: {
        'dblclick label': 'edit',
        'keypress .edit': 'updateOnEnter',
        'blur .edit': 'close'
    },
// ��������� ����������� ��������� ������.
    render: function() {
        this.$el.html( this.todoTpl( this.model.toJSON() ) );
        this.input = this.$('.edit');
        return this;
    },
    edit: function() {
// ����������� ��� ������� ������ �� ������
    },
    close: function() {
// �����������, ����� ������ ������ �����
    },
    updateOnEnter: function( e ) {
// ����������� ��� ������ ������� ������� � ������ �������������� ������,
// �� �� ����� ����� ������� enter, ����� ������� � ��������
    }
});
var todoView = new TodoView();
// �������� � ������ ������ �� DOM-�������,
// ��������������� ���������� �������������
console.log(todoView.el); // � �������: <li></li>


var TodosView = Backbone.View.extend({
    tagName: 'ul', // ������������ ��������, �� ��������������� � 'div',
// ���� �� ������
    className: 'container', // �������������� ��������; ����� ����������� ���
// ��������� �������, �������� 'container homepage'
    id: 'todos', // �������������� ��������
});

var todosView = new TodosView({el: $('#footer')});

// setElement
view.setElement('<p><a><b>test</b></a></p>');
view.setElement($('<button></button>'));
view.setElement($('button'));