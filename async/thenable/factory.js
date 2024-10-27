'use strict';

const obtainToyotaCar = (model) => {
	const thenable = {
		then(onFulfilled) {
			setTimeout(() => {
				const toyota = {model, brand: 'Toyota'}
				onFulfilled(toyota);
			}, 1000)
		}
	};
	return thenable;
};

(async () => {
	const toyota = await obtainToyotaCar('Corolla');
	console.dir({ toyota })
})();