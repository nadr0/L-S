/*
	Clears the canvas
*/
function clearCanvas(){
	context.clearRect(0, 0, canvas.width, canvas.height);
};

/*
	Clears the canvas then resets the reader for a new l-system
*/
function newL(){
	clearCanvas();
	reader.reset();
}


/*
	Changes the l-system based off the options in the drop down menu
*/
function changeSystem(list){
	if(list.value === "kochSnow"){
		kochSnow();
	}else if(list.value === "kochSnowFlake"){
		kochSnowFlake();
	}else if(list.value === "box"){
		box();
	}else if(list.value === "sierpinskisTriangle"){
		sierpinskisTriangle();
	}else if(list.value === "kochCurve"){
		kochCurve();
	}else if(list.value === "quadraticKochisland"){
		quadraticKochisland();
	}else if(list.value === "kochCurve1"){
		kochCurve1();
	}else if(list.value === "kochCurve2"){
		kochCurve2();
	}else if(list.value === "kochCurve3"){
		kochCurve3();
	}else if(list.value === "kochCurve4"){
		kochCurve4();
	}else if(list.value === "dragonCurve"){
		dragonCurve();
	}else if(list.value === "hexagonalGosperCurve"){
		hexagonalGosperCurve();
	}else if(list.value === "plant1"){
		plant1();
	}else if(list.value === "plant2"){
		plant2();
	}else if(list.value === "plant3"){
		plant3();
	}else if(list.value === "islandLakes"){
		islandLakes();
	}
}

/*
	Below are several functions for prewritten l-systems
*/

function kochSnow(){
	newL();
	turtle.pos.x = 0;
	turtle.pos.y = 640;
	turtle.dir.x = 1;
	turtle.dir.y = 0;
	turtle.unit = 1.0;
	turtle.angle = 60;
	reader.axiom = "F";
	reader.angle = 60;
	reader.iterations = 7;
	reader.productions["F"] = "F+F--F+F";
	reader.variables["F"] = true;
	reader.decode();

}

function kochSnowFlake(){
	newL();
	turtle.pos.x = 90;
	turtle.pos.y = 220;
	turtle.dir.x = 1;
	turtle.dir.y = 0;
	turtle.unit = 1.0;
	turtle.angle = 60;
	reader.axiom = "F--F--F";
	reader.angle = 60;
	reader.iterations = 6;
	reader.productions["F"] = "F+F--F+F";
	reader.variables["F"] = true;
	reader.decode();
}

function box(){

	newL();

	turtle.pos.x = 800;
	turtle.pos.y = 800;
	turtle.dir.x = 0;
	turtle.dir.y = -1;
	turtle.unit = 1.0;
	turtle.angle = 90;

	reader.axiom = "F+F+F+F";
	reader.angle = 90;
	reader.iterations = 6;
	reader.productions["F"] = "FF+F+F+F+FF";
	reader.variables["F"] = true;
	reader.decode();


}


function sierpinskisTriangle(){
	newL();
	turtle.pos.x = 65;
	turtle.pos.y = 700;
	turtle.dir.x = 1;
	turtle.dir.y = 0;
	turtle.unit = 3.0;
	turtle.angle = 60;


	reader.axiom = "F";
	reader.angle = 60;
	reader.iterations = 8;
	reader.productions["F"] = "A-F-A";
	reader.productions["A"] = "F+A+F";
	reader.variables["F"] = true;
	reader.variables["A"] = true;
	reader.decode();
}


function kochCurve(){
	newL();
	turtle.pos.x = 0;
	turtle.pos.y = 1050;
	turtle.dir.x = 1;
	turtle.dir.y = 0;
	turtle.unit = 1;
	turtle.angle = 90;

	reader.axiom = "F";
	reader.angle = 90;
	reader.iterations = 7;
	reader.productions["F"] = "F+F-−F-−F+F";
	reader.variables["F"] = true;
	reader.decode();

}


function quadraticKochisland(){
	newL();
	turtle.pos.x = 250;
	turtle.pos.y = 150;
	turtle.dir.x = 1;
	turtle.dir.y = 0;
	turtle.unit = 0.5;
	turtle.angle = 90;

	reader.axiom = "F-F-F-F";
	reader.angle = 90;
	reader.iterations = 5;
	reader.productions["F"] = "F-F+F+FF-F-F+F";
	reader.variables["F"] = true;
	reader.decode();
}

function islandLakes(){
	newL();
	turtle.pos.x = 250;
	turtle.pos.y =750;
	turtle.dir.x = 1;
	turtle.dir.y = 0;
	turtle.unit = 5.0;
	turtle.angle = 90;
	
	reader.axiom = "F+F+F+F";
	reader.angle = 90;
	reader.iterations = 3;
	reader.productions["F"] = "F+f-FF+F+FF+Ff+FF-f+FF-F-FF-Ff-FFF";
	reader.productions["f"] = "ffffff";
	reader.variables["F"] = true;
	reader.decode();
}

