/*
:first-child Selector
Selects all elements that are the first child of their parent.
*/
$( "div span:first-child" )

/*******************/

/*
:last-child Selector
Selects all elements that are the last child of their parent.
*/

$( "div span:last-child" )

/*******************/

/*
:first-of-type Selector
Selects all elements that are the first among siblings of the same element name.
*/
$( "span:first-of-type" )

/*
<div>
  <span>Corey,</span>
  <span>Yehuda,</span>
  <span>Adam,</span>
  <span>Todd</span>
</div>
<div>
  <b>Nobody,</b>
  <span>Jörn,</span>
  <span>Scott,</span>
  <span>Timo</span>
</div>
*/

/*******************/
/*
:last-of-type Selector
Selects all elements that are the last among siblings of the same element name.
*/
$( "span:last-of-type" )

/*
<div>
  <span>Corey,</span>
  <span>Yehuda,</span>
  <span>Adam,</span>
  <span>Todd</span>
</div>
<div>
  <span>Jörn,</span>
  <span>Scott,</span>
  <span>Timo,</span>
  <b>Nobody</b>
</div>
*/

/*******************/
/*
:nth-child() Selector
Selects all elements that are the nth-child of their parent.
!even or odd
*/
$( "ul li:nth-child(2)" )


/*******************/
/*
:nth-last-child() Selector
Selects all elements that are the nth-child of their parent, counting from the last element to the first.
*/
$( "ul li:nth-last-child(2)" )


/*
:nth-last-of-type() Selector
Selects all the elements that are the nth-child of their parent in relation to siblings with the same element name, counting from the last element to the first.
*/
$( "ul li:nth-last-of-type(2)" )


/*
:nth-of-type() Selector
Selects all elements that are the nth child of their parent in relation to siblings with the same element name.
*/
$( "span:nth-of-type(2)" )


/*
:only-child Selector
Selects all elements that are the only child of their parent.
*/
$( "div button:only-child" )


/*
:only-of-type Selector
Selects all elements that have no siblings with the same element name.
*/
$( "button:only-of-type" )


