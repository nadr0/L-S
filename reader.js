function reader(){

	/*
		Angle for the turtle to use
	*/
	this.angle = 60;

	/*
		Possble symbols to be used with the productions and axiom
	*/
	this.symbols = ["F","f","+","-","[","]","^","&","\\","/","|"];

	/*
		a set of production stream
			F -> FF+F&F-F
			B -> BB+F+B++B
			...
	*/
	this.productions = {
		"F":"F+F--F+F",
	};

	/*
		Starting equation
			FB ...
	*/
	this.axiom = "F--F--F";

	/*
		A stack structure to keep track of the current state of the turtle
	*/
	this.stack = [];


	/*
		The number of iterations for the productions
	*/
	this.iterations = 6;

	/*
		Variables for axiom and production
			Only add if you want them to be considered as F ... which means move forward
	*/
	this.variables = {
		"F":true,

	};

	/*
		Temp production used in iterations of the production
	*/
	this.tempProduction = "";

	/*
		The stream of commands after iterations
		The turtle will perform these commands
	*/
	this.finalProduction = "";

	/*
		Symbols to ignore in production
			"G : true"...
				If FFGFF, it would only read the F
	*/
	this.ignoreSymbols = {
		"A":true,
		"B":true,	
		"C":true,
		"D":true,
		"X":true,
		"Y":true
	};


}

reader.prototype.reset = function(){
	this.axiom = "";
	this.finalProduction = "";
	this.tempProduction = "";
	this.ignoreSymbols = {};
	this.stack = [];
	this.variables = {};
	this.productions = {};
	this.iterations = 0;
}

reader.prototype.decode = function(){

	/*
		If the iterations is equal to zero
			Just perform the axiom
	*/
	if(this.iterations === 0){
		this.finalProduction = this.axiom;
	}else{
		this.tempProduction = this.axiom;

		for (var i = 0; i < this.iterations; i++) {

			for (var j = 0; j < this.tempProduction.length; j++) {
				if(this.productions[this.tempProduction[j]]){
					for (var w = 0; w < this.productions[this.tempProduction[j]].length; w++) {
					    this.finalProduction = this.finalProduction + this.productions[this.tempProduction[j]][w];
					};
				}else{
					this.finalProduction = this.finalProduction + this.tempProduction[j];
				}

			};

			this.tempProduction = this.finalProduction;
			this.finalProduction = "";
		};

	}

	this.finalProduction = this.tempProduction;

	/*
		Make the turtle move!
	*/
	this.draw();

}

/*
	Calls all the functions to make the turtle walk the pattern
*/
reader.prototype.draw = function(){
	/*
		current action to peform
	*/
	var c = null;

	/*
		Go through the whole production stream and call each function
	*/
	for (var i = 0; i < this.finalProduction.length; i++) {

		c = this.finalProduction[i];

		if(!this.ignoreSymbols[c]){

			if(this.variables[c] === true){
				turtle.F();
			}else if(c === "f"){
				turtle.f();
			}else if(c === "+"){
				turtle.plus();
			}else if(c === "-"){
				turtle.minus();
			}else if(c === "["){
				var temp = {
					pos: {
						x: turtle.pos.x,
						y: turtle.pos.y,
					},
					dir: {
						x: turtle.dir.x,
						y: turtle.dir.y,
					}
				};
				this.stack.push(temp);
			}else if(c === "]"){

				var temp = this.stack.pop();

				turtle.pos.x = temp.pos.x;
				turtle.pos.y = temp.pos.y;

				turtle.dir.x = temp.dir.x;
				turtle.dir.y = temp.dir.y;

			}else if(c === "^"){
				turtle.upArrow();
			}else if(c === "&"){
				turtle.ampersand();
			}else if(c === "\\"){
				turtle.backslash();
			}else if(c === "/"){
				turtle.forwardslash();
			}else if(c === "|"){
				turtle.verticalbar();
			}
		}

	};
}


