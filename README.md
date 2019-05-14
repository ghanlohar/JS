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
alert(s); // 0
alert(s(1)); // 1 
alert(s(1)(2)(3)); // 6 


Didnt get it:
-----------------------------------------------
var bar = 1,
    foo = {};

foo: {
    bar: 2;
    baz: ++bar;
};
foo.baz + foo.bar + bar;

