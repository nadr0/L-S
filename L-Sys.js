function LSystem(angle){
	this.angle = angle;
	this.varible = "F";
	this.symbols = ["F","f","+","-"];
	this.symbolWords = ["F","f","plus","minus"];
	this.axiom = "F";
	this.production = "F+F";
	this.rules = null;
}


LSystem.prototype.decode = function(){

	var currentProduction = [];

	console.log(this.production);

	// for (var i = 0; i < this.production.length; i++) {
	// 	var func = this.checkFunc(this.production[i]);
	// 	currentProduction.push(func);
	// };
	// console.log(currentProduction);

	// this.callFuncs(currentProduction);

}

LSystem.prototype.checkFunc = function(char){

	for (var i = 0; i < this.symbols.length; i++) {
		if(this.symbols[i] === char){
			return this.symbolWords[i];
		}
	};

}

LSystem.prototype.callFuncs = function(production){

	for (var i = 0; i < production.length; i++) {
		// T. + production[i] + "()"+ ;
	};
	console.log("hi");

}