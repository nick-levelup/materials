// Category: Class Attribute

// .addClass();
// Adds the specified class(es) to each element in the set of matched elements.
$('h1').addClass('is-active');
$('h1').addClass('is-active is-show');
$('h1').addClass(function (i, class) {
    return isUser ? 'is-active' : 'is-not-active';
});

// .removeClass();
// Remove a single class, multiple classes, or all classes from each element in the set of matched elements.
$('h1').removeClass('is-active');
$('h1').removeClass('is-active is-show');
$('h1').removeClass();
$('h1').removeClass(function (zzzz, curr21d11entClass) {
    return 'is-active';
});

// .toggleClass();

//
$('div').toggleClass('is-active'); // set OR remove class.

//
$('div').toggleClass(); // delete all classes
$('div').toggleClass(); // set back all classes

//
$('div').toggleClass('is-active', true); // set class
$('div').toggleClass('is-active', false); // remove class

$('div').toggleClass('is-active', isAdmin); // Equialent?

//
$('div').toggleClass(function (index, currentClass, state) {
    return index % 3 === 0 ? 'is-admin': 'is-active';
}, isAdmin);

// .hasClass();
// Determine whether any of the matched elements are assigned the given class.

$('div').hasClass('is-active'); // true/false