// http://api.jquery.com/animate/

$( "p" ).animate({
  left: 50,
  opacity: 1
}, 500 );

//
$( "p" ).animate({
  left: "50px",
  opacity: 1
}, {
  duration: 500,
  queue: false
});

//
$( "p" ).animate({
  opacity: "show"
}, "slow", "easein" );

//
$( "p" ).animate({
  height: "toggle",
  opacity: "toggle"
}, {
  duration: "slow"
});

//
$( "p" ).animate({
  opacity: "show"
}, {
  duration: "slow",
  easing: "easein"
});

//
$( "p" ).animate({
  height: 200,
  width: 400,
  opacity: 0.5
}, 1000, "linear", function() {
  alert( "all done" );
});