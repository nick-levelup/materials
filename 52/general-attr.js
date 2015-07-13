// General Attributes

/* ======================================= */
//! .attr()

$().attr();

// 1. Get the value of an attribute for the first element in the set of matched elements.
// !Gets only the first element in the matched set

$('img').attr('src'); // img/img2.jpg


// 2. Set attributes for the set of matched elements.
// !return jQuery

// 2.1
/*
.attr( attributeName, value )

attributeName
    Type: String.
    The name of the attribute to set.

value.
    Type: String or Number
    A value to set for the attribute.
*/

$(img)
    .attr("title", "Photo by Kelly Clark")
    .addClass('sasa');

// 2.2 Set multiple attributes

/*
 .attr( attributes )

 attributes
    Type: PlainObject
    An object of attribute-value pairs to set.
 */

$( "#greatphoto" ).attr({
    alt: "Beijing Brush Seller",
    title: "photo by Kelly Clark"
});


// 2.3
// .attr( attributeName, function )

/*
attributeName
    Type: String
    The name of the attribute to set.

function
    Type: Function( Integer index, String attr ) => String or Number
    A function returning the value to set. this is the current element.
    Receives the index position of the element in the set and the old attribute
    value as arguments.
*/

$( "#greatphoto" ).attr( "title", function( i, val ) {
    return val + " - photo by Kelly Clark";
});



/*
1. Создать картику и добавить ей 3 аттрибута.
Заголовок, ссылка, альтернативный текст

<img title='time.jpg'>

$img

2. Изменить всем картинкам ссылку.
Название картинки взять из заголовка картинки. Папка images.
<img title="image.jpg">


/* ======================================= */
//! .prop()

$('input').prop('checked'); // true/false

// <input type="checkbox" checked>
$('input').attr('checked'); // checked
$('input').prop('checked'); // true

// <input type="checkbox">
$('input').attr('checked'); // undefined
$('input').prop('checked'); // false

// <input type="checkbox"> и выделим
$('input').attr('checked'); // undefined
$('input').prop('checked'); // true

// <input type="checkbox" checked> уберем выделение
$('input').attr('checked'); // checked
$('input').prop('checked'); // false

// <input type="checkbox" checked> уберем выделение и обратно выделим
$('input').attr('checked'); // checked
$('input').prop('checked'); // true


/* ======================================= */
//! .removeAttr( attributeName )

// Remove an attribute from each element in the set of matched elements.

$("input").removeAttr("title");

/* ======================================= */
//! .removeProp()

// Remove a property for the set of matched elements.

$("input").prop("key", 123); // jQuery obj
$("input").prop("key"); // 123
$("input").removeProp("key"); // 
$("input").prop("key"); // ?




//! .val()
// Get the current value of the first element in the set of matched elements or
// set the value of every matched element.

// 1. Get the current value of the first element in the set of matched elements.

$('select').val();
//Get the current value of the first element in the set of matched elements.

/*
    The .val() method is primarily used to get the values of form elements such as
    INPUT, SELECT and TEXTAREA.

    In the case of SELECT elements, it returns NULL when no option is selected and
    an ARRAY containing the value of each selected option when there is at least
    one and it is possible to select more because the multiple attribute is present.
*/

$( "select.foo option:selected").val();
$( "select.foo" ).val();

// 2. Set the value of each element in the set of matched elements.

/*
.val( value )

value
    Type: String or Number or Array
    A string of text, a number, or an array of strings corresponding to
    the value of each matched element to set as selected/checked.


function
    Type: Function( Integer index, String value ) => String
    A function returning the value to set. this is the current element.
    Receives the index position of the element in the set and the old value as arguments.

*/

$('input').val('some value');

$('input').val(function (index, currentValue) {
    return 'some value'
});

$('input').val(function (index, currentValue) {
    return currentValue.toUpperCase();
});