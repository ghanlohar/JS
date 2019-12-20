/**
 * 1. Create a parent function.
 * 2. Create the child function and call parent which will return a new object with inherited props.
 * 3. Child, who can then augment its own properties to the object returned from the parent.
 * 4. Create objects by calling child functions.
 * **/

var Human = function(name)
{
	var that = {};
	//augment that object to inherit the props of parent
    that.name = name;
    that.planetOfBirth = 'Earth';
	that.getName = function(){
		return that.name;
	}
	return that;
}

var male = function(name)
{
    var that = Human(name);
    that.gender = 'male';
    return that;
}
var female = function(name)
{
    var that = Human(name);
    that.gender = 'female';
    return that;
}

// Create objects from the class 
var  jhon = male('Jhon doe');
var  jane  = female('Jane sarah');



// New fn depicting private variables in functional patten

var Human2 = function(name)
{
	var that = {};
    var _private = {
        salutation: 'Mr.'
    };
	//augment that object to inherit the props of parent
    that.name = name;
    that.planetOfBirth = 'Earth';
	that.getName = function(){
		return (this.gender === 'male'? _private.salutation: 'Mrs.') + ' ' + that.name;
	}
	return that;
}