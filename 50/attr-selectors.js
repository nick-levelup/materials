/*
Attribute values in selector expressions must follow
the rules for W3C CSS selectors; in general, that means
anything other than a valid identifier should be surrounded
by quotation marks.

    double quotes inside single quotes: $('a[rel="nofollow self"]')
    single quotes inside double quotes: $("a[rel='nofollow self']")
    escaped single quotes inside single quotes: $('a[rel=\'nofollow self\']')
    escaped double quotes inside double quotes: $("a[rel=\"nofollow self\"]")
*/


/*
Has Attribute Selector [name]
Selects elements that have the specified attribute, with any value.
*/
$('div[id]')

/*===================*/
/*
Attribute Equals Selector [name=”value”]
Selects elements that have the specified attribute with a value exactly equal to a certain value.
*/
$( "input[value='Hot Fuzz']" )

/*===================*/
/*
Multiple Attribute Selector [name=”value”][name2=”value2″]
Matches elements that match all of the specified attribute filters.
*/
$( "input[id][name$='man']" )

/*===================*/
/*
Attribute Contains Selector [name*=”value”]
Selects elements that have the specified attribute with a value containing a given substring.
*/
$( "input[name*='man']" )

/*===================*/
/*
<input name="man-news">
<input name="milk man">
<input name="letterman2">
<input name="newmilk">
*/

/*===================*/
/*
Attribute Contains Word Selector [name~=”value”]
Selects elements that have the specified attribute with a value containing a given word, delimited by spaces.
*/
$( "input[name~='man']" )

/*
<input name="man-news">
<input name="milk man">
<input name="letterman2">
<input name="newmilk">
*/


/*===================*/
/*
Attribute Starts With Selector [name^=”value”]
Selects elements that have the specified attribute with a value beginning exactly with a given string.
*/
$( "input[name^='news']" )
/*
<input name="newsletter">
<input name="milkman">
<input name="newsboy">
*/


/*===================*/
/*
Attribute Ends With Selector [name$=”value”]
Selects elements that have the specified attribute with a value ending exactly with a given string. The comparison is case sensitive.
*/
$( "input[name$='letter']" )

/*
<input name="newsletter">
<input name="milkman">
<input name="jobletter">
*/


/*===================*/
/*
Attribute Contains Prefix Selector [name|=”value”]
Selects elements that have the specified attribute with a value either equal to a given string or starting with that string followed by a hyphen (-).
*/
$( "a[hreflang|='en']" )

/*
<a href="example.html" hreflang="en"></a>
<a href="example.html" hreflang="en-UK"></a>
<a href="example.html" hreflang="english"></a>
*/

/*===================*/
/*
Attribute Not Equal Selector [name!=”value”]
Select elements that either don’t have the specified attribute, or do have the specified attribute but not with a certain value.

!For better performance in modern browsers, use
$( "your-pure-css-selector" ).not( "[name='value']" )
instead.
*/
$( "input[name!='newsletter']" )