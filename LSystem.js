function LSystem(angle, production, iterations, rule){
	this.angle = angle;
	this.varible = "F";
	this.symbols = ["F","f","+","-"];
	this.symbolWords = ["F","f","plus","minus"];
	this.axiom = "F";
	this.production = production;
	this.rule = rule;
	this.iterations = iterations;
	this.currentProduction = [];
	this.nonConvert = [];
	T.angle = this.angle;
}


LSystem.prototype.decode = function(){

 	for (var j = 0; j < this.iterations; j++) {
 		this.currentProduction = [];
 		this.nonConvert = [];
		for (var i = 0; i < this.production.length; i++) {
			var func = this.checkFunc(this.production[i]);
			if(this.production[i] === "F"){
				for (var w = 0; w < this.rule.length; w++) {
					var func = this.checkFunc(this.rule[w]);
					this.nonConvert.push(this.rule[w]);
					this.currentProduction.push(func);
				};
			}else{
				this.currentProduction.push(func);
				this.nonConvert.push(this.production[i]);
			}
		};

		this.production = "";

		for (var i = 0; i < this.nonConvert.length; i++) {
			this.production = this.production + this.nonConvert[i];
		};

 	};

 	if(this.iterations === 0){
	 	this.currentProduction = [];

 		for (var i = 0; i < this.production.length; i++) {
			var func = this.checkFunc(this.production[i]);
			this.currentProduction.push(func);
		};
 	}

	this.callFuncs(this.currentProduction);

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