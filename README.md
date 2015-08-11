# L-systems and turtle graphics!

I implemented turtle graphics to draw different L-systems such as the Koch curve, Sierpinski triangle, Pythagoras tree, Koch snow flake, and a box.


### Using the turtle and creating L-systems

For using the turtle, reader, and prewritten functions/l-systems include these files

~~~javascript
<script type="text/javascript" src="turtle.js"></script>
<script type="text/javascript" src="reader.js"></script>
<script type="text/javascript" src="load.js"></script>
~~~


First we define a canvas then create the turtle and reader.

~~~javascript
<canvas id="myCanvas" width="640" height="640""> </canvas>
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var turtle = new turtle();
var reader = new reader();
~~~

Now we can set the initial conditions for the turtle.

  * *.pos*   - starting location
  * *.dir*   - starting direction the turtle faces
  * *.unit*  - the stride of the turtle
  * *.angle* - turning angle in degrees

~~~javascript
turtle.pos.x = 90;
turtle.pos.y = 220;
turtle.dir.x = 1;
turtle.dir.y = 0;
turtle.unit  = 1.0;
turtle.angle = 60;
~~~

After the turtle is created the reader needs to know the rules of the l-system.

  * *.axiom*         - initial string
  * *.angle*         - turning angle in degrees
  * *.iterations*    - iterations
  * *.productions[]* - index with a variable, returns its rule. i.e. populate this array with rules
  * *.variables[]*   - index with a variable, allows that variable to draw a line like the command **F**
  * *.ignoreSymbols[]*  - index with a variable, if you don't want them read in the drawing of the l-system
  
~~~javascript
reader.axiom = "F--F--F";
reader.angle = 60;
reader.iterations = 6;
reader.productions["F"] = "F+F--F+F";
reader.variables["F"] = true;
~~~

Now the turtle is ready to draw!

  * *reader.decode();* - decodes the l-system and tells the turtle to draw
  
~~~javascript
reader.decode();
~~~

To reset reader and clear canvas
  * *newL();*          - clears the canvas, resets the reader, (inside load.js)
~~~javascript
newL();
~~~


