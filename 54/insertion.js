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