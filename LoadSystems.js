function clearCanvas(){
	context.clearRect(0, 0, canvas.width, canvas.height);
};

function newL(){
	clearCanvas();
	delete L;
	pythagorasTree();
}


function kochSnow(){
	T.pos.x = 0;
	T.pos.y = 640;
	T.dir.x = 1;
	T.dir.y = 0;
	T.unit = 2.5;
	L = new LSystem(60,"F",8,"F+F--F+F","");
	L.decode();
}

function kochSnowFlake(){
	T.pos.x = 75;
	T.pos.y = 175;
	T.dir.x = 1;
	T.dir.y = 0;
	T.unit = 2.0;
	L = new LSystem(60, "F--F--F", 5, "F+F--F+F","");
	L.decode();
}

function box(){

	T.pos.x = 560;
	T.pos.y = 560;
	T.dir.x = 0;
	T.dir.y = -1;
	T.unit = 2.0;
	L = new LSystem(90, "F+F+F+F", 5,"FF+F+F+F+FF","");
	L.decode();

}


function sierpinskisTriangle(){

	T.pos.x = 65;
	T.pos.y = 550;
	T.dir.x = 1;
	T.dir.y = 0;
	T.unit = 2.0;
	L = new LSystem(60, "F", 8, "A-F-A","F+A+F");
	L.decode();

}

function pythagorasTree(){

	T.pos.x = 320;
	T.pos.y = 640;
	T.dir.x = 0;
	T.dir.y = -1;
	T.unit = 2;
	L = new LSystem(45, "F", 8, "A[F]F","AA");
	L.decode();

}