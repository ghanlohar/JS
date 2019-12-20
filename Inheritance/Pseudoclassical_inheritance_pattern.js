/***
 * 
1. Create a Parent(car) class (function)
2. Add some properties to Parent (car) prototype to let the child classes access
3. Create two new child classes
4. Helper function to perform inheritence: Point a child's prototype to a parent's prototype with the help of intermediate object.
5. Inherite with parents
6. Create new instances of child classes
*
***/

// 1. Create a Parent(car) class
var Car = function(){};

// 2. Add some properties to Parent (car) prototype to let the child classes access
Car.prototype = {
    type: 'general',
	wd: 2,
    getType: function(){
		return this.type;
    },
	getWD: function(){
		var aa = this.model +' car is ' + this.wd + ' wheel drive.';
		return aa;
	}
}

//3. Create two new child classes

var xcar = function(model){
	this.maker =  'suzuki';
    this.model = model;
} 

var ycar = function(model){
	this.maker =  'hyundai';
    this.model = model;
}

//4. Helper function to perform inheritence Point a child's prototype to a parent's prototype with the help of intermediate object.

/* Problem with this approach is when you modify any child's prototype, the change will affect all the childs which are already inheriting from parent.
	to fix this we need a intermediate obejct as we have used in extendsObj2 fn.
	*/
var extendsObj = function(child, parent){
    child.prototype = parent.prototype;
}
var extendsObj2 = function(child, parent){
	var tempObj = function(){};
	tempObj.prototype = parent.prototype;
    child.prototype = new tempObj();
	child.prototype.constructor = child;
}
//5. Inherite with parents
extendsObj2(xcar, Car);
extendsObj2(ycar, Car);


//6. Create new instances of child classes
var brezza = new xcar('brezza');
var creta = new ycar('creta');

console.log(brezza.getType());
console.log(creta.getType());

brezza.wd = 4;

console.log(brezza.getWD());
console.log(creta.getWD());

xcar.prototype.wd = 4;

console.log(brezza.getWD());
console.log(creta.getWD());



