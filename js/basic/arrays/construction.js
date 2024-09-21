'use strict';

// Example of array constructor
{
	const array = [];
	array[70] = 100;
	console.dir({array, length: array.length})
}

// In length includes only positive indexes
{
	const array = [];
	array[1] = 100;
	array['first'] = 100;
	array[0] = 200;
	array[-1] = -100;
	console.dir({array, length: array.length});
}

// Simple array initialization
{
	const array = [1, 2, 3];
	console.dir({array, length: array.length});
}

// Simple initialization via class constructor
{
	const array = new Array(4);
	console.dir({array, length: array.length});
}

{
	const array = Array(4);
	console.dir({array, length: array.length});
}

// Initialization with few arguments
{
	const array = Array(7, 6, 5, 4);
	console.dir({array, length: array.length});
}

// Array from
{
	const array = Array.from([1, 2, 3]);
	console.dir({array, length: array.length});
}

// Array from
{
	const array = Array.from('123');
	console.dir({array, length: array.length});
}

// Array of
{
	const array = Array.of(1, 2, 3);
	console.dir({array, length: array.length});
}

// Array of
{
	const array = Array.of(4);
	console.dir({array, length: array.length});
}

// Array fill all elements
{
	const array = [1, 2, 3];
	array.fill(7)
	console.dir({array, length: array.length});
}

// Array fill each element
{
	const array = [1, 2, 3];
	array.fill({})
	console.dir({array, length: array.length});
}