// The <canvas> element

// <canvas id="tutorial" width="150" height="150"></canvas>


// Fallback content

// <canvas id="stockGraph" width="150" height="150">
//   current stock price: $3.15 +0.15
// </canvas>

// <canvas id="clock" width="150" height="150">
//   <img src="images/clock.png" width="150" height="150" alt=""/>
// </canvas>

// <canvas id="canvas" width="300" height="300">
//   Sorry, your browser doesn't support the &lt;canvas&gt; element.
// </canvas>

// The rendering context

// The canvas is initially blank. To display something, a script first needs to access the rendering context and draw on it. The <canvas> element has a method called getContext(), used to obtain the rendering context and its drawing functions. getContext() takes one parameter, the type of context. 

var canvas = document.getElementById('tutorial');
var ctx = canvas.getContext('2d');

// Checking for support
var canvas = document.getElementById('tutorial');

if (canvas.getContext){
  var ctx = canvas.getContext('2d');
  // drawing code here
} else {
  // canvas-unsupported code here
}

// The grid
// coordinate space

// The origin of this grid is positioned in the top left corner at coordinate (0,0)

// Drawing rectangles

// fillRect(x, y, width, height)
// 	Draws a filled rectangle.
// strokeRect(x, y, width, height)
// 	Draws a rectangular outline.
// clearRect(x, y, width, height)
// 	Clears the specified rectangular area, making it fully transparent.

// Drawing paths
// First, you create the path.
// Then you use drawing commands to draw into the path.
// Then you close the path.
// Once the path has been created, you can stroke or fill the path to render it.

// beginPath()
// 	Creates a new path. Once created, future drawing commands are directed into the path and used to build the path up.
// Path methods
// 	Methods to set different paths for objects.
// closePath()
// 	Closes the path so that future drawing commands are once again directed to the context.
// stroke()
// 	Draws the shape by stroking its outline.
// fill()
// 	Draws a solid shape by filling the path's content area.
// moveTo(x, y)
// 	Moves the pen to the coordinates specified by x and y.
// lineTo(x, y)
// 	Draws a line from the current drawing position to the position specified by x and y.

/* ---- */

ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

/*
x
	The x coordinate of the arc's center.
y
	The y coordinate of the arc's center.
radius
	The arc's radius.
startAngle
	The angle at which the arc starts, measured clockwise from the positive x axis and expressed in radians.
endAngle
	The angle at which the arc ends, measured clockwise from the positive x axis and expressed in radians.
anticlockwise Optional
	An optional Boolean which, if true, causes the arc to be drawn
	counter-clockwise between the two angles. By default it is drawn clockwise.
*/

// http://www.html5canvastutorials.com/demos/tutorials/html5-canvas-arcs/html5-canvas-arcs-diagram.png

ctx.arc(75, 75, 50, 0, 2 * Math.PI);

/* ---- */

ctx.quadraticCurveTo(cpx, cpy, x, y);

/*
cpx
	The x axis of the coordinate for the control point.
cpy
	The y axis of the coordinate for the control point.
x
	The x axis of the coordinate for the end point.
y
	The y axis of the coordinate for the end point.
*/

// http://www.html5canvastutorials.com/demos/tutorials/html5-canvas-quadratic-curves/html5-canvas-quadratic-curves-diagram.png

ctx.quadraticCurveTo(230, 30, 50, 100);


/* ---- */

ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);

/*
cp1x
	The x axis of the coordinate for the first control point.
cp1y
	The y axis of the coordinate for first control point.
cp2x
	The x axis of the coordinate for the second control point.
cp2y
	The y axis of the coordinate for the second control point.
x
	The x axis of the coordinate for the end point.
y
	The y axis of the coordinate for the end point.
*/

// http://www.html5canvastutorials.com/demos/tutorials/html5-canvas-bezier-curves/html5-canvas-bezier-curves-diagram.png

context.bezierCurveTo(140, 10, 388, 10, 388, 170);

/* ---- */

