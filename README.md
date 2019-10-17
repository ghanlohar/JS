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

Lexical Scoping:
================================
An important feature of JavaScript to note, is that the interpreter uses Lexical Scoping, as opposed to Dynamic Scoping. This is just a complicated way of saying all inner functions, are statically (lexically) bound to the parent context in which the inner function was physically defined in the program code.

Constructor
==============================
The constructor property returns a reference to the constructor function(not the name string) that created the instance object.(MDN)
Ineritance scenarios:
1. if parent has static methods ---> dont change the constructor property to child function
2. if child has its own create method to create obj ---> change the constructor property to child function
Summary: manually updating or setting the constructor can lead to differrent and sometimes confusing consequences. To prevent this just define the role of constructor in each specific case. In most cases constructor is not used and reassignment of it is not necessary.

Promises
========================================
1. What happens when we return a nonpromise value in resolve or reject in JS promise?
Ans: It will resolve this promise with the retruned non promise value. if we are not returning a value(automatically fn returns undefined) this will resolve(not reject) with undefined passed in next promise.

2. What will happen when we didnt provide reject/resolve and promise rejects/resolves?
Ans: It will find reject/resolve in the chain if it is there and execute that.

3. 

Async/await
================================
The word “async” before a function means one simple thing: a function always returns a promise. Even If a function actually returns a non-promise value, prepending the function definition with the “async” keyword directs JavaScript to automatically wrap that value in a resolved promise.

async function f() {
  return 1; // or return Promise.resolve(1);
}
f().then(alert); // 1

The keyword "await" makes JavaScript wait until that promise settles and returns its result.
await doesn’t cost any CPU resources, because the engine can do other jobs meanwhile: execute other scripts, handle events etc.
It’s just a more elegant syntax of getting the promise result than promise.then, easier to read and write.

Note: Anything you await is passed through Promise.resolve(), so you can safely await non-native promises.

Observables
================================

Change Detection
=================================
victor savkin 


1. p:nth-of-type(2){background:green;} ---> Second paragraph below will be red, 3rd will be green
2. p:nth-child(2){background:red;} ---> If p is the second child of any parent element.
<div>
   <div>first child</div>
   <p>second child and first element of class "p"</p> <!-- GREEN -->
   <p>third child and second element of class "p"</p>
   <p>fourth child and third element of class "p"</p>
</div>
