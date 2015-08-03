var ap = require('./atomicWeightParser.js');

var atomicTable = ap();

function Buffer(formulaObj) {
	this.contents = [];
}
Buffer.prototype.parse = function(formulaObj) {
}
Buffer.prototype.calculate = function() {
	//look up in atomicTable and find relevant element
	//find atomic weight obj
	//then multiply atomic weight by grams needed.
}
