
/*
In the debouncing technique, no matter how many times the user fires the event, 
the attached function will be executed only after the specified time once the user stops firing the event.
*/

var debouncing = function(fn, delay)
{
	var timer = null;
	return function()
	{
		var context = this;
		var args = arguments;
		clearTimeout(timer);
		timer = setTimeout( function(){
			fn.call(context, args);
		}, delay);
	}
}

var foo = function()
{
	console.log('Scrolling in debouncing');
	console.log(arguments);
	console.log(this);
}

var elem = document.getElementById('container');
elem.addEventListener('scroll', debouncing(foo, 2000));