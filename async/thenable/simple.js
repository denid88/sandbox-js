'use strict';

/*
* Object with method then
*/

const thenable = {
	then(onFulfilled) {
		console.log('thenable');
		setTimeout(onFulfilled, 1000);
	}
}

Promise.resolve()
	.then(() => thenable)
	.then(() => console.log('One'))
	.then(() => thenable)
	.then(() => console.log('Two'));