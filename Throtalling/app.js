/*
* Throttling is a technique in which, no matter how many times the user fires the event,
* the attached function will be executed only once in a given time interval.
*/

var throtalling = function(fn, limit)
{
	debugger;
	var lastRun = null;
	var lastFunc = null;
	return function()
	{
		var context = this;
		var args = arguments;
		if(!lastRun)
		{
			fn.apply(context, args);
			lastRun = Date.now();
		}
		else
		{
			
			/*if( (Date.now() - lastRun) >= limit )
			{
				fn.apply(context, args);
				lastRun = Date.now();
			}*/
	
			clearTimeout(lastFunc)
			lastFunc = setTimeout(function() {
				if ((Date.now() - lastRun) >= limit)
				{
					  fn.apply(context, args)
					  lastRun = Date.now();
				}
			}, limit - (Date.now() - lastRun))
		}
	}
}

var foo = function()
{
	console.log('Scrolling in throtalling');
}

var elem = document.getElementById('container');
elem.addEventListener('scroll', throtalling(foo, 15000));