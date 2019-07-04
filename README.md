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

1.) “this” inside of an event handler always refers to the element it was triggered on.
2.) 

Constructor
==============================
The constructor property returns a reference to the constructor function(not the name string) that created the instance object.(MDN)
1. if parent has static methods ---> dont change the constructor prpperty to child function
2. if child has its own create method to create obj ---> change the constructor prpperty to child function

