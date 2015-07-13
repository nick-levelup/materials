/*
:animated Selector
Select all elements that are in the progress of an animation at the time the selector is run.


*/
$( "div:animated" );

// !performance
$("your-pure-css-selector").filter(":animated").

/* =================== */

/*
:eq() Selector
Select the element at index n within the matched set.
0-based indexing
*/
$( "li:eq(-2)" );

// !performance
$("your-pure-css-selector").eq(index)


/* =================== */
/*
:gt() Selector
Select all elements at an index greater than index within the matched set.
*/

$( "td:gt(4)" );
/*
<table border="1">
  <tr>
    <td>TD 11</td>
    <td>TD 12</td>
    <td>TD 13</td>
  </tr>
  <tr>
    <td>TD 21</td>
    <td>TD 22</td>
    <td>TD 23</td>
  </tr>
  <tr>
    <td>TD 31</td>
    <td>TD 32</td>
    <td>TD 33</td>
  </tr>
</table>
*/


// !performance
$("td").slice(4)
$( "td:gt(4)" );


/* =================== */
/*
:lt() Selector
Select all elements at an index less than index within the matched set.
*/
$( "td:lt(4)" );

// !performance
$("your-pure-css-selector").slice(0, index)


/* =================== */
/*
:even Selector
Selects even elements, zero-indexed. See also odd.
*/
$( "tr:even" );

// !performance
$("your-pure-css-selector").filter(":even")


/* =================== */
/*
:odd Selector
Selects odd elements, zero-indexed. See also even.
*/
$( "tr:odd" );

// !performance
$("your-pure-css-selector").filter(":odd")


/* =================== */
/*
:first Selector
Selects the first matched element.

:eq(0)
:lt(1)

*/

$( "tr:first" );

// !perfomance
$("your-pure-css-selector").filter(":first")


/* =================== */
/*
:last Selector
Selects the last matched element.
*/

$( "tr:last" );

// !perfomance
$("your-pure-css-selector").filter(":last")

/* =================== */
/*
:focus Selector
Selects element if it is currently focused.
*/
$('a:focus');

// !perfomance
$( ":focus" ); // $("*:focus")
$( document.activeElement ).filter('a')


/* =================== */
/*
:header Selector
Selects all elements that are headers, like h1, h2, h3 and so on.
*/
$( ":header" );
$('h1,h2,...')

// !perfomance
$("your-pure-css-selector").filter(":header")


/* =================== */
/*
:lang() Selector
Selects all elements of the specified language.
*/
$("div:lang(en)")

/*
will match <div lang="en"> and <div lang="en-us">
*/


/* =================== */
/*
:not() Selector
Selects all elements that do not match the given selector.
*/
$( "input:not(:checked) + span" )

// !More readeble method
$('div').not('.title');


/* =================== */
/*
:root Selector
Selects the element that is the root of the document.
*/
$(":root") // always html element


/* =================== */
/*
:target Selector
Selects the target element indicated by the fragment identifier of the document’s URI.
*/

// http://example.com/#foo,
$( "p:target" )
// will select the <p id="foo"> element.
