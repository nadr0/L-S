function LSystem(angle, production, iterations, rule1, rule2){
	this.angle = angle;
	this.varible = "F";
	this.symbols = ["F","f","+","-","A"];
	this.symbolWords = ["F","f","plus","minus","A"];
	this.axiom = "F";
	this.production = production;
	this.rule1 = rule1;
	this.rule2 = rule2;
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
				for (var w = 0; w < this.rule1.length; w++) {
					var func = this.checkFunc(this.rule1[w]);
					this.nonConvert.push(this.rule1[w]);
					this.currentProduction.push(func);
				};
			}
			else if(this.production[i] === "A"){
				for (var q = 0; q < this.rule2.length; q++) {
					var func = this.checkFunc(this.rule2[q]);
					this.nonConvert.push(this.rule2[q]);
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
		}else if(production[i] === "A"){
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