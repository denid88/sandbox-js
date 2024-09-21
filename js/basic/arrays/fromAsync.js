'use strict';
// From Node.js v22.0.0, the Array.fromAsync() method is available.
{
	const asyncIterable = (async function* () {
		let i = 0;
		while (i < 5) {// Simulating async delay
			yield `Chunk ${i++}`;
		}
	})();

	Array.fromAsync(asyncIterable).then((array) => console.dir({array}));
}