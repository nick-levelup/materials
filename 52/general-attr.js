// General Attributes

$().attr();

// 1. Get the value of an attribute for the first element in the set of matched elements.
// !Gets only the first element in the matched set

$('img').attr('href'); // img/img2.jpg


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

$(img).attr("title", "Photo by Kelly Clark");

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
1. Создать картику и добавить ей 3 аттрибута. Заголовок, ссылка, альтернативный текст

2. Изменить всем картинкам ссылку. Название картинки взять из заголовка картинки. Папка images.
<img title="image.jpg">
*/


/* ======================================= */
