'use strict';

{
	const array = [1, 2, 3, [4, 5, 6]];
	const result = array.flat();
	console.dir({result});
}

{
	const array = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
	const result = array.flat();
	console.dir({result});
}

{
	const array = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
	const result = array.flat(2);
	console.dir({result});
}

{
	const array = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12]]]];
	const result = array.flat(Infinity);
	console.dir({result});
}