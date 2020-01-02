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

Closures:
======================================
An inner function always has access to the vars and parameters of its outer function, even after the outer function has returned.
http://davidshariff.com/blog/javascript-scope-chain-and-closures/

Common uses:
--------------------
1. Encapsulations: module pattern/ revealing module pattern
2. Callbacks: most powerful use
3. Closures as arguments: Minimum sort function. By passing closures as parameters, we could define the implementation for different types of data sorting, while still reusing a single function body as a schematic.

When not to use Closures ?
--------------------
Although closures are powerful, they should be used sparingly due to some performance concerns:
1. Large scope lengths: Multiple nested functions are a typical sign that you might run into some performance issues. because each time a identifier needs to be resolved VO is traversed and examined.

2. Garbage collection: The garbage collector will try to free the memory of objects when they can not be referenced by any other live object running in the program, or are unreachable.

3. Circular references: In IE, the JavaScript (JScript ?) engine and DOM both have their own individual garbage collector. So when referencing a DOM element from JavaScript, the native collector hands off to the DOM and the DOM collector points back to native, resulting in neither collector knowing about the circular reference.

Context vs. Scope
===========================
1. Every function invocation has both
2. Scope is function-based while context is object-based
3. Scope pertains to the variable access of a function when it is invoked and is unique to each invocation.
4. Context is always the value of the this keyword which is a reference to the object that “owns” the currently executing code.
5. When called as an unbound function, context(this) will default to the global context or window object in the browser. However, if the function is executed in strict mode, the context will default to undefined.

Lexical Scoping:
================================
An important feature of JavaScript to note, is that the interpreter uses Lexical Scoping, as opposed to Dynamic Scoping. This is just a complicated way of saying all inner functions, are statically (lexically) bound to the parent context in which the inner function was physically defined in the program code.

Inheritence:
=============================

Pseudoclassical pattern
-------------------------------
A pattern which uses a constructor function and the new operator, combined with a prototype added to the constructor is said to be Pseudoclassical.
	a. Invoke a constructor function.
	b. Point a child’s prototype to the parent’s prototype for inheritance to occur.
	
Steps:
1. Create a Parent(car) class (function)
2. Add some properties to Parent (car) prototype to let the child classes access
3. Create two new child classes
4. Helper function to perform inheritence: Point a child's prototype to a parent's prototype with the help of intermediate object.
5. Inherite with parents
6. Create new instances of child classes
	
Functional pattern
---------------------------
you create an object as your parent, pass the child object to the parent to inherit / apply its properties, and return the resulting object back to the child, who can then augment its own properties to the object returned from the parent.
	pros: As the closures of each function allow for good use of public and private methods / attributes.
	cons: downside for performance because each object is unique
	
Steps:
1. Create a parent function.
2. Create the child function and call parent which will return a object with inherited props.
3. Child, who can then augment its own properties to the object returned from the parent.
4. Create objects by calling child functions.
	
Prototypal pattern
----------------------------
var child = Object.create(Parent);

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

Array methods:
---------------------------
map(function(item, index, array){})

reduce(function(accumulator, item, index, array){}, initialVal);
Use case:
Tally items in array:
const fruit = [
  'apple', 'banana', 'cherry', 'mango', 'mango', 'banana', 'cherry', 'apricot', 'apple', 'apple', 'guava', 'banana', 'guava'
]
const fruitTally2 = fruit.reduce((currentTally, currentFruit) => {
  currentTally[currentFruit] = (currentTally[currentFruit] || 0) + 1 
  return currentTally
} , {})

// returns {"apple":3,"banana":3,"cherry":2,"mango":2,"apricot":1,"guava":2}

filter(function(item, index, array){})

slice(startIndex, endIndex) ---> Used to kind of select elem from array, Original array is not modified.
splice(startIndex, length, itemsToAdd) ---> Used to remove and replace items(third arg) from an array.
 
CSS:
========================
Ways to add CSS to HTML element.
--------------------------
1. The most straightforward path. 
Query the element from DOM 
change it's inline styles.

document.getElementById('resultStats').style.fontFamily= 'Arial';

2. Create <style> tag, fill it with CSS rules and append the tag to the DOM.
var style = document.createElement('style');
  style.innerHTML = `
  #target {
  color: blueviolet;
  }
  `;
  document.head.appendChild(style);
 
3. CSSOM insertRule
Tag is empty, but the style (darkseagreen color) is applied to the element. Also the color can't be changed via devtools because Chrome doesn't allow editing dynamic CSS styles.
style.sheet.insertRule('#target {color: darkseagreen}');

CSS selectors are generally case-insensitive; this includes class and ID selectors. unless page has XML/XHTML declaration.

for...in vs for...of:
========================================
for...in ====>> iterates over the enumerble string key props of obj including inherited, excluding symblized key 

The for...of ===>> statement creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables.

Events Bubbling https://javascript.info/bubbling-and-capturing:
==========================
default -- Bubbling, can enable capturing using third argument in addEventListener();
Almost all events bubble. -- focus does not bubble.

event.stopImmediatePropagation()
--------------------------
To stop the bubbling and prevent other handlers on the current element from running, there’s a method event.stopImmediatePropagation(). After it no other handlers execute.

event.stopPropagation()
-------------------------
To stop the bubbling 

remove handler:
--------------------------
To remove the handler, removeEventListener needs the same phase 
If we addEventListener(..., true), then we should mention the same phase in removeEventListener(..., true)

Note: Listeners on same element and same phase run in their set order

Each handler can access event object properties:
----------------------------------------
1. event.target – the deepest element that originated the event.
2. event.currentTarget (=this) – the current element that handles the event (the one that has the handler on it)
3. event.eventPhase – the current phase (capturing=1, target=2, bubbling=3).

Cookies:
=======================
Cookies let you store user information in web pages ==> document.cookie
1. name-value pairs, key-value, expires --> expiry and path --> to which cookie belongs
2. small text files
3. remember information about the user







