The <canvas> element

<canvas id="tutorial" width="150" height="150"></canvas>


Fallback content

<canvas id="stockGraph" width="150" height="150">
  current stock price: $3.15 +0.15
</canvas>

<canvas id="clock" width="150" height="150">
  <img src="images/clock.png" width="150" height="150" alt=""/>
</canvas>

<canvas id="canvas" width="300" height="300">
  Sorry, your browser doesn't support the &lt;canvas&gt; element.
</canvas>

The rendering context

The canvas is initially blank. To display something, a script first needs to access the rendering context and draw on it. The <canvas> element has a method called getContext(), used to obtain the rendering context and its drawing functions. getContext() takes one parameter, the type of context. 

var canvas = document.getElementById('tutorial');
var ctx = canvas.getContext('2d');

Checking for support
var canvas = document.getElementById('tutorial');

if (canvas.getContext){
  var ctx = canvas.getContext('2d');
  // drawing code here
} else {
  // canvas-unsupported code here
}

The grid
coordinate space

The origin of this grid is positioned in the top left corner at coordinate (0,0)

Drawing rectangles

fillRect(x, y, width, height)
	Draws a filled rectangle.
strokeRect(x, y, width, height)
	Draws a rectangular outline.
clearRect(x, y, width, height)
	Clears the specified rectangular area, making it fully transparent.

Drawing paths
First, you create the path.
Then you use drawing commands to draw into the path.
Then you close the path.
Once the path has been created, you can stroke or fill the path to render it.

beginPath()
	Creates a new path. Once created, future drawing commands are directed into the path and used to build the path up.
Path methods
	Methods to set different paths for objects.
closePath()
	Closes the path so that future drawing commands are once again directed to the context.
stroke()
	Draws the shape by stroking its outline.
fill()
	Draws a solid shape by filling the path's content area.
moveTo(x, y)
	Moves the pen to the coordinates specified by x and y.
lineTo(x, y)
	Draws a line from the current drawing position to the position specified by x and y.
