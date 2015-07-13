/*
  https://github.com/jashkenas/backbone/
  http://todomvc.com/examples/backbone/
  http://backbonejs.org/
  http://backbonejs.ru/
  http://backbonejs.org/#examples
  http://backbonejs.org/docs/backbone.html
*/

/*
  http://underscorejs.org/
  http://underscorejs.ru/
*/

Backbone

Backbone.Events

/*
– on
– off
– trigger
– once

– listenTo
– stopListening
– listenToOnce
*/

/*
"add" (model, collection, options) — when a model is added to a collection.
"remove" (model, collection, options) — when a model is removed from a collection.
"update" (collection, options) — single event triggered after any number of models have been added or removed from a collection.
"reset" (collection, options) — when the collection's entire contents have been replaced.
"sort" (collection, options) — when the collection has been re-sorted.
"change" (model, options) — when a model's attributes have changed.
"change:[attribute]" (model, value, options) — when a specific attribute has been updated.
"destroy" (model, collection, options) — when a model is destroyed.
"request" (model_or_collection, xhr, options) — when a model or collection has started a request to the server.
"sync" (model_or_collection, resp, options) — when a model or collection has been successfully synced with the server.
"error" (model_or_collection, resp, options) — when a model's or collection's request to the server has failed.
"invalid" (model, error, options) — when a model's validation fails on the client.
"route:[name]" (params) — Fired by the router when a specific route is matched.
"route" (route, params) — Fired by the router when any route has been matched.
"route" (router, route, params) — Fired by history when any route has been matched.
"all" — this special event fires for any triggered event, passing the event name as the first argument.
*/

Backbone.Model

Backbone.Model.extend(properties)

// Example Book
var Book = Book.Model.extend();

// constructor
// new Model([attributes], [options]);

new Book({
  title: 'Backbone.js Apps',
  author: 'A. Osmani'
});

//? Todo item

// initialize method
var Book = Book.Model.extend({

  urlRoot: '/myurlLLL',

  initialize: function () {
    console.log('instance of Book model was init');
  },

  validate: function (attributes) {
    if (attributes.age < 18) {
      return 'Age is to little'
    };
  },
});

//? Todo item

// Parse and Collection
new Book({
  title: 'Backbone.js Apps',
  author: 'A. Osmani'
}, {
  collection: collectionInstance,
  parse: true
});

// Get and Set ***
// model.set(attributes, [options])
//! Events
book.get('title');

book.set('title', 'JS BOOK'); // change, change:title
book.set({
  title: 'JS BOOK',
  name: 'I am'
); // change, change:title, change:name


book.set('title', 'JS BOOK', {silent: true})
//? Todo Item

// escape
book.set('xss', '<script>alert(1)</script>');
book.escape('xss');

// has
// non-null
// non-undefined
book.has('title'); // true

// unset
// model.unset(attribute, [options])
book.unset('title');
book.unset('title', {silent: true});

// clear
// model.clear([options])
book.clear();
book.clear({silent: true});

// model.id
// model.idAttribute ***
book.id
book.idAttribute

// model.cid
book.cid

// model.attributes
book.attributes

// model.defaults ***
var Book = Book.Model.extend({

  defaults: {
    title: 'Some titile'
  }
});

// changed
book.changed

// model.toJSON([options]) ***
book.toJSON();

/*
sync

save
fetch
destroy
*/