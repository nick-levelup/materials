/*
Descendant Selector (“ancestor descendant”)
Selects all elements that are descendants of a given ancestor.
*/
$('.header h3')


/*
Child Selector (“parent > child”)
Selects all direct child elements specified by “child” of elements specified by “parent”.
*/
$('ul > li')

/*
Next Adjacent Selector (“prev + next”)
Selects all next elements matching “next” that are immediately preceded by a sibling “prev”.
the elements on either side of the combinator must share the same parent.
*/
$('input + label')


/*
Next Siblings Selector (“prev ~ siblings”)
Selects all sibling elements that follow after the “prev” element, have the same parent, and match the filtering “siblings” selector.
the elements on either side of the combinator must share the same parent.
*/

$('input ~ label')
