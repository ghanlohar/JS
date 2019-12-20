/*
1. Create a Parent(Human) obejct.
2. Create child objects by calling Object.create on parent and supplying additional properties.
3. Create further level of inheritance by Object.create on childs.
*/

var Human = {
	name : '',
    planetOfBirth : 'Earth',
	getName : function(){
		return this.name;
    }
}

var male = Object.create(Human, {
    gender: {value: 'Male'}
});
var female = Object.create(Human, {
    gender: {value: 'Female'}
});

// Create objects from the class 
var  jhon =Object.create(male, {
    name: {value: 'Jhon doe'}
});

var  Jane =Object.create(female, {
    name: {value: 'Jane sarah'}
});