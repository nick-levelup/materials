// ! .css()

// 1. Get the computed style properties for the first element in the set of matched elements.

/*
.css( propertyName )

    propertyName
    Type: String
    A CSS property.

.css( propertyNames )

    propertyNames
    Type: Array
    An array of one or more CSS properties.

*/

$('div').css('width')
$('div').css('widTH')
$('div').css('background-color')
$('div').css('backgroundColor') //rgb(150, 153, 153)
$('div').css('margin') //"0px 0px 0px 40px"
$('div').css(["width", "height", "color", "background-color"]) // Object

// !An element should be connected to the DOM


// 2. Set one or more CSS properties for the set of matched elements.

/*
.css( propertyName, value )

    propertyName
      Type: String
      A CSS property name.
    value
      Type: String or Number
      A value to set for the property.

.css( propertyName, function )

    propertyName
      Type: String
      A CSS property name.
    function
      Type: Function( Integer index, String value ) => String or Number
      A function returning the value to set. this is the current element. Receives the index position of the element in the set and the old value as arguments.

.css( properties )

    properties
    Type: PlainObject
    An object of property-value pairs to set.

*/

// !will automatically take care of prefixing

$('div').css('width', '100px');

$("#mydiv").css("color", ""); // remove

$('div').css({
  "background-color": "#ffe",
  "border-left": "5px solid #ccc"
});

$('div').css({
  backgroundColor: "#ffe",
  borderLeft: "5px solid #ccc"
})

$('div').css( "padding-left", "+=15" );
$('div').css( "padding-left", "-=15" );

// If nothing is returned - current value is not changed
$( "div.example" ).css( "width", function( index, string ) {
  return index * 50;
});

/* ======================================= */
// ! .width()
// Get the current computed width for the first element in the set of matched elements or
// set the width of every matched element.

/*

1. .width()
Get the current computed width for the first element in the set of matched elements.
*/

$('div').css('width'); // 100px
$('div').width() // 100


// Returns width of browser viewport
$( window ).width();

// Returns width of HTML document
$( document ).width();

// The value reported by .width() is not guaranteed to be
// accurate when the element or its parent is hidden. 

// 2. Set the CSS width of each element in the set of matched elements.

$('div').css('width', 100)
$('div').css('width', '50%')
$('div').css('width', '100px')
$('div').css('width', 'auto')

$('div').css('width', function (index, width) {
  return width * (index + 1);
});

/* ======================================= */
// ! .height() Same as width

/* ======================================= */
// ! .innerWidth()

// Get the current computed inner width (including padding but not border)
// for the first element in the set of matched elements
// or set the inner width of every matched element.

// This method is not applicable to window and
// document objects; for these, use .width() instead.

// 1. Get

//.innerWidth()

// This method returns the width of the element, including left and right padding,
// in pixels.

$('div').innerWidth();

// 2. Set

// .innerWidth( value )
// .innerWidth( function )

$('div').innerWidth(100);

// Set the CSS inner width of each element in the set of matched elements.

/* ======================================= */
// ! .innerHeight() Same as innerWidth

/* ======================================= */
// !.outerWidth()

// 1. Get the current computed width for the first element in the set of matched elements,
// including padding and border.

// Returns the width of the element, along with left and right padding, border,
// and optionally margin, in pixels.

/*
.outerWidth( [includeMargin ] )

    includeMargin
    Type: Boolean
    A Boolean indicating whether to include the element's margin in the calculation.
*/

// !This method is not applicable to
// window and document objects; for these, use .width() instead

$('p').outerWidth(true) // 155

// 2. Set the CSS outer width of each element in the set of matched elements.

/*
.outerWidth( value )

    value
    Type: String or Number
    A number representing the number of pixels, or a number
    along with an optional unit of measure appended (as a string).

.outerWidth( function(index, width) )

    function(index, width)
    Type: Function()
    A function returning the outer width to set.
    Receives the index position of the element in the set and
    the old outer width as arguments. Within the function, this
    refers to the current element in the set.
*/

$('p').outerWidth(100)

/* ======================================= */
// ! .outerHeight() Same as outerWidth

/* ======================================= */
$.cssNumber

// An object containing all CSS properties that may be used without a unit.
// The .css() method uses this object to see if
// it may append px to unitless values

/* ======================================= */
.position()

//  Get the current coordinates of the first
// element in the set of matched elements, relative to the OFFSET PARENT.

$('p:first').position();

// return object
/*
{
  top: 21,
  left: 30
}
*/

/* ======================================= */
.offset()

// 1. Get the current coordinates of the first element
// in the set of matched elements, relative to the DOCUMENT.

$('p:first').offset();

// return object
/*
{
  top: 21,
  left: 30
}
*/

// 2. Set the current coordinates of every element
// in the set of matched elements, relative to the document.

/*
.offset( coordinates )

    coordinates
      Type: PlainObject
      An object containing the properties top and left,
      which are numbers indicating the new top and left coordinates
      for the elements.

.offset( function )

    function
    Type: Function( Integer index, PlainObject coords ) => PlainObject
    A function to return the coordinates to set. Receives the index of the element
    in the collection as the first argument and the current coordinates
    as the second argument. The function should return an object with
    the new top and left properties.

*/

$( "p:last" ).offset({ top: 10, left: 30 });


/* ======================================= */
.scrollTop()

/*
1. Get the current vertical position of the scroll bar
for the first element in the set of matched elements or
set the vertical position of the scroll bar for every matched element.

.scrollTop()
*/

//  If the scroll bar is at the very top, or if the element is not scrollable,
// this number will be 0.

$( "div.demo" ).scrollTop();
$('html, body').scrollTop();
$('html').scrollTop();
$('body').scrollTop();
$(window).scrollTop();
$(document).scrollTop();

/*
2. Set the current vertical position of the scroll
bar for each of the set of matched elements.

.scrollTop( value )

    value
    Type: Number
    An integer indicating the new position to set the scroll bar to.

*/
$( "div.demo" ).scrollTop( 300 );