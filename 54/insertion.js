.wrap()
/*
Wrap an HTML structure around each element in the set of matched elements.
*/

/*
.wrap( wrappingElement )

    wrappingElement
    Type: Selector or htmlString or Element or jQuery
    A selector, element, HTML string, or jQuery object specifying
    the structure to wrap around the matched elements.
    When you pass a jQuery collection containing more than one
    element, or a selector matching more than one element, the
    first element will be used.

.wrap( function )

    function
    Type: Function( Integer index ) => String or jQuery
    A callback function returning the HTML content or jQuery
    object to wrap around the matched elements. Receives the index
    position of the element in the set as an argument. Within the
    function, this refers to the current element in the set.


*/

/*
<div class="container">
  <div class="inner">Hello</div>
  <div class="inner">Goodbye</div>
</div>
*/
$( ".inner" ).wrap( "<div class='new'></div>" );

$( ".inner" ).wrap(function() {
  return "<div class='" + $( this ).text() + "'></div>";
});

$( "p" ).wrap( "<div></div>" );

$( "span" ).wrap( "<div><div><p><em><b></b></em></p></div></div>" );

$( "p" ).wrap( document.createElement( "div" ) );

// <div class="doublediv"><div></div></div>
$( "p" ).wrap( $( ".doublediv" ) );

.unwrap()
/*
Remove the parents of the set of matched elements from the DOM,
leaving the matched elements in their place.
*/

if ( pTags.parent().is( "div" ) ) {
  pTags.unwrap();
}

.wrapAll()
/*
Wrap an HTML structure around all elements in the set of matched elements.
*/

/*
wrapAll( wrappingElement )

    wrappingElement
    Type: Selector or htmlString or Element or jQuery
    A selector, element, HTML string, or jQuery object specifying
    the structure to wrap around the matched elements.

.wrapAll( function )

    function
    Type: Function( Integer index ) => String or jQuery
    A callback function returning the HTML content or jQuery
    object to wrap around the matched elements. Receives
    the index position of the element in the set as an argument.
    Within the function, this refers to the current element in the set.

*/

/*
<div class="container">
  <div class="inner">Hello</div>
  <div class="inner">Goodbye</div>
</div>
*/

$( ".inner" ).wrapAll( "<div class='new' />");

.wrapInner()
/*
Wrap an HTML structure around the content of each element in the
set of matched elements.
*/

/*
.wrapInner( wrappingElement )

    wrappingElement
    Type: htmlString or Selector or jQuery or Element
    An HTML snippet, selector expression, jQuery object, or
    DOM element specifying the structure to wrap around the
    content of the matched elements.

.wrapInner( function )

    function
    Type: Function( Integer index ) => String
    A callback function which generates a structure to
    wrap around the content of the matched elements.
    Receives the index position of the element in the
    set as an argument. Within the function, this refers
    to the current element in the set.

*/

/*
<div class="container">
  <div class="inner">Hello</div>
  <div class="inner">Goodbye</div>
</div>
*/

$( ".inner" ).wrapInner( "<div class='new'></div>");

/*===============*/
.append()
/*
Insert content, specified by the parameter, to the end of each
element in the set of matched elements.
*/

/*
.append( content [, content ] )

    content
    Type: htmlString or Element or Array or jQuery
    DOM element, array of elements, HTML string, or jQuery
    object to insert at the end of each element in the set
    of matched elements.
    content
    Type: htmlString or Element or Array or jQuery
    One or more additional DOM elements, arrays of elements,
    HTML strings, or jQuery objects to insert at the end of
    each element in the set of matched elements.

.append( function )

    function
    Type: Function( Integer index, String html ) => htmlString
    or Element or jQuery
    A function that returns an HTML string, DOM element(s), or
    jQuery object to insert at the end of each element in the
    set of matched elements. Receives the index position of the
    element in the set and the old HTML value of the element as
    arguments. Within the function, this refers to the current
    element in the set.


*/

// <h2>Greetings</h2>
// <div class="container">
//   <div class="inner">Hello</div>
//   <div class="inner">Goodbye</div>
// </div>

$( ".inner" ).append( "<p>Test</p>" );

$( ".container" ).append( $( "h2" ) ); // move

var $newdiv1 = $( "<div id='object1'/>" ),
  newdiv2 = document.createElement( "div" ),
  existingdiv1 = document.getElementById( "foo" );
$( "body" ).append( $newdiv1, [ newdiv2, existingdiv1 ] );

$( "p" ).append( "<strong>Hello</strong>" );

$( "p" ).append( document.createTextNode( "Hello" ) );

$( "p" ).append( $( "strong" ) );

/*===============*/
.prepend()
/*
Insert content, specified by the parameter, to the beginning
of each element in the set of matched elements. 
*/

/*===============*/
.appendTo()
/*
Insert every element in the set of matched elements
to the end of the target.
*/

/*
.appendTo( target )

    target
    Type: Selector or htmlString or Element or Array or jQuery
    A selector, element, HTML string, array of elements, or jQuery
    object; the matched set of elements will be inserted at the end
    of the element(s) specified by this parameter.

*/

/*===============*/
.html()
/*
Get the HTML contents of the first element in the set of matched elements or set the HTML contents of every matched element. 
*/
/*===============*/
.prependTo()
/*
Insert every element in the set of matched elements to the beginning of the target. 
*/
/*===============*/
.text()
/*
Get the combined text contents of each element in the set of matched elements, including their descendants, or set the text contents of the matched elements. 
*/

/*======*/
.after()
/*
Insert content, specified by the parameter, after each element in the set of matched elements.

/*======*/
.before()
/*
Insert content, specified by the parameter, before each element in the set of matched elements.

/*======*/
.insertAfter()
/*
Insert every element in the set of matched elements after the target.

/*======*/
.insertBefore()
/*
Insert every element in the set of matched elements before the target.

/*======*/
.detach()
/*
Remove the set of matched elements from the DOM.

/*======*/
.empty()
/*
Remove all child nodes of the set of matched elements from the DOM.

/*======*/
.remove()
/*
Remove the set of matched elements from the DOM.

/*======*/
.unwrap()
/*
Remove the parents of the set of matched elements from the DOM, leaving the matched elements in their place.

/*======*/
.replaceAll()
/*
Replace each target element with the set of matched elements.

/*======*/
.replaceWith()
/*
Replace each element in the set of matched elements with the provided new content and return the set of elements that was removed.
*/
