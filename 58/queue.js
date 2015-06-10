$( ".box" )
    .animate( {
        height: 20
    }, "slow", function() {
        $( "#title" ).html( "We're in the callback, baby!" );
    } );

// queue
$( ".box" )
    .animate( {
        height: 20
    }, "slow")
    .queue( function() {
        $( "#title" ).html( "We're in the animation, baby!" );
 
        // This tells jQuery to continue to the next item in the queue
        $( this ).dequeue();
    } );

// Another variant queue
.queue( function( next ) {
    console.log( "I fired!" );
    next();
} );

// custom queue
$( ".box" )
    .queue( "steps", function( next ) {
        console.log( "Step 1" );
        next();
    } )
    .queue( "steps", function( next ) {
        console.log( "Step 2" );
        next();
    } )
    .dequeue( "steps" );