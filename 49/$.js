$();
// OR
jQuery();

/*
1. Return a collection of matched elements
either found in the DOM based on passed argument(s)
2. created by passing an HTML string.
 */

/* =============
* 1. Search, and creates jQuery elements(object)
*
* RETURNS jQuery
* ==============
* */

//1.1
jQuery( selector [, context ] )
// selector - A string containing a selector expression

// context

/* Type: Element or jQuery
A DOM Element, Document, or jQuery to use as context
*/

var $div = $('div.foo'); // find elements by css selector

/* ----- */
// If no elements. Length property will be 0.
$div.length; // 0


/* ----- */
var $divs = $('div');

$divs.length; //3

$divs[0]; // DOM element
$divs[1]; // DOM element
$divs[2]; // DOM element

/* ----- */

var $divs = $('div', document.querySelector('ul'));
var $divs = $('div', $('ul'));

// 1.2
jQuery( element )
// selector - A DOM element to wrap in a jQuery object.

var div = document.getElementsByTagName('div')[0];

var $div = $(div);

// 1.3
jQuery( elementArray )
// selector - An array containing a set of DOM elements to wrap in a jQuery object.

var div = document.getElementsByTagName('div');
div.length; // 3

var $div = $(div);

$div.length // 3


// 1.4
jQuery( object )
// object - A plain object to wrap in a jQuery object.

// Define a plain object
var foo = { foo: "bar", hello: "world" };

// Pass it to the jQuery function
var $foo = $( foo );

// Test accessing property values
var test1 = $foo.prop( "foo" ); // bar

// 1.5
jQuery( selection );

// selection - An existing jQuery object to clone.

var $div = $('div');

var $divClone = $($div);


/* =============
 * 2. Creates DOM elements on the fly from the provided string of raw HTML.
 *
 * RETURNS jQuery
 * ==============
 * */

// 2.1
jQuery( html [, ownerDocument ] );

/*
html
    Type: htmlString
    A string of HTML to create on the fly. Note that this parses HTML, not XML.

ownerDocument
    Type: document
    A document in which the new elements will be created.
*/

$("<p id='test'>My <em>new</em> text</p>");
$( "<a href='http://jquery.com'></a>" );
$( "<img>" );
$( "<input>" );
$( "<img />" );
$( "<img>" );
$( "<a></a>" );
$( "<a>" );

// 2.2
jQuery( html, attributes );

/*
html
    Type: htmlString
    A string defining a single, standalone, HTML element (e.g. <div/> or <div></div>).

attributes
    Type: PlainObject
    An object of attributes, events, and methods to call on the newly-created element.
 */

$( "<div></div>", {
    "class": "my-div",
    text: 'Hello!'
});

$( "<div/>", {
    "class": "test",
    click: function() {
        $( this ).toggleClass( "test" );
    }
});

/* =============
 * 3. Binds a function to be executed when the DOM has finished loading.
 *
 * RETURNS jQuery
 * ==============
 * */
jQuery( callback );

/*
callback
    Type: Function()
    The function to execute when the DOM is ready.
*/


$(function() {
    // Document is ready
});

jQuery(function( $ ) {
    // Your code using failsafe $ alias here...
});