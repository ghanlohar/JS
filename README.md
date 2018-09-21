# JS
JS general

var sum = function() {
	var x = 0;
	function inner(){
		x = x + arguments[0];
		return arguments.callee;
	}
	inner.toString = function(){z = x;x = 0;return z;}
	return inner;
};
var s = sum(); 
