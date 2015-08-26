/**
JSDOC
http://usejsdoc.org/

https://dzone.com/articles/introduction-jsdoc
http://ovaraksin.blogspot.com/2011/09/quick-practical-introduction-to-jsdoc.html
*/

/*
You add documentation comments directly to your source code, right along side the code itself.
The JSDoc Tool will scan your source code, and generate a complete HTML documentation website for you.

JSDoc's purpose is to document the API of your JavaScript application or library.
It is assumed that you will want to document things like: namespaces, classes, methods, method parameters, etc.

JSDoc comments should generally be placed immediately before the code being documented.
It must start with a /** sequence in order to be recognized by the JSDoc parser. Comments beginning with /*, /***, or more than 3 stars will be ignored. 
*/

/** This is a description of the foo function. */
function foo() {
}


// Special "documentation tags" can be used to give more information.

/**
 * Represents a book.
 * @constructor
 */
function Book(title, author) {
}

/**
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
function Book(title, author) {
}