function kochCurve1(){
	newL();
	turtle.pos.x = 700;
	turtle.pos.y = 150;
	turtle.dir.x = 1;
	turtle.dir.y = 0;
	turtle.unit = 1.5;
	turtle.angle = 90;

	reader.axiom = "F-F-F-F";
	reader.angle = 90;
	reader.iterations = 5;
	reader.productions["F"] = "FF-F-F-F-F-F+F";
	reader.variables["F"] = true;
	reader.decode();
}

function kochCurve2(){
	newL();
	turtle.pos.x = 400;
	turtle.pos.y = 250;
	turtle.dir.x = 1;
	turtle.dir.y = 0;
	turtle.unit = 10;
	turtle.angle = 90;

	reader.axiom = "F-F-F-F";
	reader.angle = 90;
	reader.iterations = 4;
	reader.productions["F"] = "FF-F+F-F-FF";
	reader.variables["F"] = true;
	reader.decode();
}

function kochCurve3(){
	newL();
	turtle.pos.x =10;
	turtle.pos.y = 10;
	turtle.dir.x = 1;
	turtle.dir.y = 0;
	turtle.unit = 3;
	turtle.angle = 90;

	reader.axiom = "F-F-F-F";
	reader.angle = 90;
	reader.iterations = 5;
	reader.productions["F"] = "FF-F--F-F";
	reader.variables["F"] = true;
	reader.decode();
}


function kochCurve4(){
	newL();
	turtle.pos.x = 550;
	turtle.pos.y = 450;
	turtle.dir.x = 1;
	turtle.dir.y = 0;
	turtle.unit = 3.0;
	turtle.angle = 90;

	reader.axiom = "F-F-F-F";
	reader.angle = 90;
	reader.iterations = 6;
	reader.productions["F"] = "F-FF--F-F";
	reader.variables["F"] = true;
	reader.decode();
}

function dragonCurve(){
	newL();
	turtle.pos.x = 700;
	turtle.pos.y = 400;
	turtle.dir.x = 0;
	turtle.dir.y = -1;
	turtle.unit = 1;
	turtle.angle = 90;

	reader.axiom = "F";
	reader.angle = 90;
	reader.iterations = 18;
	reader.productions["F"] = "F+A+";
	reader.productions["A"] = "-F-A"
	reader.variables["A"] = true;
	reader.variables["F"] = true;
	reader.decode();
}

function hexagonalGosperCurve(){
	newL();
	turtle.pos.x = 650;
	turtle.pos.y = 600;
	turtle.dir.x = 1;
	turtle.dir.y = 0;
	turtle.unit = 4.0;
	turtle.angle = 60;

	reader.axiom = "F";
	reader.angle = 60;
	reader.iterations = 5;
	reader.productions["F"] = "F+A++A-F--FF-A+";
	reader.productions["A"] = "-F+AA++A+F--F-A";
	reader.variables["A"] = true;
	reader.variables["F"] = true;
	reader.decode();
}

function plant1(){
	newL();
	turtle.pos.x = 350;
	turtle.pos.y = 675;
	turtle.dir.x = 0;
	turtle.dir.y = -1;
	turtle.unit = 10.0;
	turtle.angle = 20;

	reader.axiom = "F";
	reader.angle = 20;
	reader.iterations = 5;
	reader.productions["F"] = "F[+F]F[-F][F]";
	reader.variables["F"] = true;
	reader.decode();
}


function plant2(){
	newL();
	turtle.pos.x = 350;
	turtle.pos.y = 800;
	turtle.dir.x = 0;
	turtle.dir.y = -1;
	turtle.unit = 7.0;
	turtle.angle = 22.5;

	reader.axiom = "F";
	reader.angle = 22.5;
	reader.iterations = 5;
	reader.productions["F"] = "FF-[-F+F+F]+[+F-F-F]";
	reader.variables["F"] = true;
	reader.decode();
}



function plant3(){
	newL();
	turtle.pos.x = 350;
	turtle.pos.y = 800;
	turtle.dir.x = 0;
	turtle.dir.y = -1;
	turtle.unit = 0.75;
	turtle.angle = 25.7;

	reader.axiom = "X";
	reader.angle = 25.7;
	reader.iterations = 9;
	reader.productions["X"] = "F[+X][-X]FX";
	reader.productions["F"] = "FF";
	reader.variables["F"] = true;
	reader.variables["X"] = true;
	reader.decode();
}
