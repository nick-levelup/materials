// Showing and Hiding Content
// Instantaneously hide all paragraphs
$( "p" ).hide();

// Instantaneously show all divs that have the hidden style class
$( "div.hidden" ).show();

// When jQuery hides an element, it sets its CSS display property to none.

// One is to pass in an argument of 'slow', 'normal', or 'fast':
$( "p" ).hide( "slow" );
$( "div.hidden" ).show( "fast" );

// you can pass the desired duration in milliseconds
$( "p" ).hide( 500 );
$( "div.hidden" ).show( 1250 );


// Fade and Slide Animations
// height property.
$( "p" ).slideUp( 800 );
$( "div.hidden" ).slideDown( 600 );

// opacity property
$( "p" ).fadeOut( 1500 );
$( "div.hidden" ).fadeIn( 750 );

// Changing Display Based on Current Visibility State
$( "p" ).toggle();
$( "img" ).toggle( "slow" );
$( "div" ).toggle( 1800 );

$().slideToggle();
$().fadeToggle();

$( "ol" ).slideToggle( 1000 );
$( "blockquote" ).fadeToggle( 400 );


// Doing Something After an Animation Completes
$( "p.hidden" ).fadeIn( 750 ).addClass( "lookAtMe" );

// Fade in all hidden paragraphs; then add a style class to them (correct with animation callback)
$( "p.hidden" ).fadeIn( 750, function() {
    // this = DOM element which has just finished being animated
    $( this ).addClass( "lookAtMe" );
});


// Managing Animation Effects
$().stop();
// will immediately terminate all animations running on the elements in your selection.

$( "body *" ).filter( ":animated" ).stop();

$().delay()
// is used to introduce a delay between successive animations.
$( "h1" ).hide( 500 ).delay( 1500 ).show( 300 );

jQuery.fx.speeds
jQuery.fx.interval
jQuery.fx.off