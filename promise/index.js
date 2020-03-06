

var div = document.querySelector('#holder');
		var btn = document.querySelector('#mybtn');
		var inputEl = document.querySelector('input');
		
		
		const observable = Rx.Observable.fromEvent(inputEl, 'keyup').pipe(map(event => event.target.value ));
		observable.subscribe(value => {
			console.log(value);
			//div.textContent = 'Btn Clicked '+ num++ +' times';
		});
		
		inputEl.addEventListener('keyup', (event) => {
			console.log('This is handled by Event API');
		});