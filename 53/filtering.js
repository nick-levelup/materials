/* =============== */
.eq()
/* Reduce the set of matched elements to the one at
the specified index. */

/*
.eq( index )

    index
    Type: Integer
    An integer indicating the 0-based position of the element.

    indexFromEnd
    Type: Integer
    An integer indicating the position of the element, counting
    backwards from the last element in the set.
*/

$( "li" ).eq( 2 ).css( "background-color", "red" );
$( "li" ).eq( -2 ).css( "background-color", "red" );


/* =============== */
.filter()
/* Reduce the set of matched elements to those that match
the selector or pass the function’s test. */

/*
.filter( selector )

    selector
    Type: Selector
    A string containing a selector expression to match the current set
    of elements against.

    function
    Type: Function( Integer index, Element element ) => Boolean
    A function used as a test for each element in the set. this is the
    current DOM element.

    elements
    Type: Element
    One or more DOM elements to match the current set of elements against.

    selection
    Type: jQuery
    An existing jQuery object to match the current set of elements against.


*/

$( "li" ).filter( ":even" ).css( "background-color", "red" );
/* ============ */
$( "li" )
  .filter(function( index ) {
    return $( "strong", this ).length === 1;
  })
    .css( "background-color", "red" );
/* ============ */
$( "div" )
  .css( "background", "#b4b0da" )
  .filter(function( index ) {
    return index === 1 || $( this ).attr( "id" ) === "fourth";
  })
    .css( "border", "3px double red" );
/* ============ */
$( "div" ).filter( document.getElementById( "unique" ) );
/* ============ */
$( "div" ).filter( $( "#unique" ) );


/* =============== */
.not()
/* Remove elements from the set of matched elements. */


$( "li" ).not( ":even" ).css( "background-color", "red" );

$( "li" ).not( document.getElementById( "notli" ) )
  .css( "background-color", "red" );

$( "div" ).not( ".green, #blueone" )
  .css( "border-color", "red" );

$( "p" ).not( $( "#selected" )[ 0 ] );

$( "p" ).not( "#selected" );

$( "p" ).not( $( "div p.selected" ) );
/* =============== */

/* =============== */
.slice()
/* Reduce the set of matched elements to a subset
specified by a range of indices. */

/*
.slice( start [, end ] )

    start
    Type: Integer
    An integer indicating the 0-based position at which the elements
    begin to be selected. If negative, it indicates an offset from the
    end of the set.

    end
    Type: Integer
    An integer indicating the 0-based position at which the elements stop
    being selected. If negative, it indicates an offset from the end of the set.
    If omitted, the range continues until the end of the set.

*/

$( "li" ).slice( 2 ).css( "background-color", "red" );

$( "li" ).slice( 2, 4 ).css( "background-color", "red" );

$( "li" ).slice( -2, -1 ).css( "background-color", "red" );

$( "p" ).slice( -1 )
$( "p" ).slice( 1, 2 )
$( "p" ).slice( -2 )
$( "p" ).slice( -1, -1 )
$( "p" ).slice( -1, -1 )

.first()
/* Reduce the set of matched elements to the first in the set. */
$( "li" ).first().css( "background-color", "red" );

/* =============== */
.last()
/* Reduce the set of matched elements to the final one in the set. */


/* =============== */
.has()
/* Reduce the set of matched elements to those that have
a descendant that matches the selector or DOM element. */

/*
.has( selector )

    selector
    Type: String
    A string containing a selector expression to match elements against.

.has( contained )

    contained
    Type: Element
    A DOM element to match elements against.


*/

$( "li" ).has( "ul" ).css( "background-color", "red" );

/* =============== */
.is()
/* Check the current matched set of elements against
a selector, element, or jQuery object and return true if
at least one of these elements matches the given arguments. */

/*
.is( selector )

    selector
    Type: Selector
    A string containing a selector expression to match elements against.

    function
    Type: Function( Integer index, Element element ) => Boolean
    A function used as a test for every element in the set. It accepts two
    arguments, index, which is the element's index in the jQuery collection,
    and element, which is the DOM element. Within the function, this refers
    to the current DOM element.

    selection
    Type: jQuery
    An existing jQuery object to match the current set of elements against.

    elements
    Type: Element
    One or more elements to match the current set of elements against.
*/

  if ( target.is( "li" ) ) {
    target.css( "background-color", "red" );
  }
//
  var li = $( element ),
      isWithTwo = li.is(function() {
        return $( "strong", this ).length === 2;
      });
  if ( isWithTwo ) {
    li.css( "background-color", "green" );
  } else {
    li.css( "background-color", "red" );
  }
//
  $( "input[type='checkbox']" ).parent().is( "form" )

/* =============== */

.map()
/* Pass each element in the current matched set through
a function, producing a new jQuery object containing the return values. */

/*
.map( callback )

    callback
    Type: Function( Integer index, Element domElement ) => Object
    A function object that will be invoked for each element in the current set.

*/

$( ":checkbox" )
  .map(function() {
    return this.id;
  })