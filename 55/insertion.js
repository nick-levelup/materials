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
.prepend();
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

 <h2>Greetings</h2>
     <div class="container">
     <div class="inner">Hello</div>
     <div class="inner">Goodbye</div>
 </div>

 */
$( "<p>Test</p>" ).appendTo( ".inner" );


$( "h2" ).appendTo( $( ".container" ) );
/*
* If an element selected this way is inserted into a single location elsewhere in the DOM,
* it will be moved into the target (not cloned) and a new set consisting of the inserted
* element is returned:
*
* If there is more than one target element, however, cloned copies of the inserted element
* will be created for each target except the last, and that new set (the original element
* plus clones) is returned.
* */

/* <span>I have nothing more to say... </span>

<div id="foo">FOO! </div>
*/
$( "span" ).appendTo( "#foo" );
/*===============*/
.prependTo()
/*
 Insert every element in the set of matched elements to the beginning of the target.
 */



/*===============*/
.html()
/*
 Get the HTML contents of the first element in the set of matched elements or
 set the HTML contents of every matched element.
 */

$( "div.demo-container" ).html();

$( "div.demo-container" )
    .html( "<p>All new content. <em>You bet!</em></p>" );

$( "div.demo-container" ).html(function() {
    var emphasis = "<em>" + $( "p" ).length + " paragraphs!</em>";
    return "<p>All new content for " + emphasis + "</p>";
});

$( "div" ).html( "<b>Wow!</b> Such excitement..." );
$( "div b" )
    .append( document.createTextNode( "!!!" ) )
    .css( "color", "red" );

/*===============*/
.text()
/*
 Get the combined text contents of each element in the set of matched elements,
 including their descendants,
 or set the text contents of the matched elements.
 */

$( "div.demo-container" ).text();

var str = $( "p:first" ).text();
$( "p:last" ).html( str );

$( "div.demo-container" ).text( "<p>This is a test.</p>" );
$( "ul li" ).text(function( index ) {
    return "item number " + ( index + 1 );
});

$( "p" ).text( "<b>Some</b> new text." );






/*======*/
.after()
/*
 Insert content, specified by the parameter, after each element in the set of matched elements.

 $(target).after(contentToBeInserted)

 .after( content [, content ] )

 content
 Type: htmlString or Element or Array or jQuery
 HTML string, DOM element, array of elements, or jQuery object to insert
 after each element in the set of matched elements.
 content
 Type: htmlString or Element or Array or jQuery
 One or more additional DOM elements, arrays of elements, HTML strings,
 or jQuery objects to insert after each element in the set of matched elements.

 .after( function )
 Type: Function( Integer index ) => htmlString or Element or jQuery
 A function that returns an HTML string, DOM element(s), or jQuery object
 to insert after each element in the set of matched elements. Receives the
 index position of the element in the set as an argument. Within the function,
 this refers to the current element in the set.

 .after( function )
 function
 Type: Function( Integer index, String html ) => htmlString or Element or jQuery
 A function that returns an HTML string, DOM element(s), or jQuery object to insert
 after each element in the set of matched elements. Receives the index position of
 the element in the set and the old HTML value of the element as arguments.
 Within the function, this refers to the current element in the set.

*/
$( ".inner" ).after( "<p>Test</p>" );

$( ".container" ).after( $( "h2" ) );

$( "p" ).after(function() {
    return "<div>" + this.className + "</div>";
});

var $newdiv1 = $( "<div id='object1'/>" ),
    newdiv2 = document.createElement( "div" ),
    existingdiv1 = document.getElementById( "foo" );
$( "p" ).first().after( $newdiv1, [ newdiv2, existingdiv1 ] );

$( "p" ).after( document.createTextNode( "Hello" ) );

//<b>Hello</b>
//<p>I would like to say: </p>
$( "p" ).after( $( "b" ) );

 /*======*/
.before()
/*
 Insert content, specified by the parameter, before each element in the set of matched elements.

 /*======*/
.insertAfter()
/*
 Insert every element in the set of matched elements after the target.

 $(contentToBeInserted).insertAfter(target)
*/

$( "<p>Test</p>" ).insertAfter( ".inner" );

$( "h2" ).insertAfter( $( ".container" ) );

//<p> is what I said... </p>
//<div id="foo">FOO!</div>
$( "p" ).insertAfter( "#foo" );
/*======*/
.insertBefore()
/*
 Insert every element in the set of matched elements before the target.
*/

 /*======*/
.detach()
/*
 Remove the set of matched elements from the DOM.
 .detach( [selector ] )
 selector
 Type: Selector
 A selector expression that filters the set of matched elements to be removed.


 The .detach() method is the same as .remove(), except that .detach()
 keeps all jQuery data associated with the
 removed elements. This method is useful when removed elements are to
 be reinserted into the DOM at a later time.
*/
 /*======*/
.empty()
/*
 Remove all child nodes of the set of matched elements from the DOM.
*/
$( ".hello" ).empty();


 /*======*/
.remove()
/*
 Remove the set of matched elements from the DOM.
 .remove( [selector ] )
 selector
 Type: String
 A selector expression that filters the set of matched elements to be removed.

 Use .remove() when you want to remove the element itself, as well as everything
 inside it. In addition to the elements themselves,
 all bound events and jQuery data associated with the elements are removed.
 To remove the elements without removing data and events, use .detach() instead.
*/
$( ".hello" ).remove();

$( "div" ).remove( ".hello" );


 /*======*/
.replaceAll()
    /*
 Replace each target element with the set of matched elements.
*/
/*
*
*<div class="container">
     <div class="inner first">Hello</div>
     <div class="inner second">And</div>
     <div class="inner third">Goodbye</div>
 </div>
*
* */
$( "<h2>New heading</h2>" ).replaceAll( ".inner" );

/*
*<div class="container">
     <h2>New heading</h2>
     <h2>New heading</h2>
     <h2>New heading</h2>
 </div>
*
* */

$( ".first" ).replaceAll( ".third" );

$( "<b>Paragraph. </b>" ).replaceAll( "p" );
 /*======*/
.replaceWith()
/*
 Replace each element in the set of matched elements with the provided new content
 and return the set of elements that was removed.

 .replaceWith( newContent )

 newContent
 Type: htmlString or Element or Array or jQuery
 The content to insert. May be an HTML string, DOM element, array of DOM elements, or jQuery object.

 .replaceWith( function )

 function
 Type: Function()
 A function that returns content with which to replace the set of matched elements.

 */

$( "div.second" ).replaceWith( "<h2>New heading</h2>" );

$( "div.inner" ).replaceWith( "<h2>New heading</h2>" );

$( "div.third" ).replaceWith( $( ".first" ) );

var $container = $( "div.container" ).replaceWith(function() {
    return $( this ).contents();
});


/*
*
.clone( [withDataAndEvents ] )

 Description: Create a deep copy of the set of matched elements.

 .clone( [withDataAndEvents ] )
 withDataAndEvents (default: false)
 Type: Boolean
 A Boolean indicating whether event handlers should be copied along
 with the elements.

 .clone( [withDataAndEvents ] [, deepWithDataAndEvents ] )
 withDataAndEvents (default: false)
 Type: Boolean
 A Boolean indicating whether event handlers and data should be copied
 along with the elements. The default value is false.

 deepWithDataAndEvents (default: value of withDataAndEvents)
 Type: Boolean
 A Boolean indicating whether event handlers and data for all children of the cloned
 element should be copied. By default its value matches the first
 argument's value (which defaults to false).

*
* */

$( ".hello" ).clone().appendTo( ".goodbye" );

$( "b" ).clone().prependTo( "p" );
