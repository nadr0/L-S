function LSystem(angle, production){
	this.angle = angle;
	this.varible = "F";
	this.symbols = ["F","f","+","-"];
	this.symbolWords = ["F","f","plus","minus"];
	this.axiom = "F";
	this.production = production;
	this.rules = "F";

	T.angle = this.angle;
}


LSystem.prototype.decode = function(){

	var currentProduction = [];

	for (var i = 0; i < this.production.length; i++) {
		var func = this.checkFunc(this.production[i]);
		currentProduction.push(func);
	};

	this.callFuncs(currentProduction);

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
		if(production[i] === "F"){
			T.F();
		}else if(production[i] === "f"){
			T.f();
		}else if(production[i] === "plus"){
			T.plus();
		}else if(production[i] === "minus"){
			T.minus();
		}
	};

}