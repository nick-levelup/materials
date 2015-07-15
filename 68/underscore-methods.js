var Todos = new Backbone.Collection();
Todos.add([
{ title: 'go to Belgium.', completed: false },
{ title: 'go to China.', completed: false },
{ title: 'go to Austria.', completed: true }
]);

//forEach: перебор элементов коллекций
// перебор моделей коллекции
Todos.forEach(function(model){
console.log(model.get('title'));
});

//sortBy(): сортировка коллекции по заданному атрибуту
// сортировка коллекции
var sortedByAlphabet = Todos.sortBy(function (todo) {
return todo.get("title").toLowerCase();
});
sortedByAlphabet.forEach(function(model){
console.log(model.get('title'));
});

//map(): создание новой коллекции из списка значений
// с помощью функции преобразования
var count = 1;
console.log(Todos.map(function(model){
return count++ + ". " + model.get('title');
}));

// min()/max(): считывание элемента с минимальным
// или максимальным значением атрибута
Todos.max(function(model){
return model.id;
}).id;
Todos.min(function(model){
return model.id;
}).id;

// pluck(): извлечение заданного атрибута
var captions = Todos.pluck('caption');


//filter(): фильтрация коллекции
// Фильтрация коллекции с помощью массива идентификаторов моделей.
var Todos = Backbone.Collection.extend({
	model: Todo,
	filterById: function(ids){
		return this.models.filter(
		function(c) {
			return _.contains(ids, c.id);
		})
	}
});

// indexOf(): возврат элемента с заданным индексом внутри коллекции
var People = new Backbone.Collection;
People.comparator = function(a, b) {
return a.get('name') < b.get('name') ? -1 : 1;
};
var tom = new Backbone.Model({name: 'Tom'});
var rob = new Backbone.Model({name: 'Rob'});
var tim = new Backbone.Model({name: 'Tim'});
People.add(tom);
People.add(rob);
People.add(tim);
console.log(People.indexOf(rob) === 0); // true
console.log(People.indexOf(tim) === 1); // true
console.log(People.indexOf(tom) === 2); // true

// any(): проверка, проходит ли тест истинности итератора хотя бы одно зна-
// чение коллекции
Todos.any(function(model){
return model.id === 100;
});
// или
Todos.some(function(model){
return model.id === 100;
});

// size(): определение размера коллекции
Todos.size();
// эквивалентно
Todos.length;


// isEmpty(): определение, пуста ли коллекция
var isEmpty = Todos.isEmpty();

// groupBy(): помещение коллекции в группу
var Todos = new Backbone.Collection();
Todos.add([
{ title: 'go to Belgium.', completed: false },
{ title: 'go to China.', completed: false },
{ title: 'go to Austria.', completed: true }
]);
// создание групп моделей завершенных и незавершенных задач
var byCompleted = Todos.groupBy('completed');
var completed = new Backbone.Collection(byCompleted[true]);
console.log(completed.pluck('title'));
// В журнал: ["go to Austria."]


// MODELS

// pick(): извлечение набора атрибутов из модели
var Todo = Backbone.Model.extend({
defaults: {
title: '',
completed: false
}
});
var todo = new Todo({title: 'go to Austria.'});
console.log(todo.pick('title'));
// В журнал: {title: "go to Austria"}

//omit(): извлечение из модели всех атрибутов, за исключением заданных
var todo = new Todo({title: 'go to Austria.'});
console.log(todo.omit('title'));
// В журнал: {completed: false}

//keys() и values(): считывание списков имен и значений атрибутов
var todo = new Todo({title: 'go to Austria.'});
console.log(todo.keys());
// В журнал: ["title", "completed"]
console.log(todo.values());
// В журнал: ["go to Austria.", false]

// pairs(): считывание списка атрибутов в виде пар [ключ, значение]
var todo = new Todo({title: 'go to Austria.'});
var pairs = todo.pairs();
console.log(pairs[0]);
// в журнале: ["title", "go to Austria."]
console.log(pairs[1]);
// В журнал: ["completed", false]

// invert(): создание объекта, в котором значения являются ключами,
// а атрибуты — значениями
var todo = new Todo({title: 'go to Austria.'});
console.log(todo.invert());
// в журнале: {go to Austria.: "title", false: "completed"}