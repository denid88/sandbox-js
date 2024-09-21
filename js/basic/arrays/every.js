'use strict';

{
	const array = [1, 2, 3, -4];
	const result = array.every((item) => item > 0);
	console.dir({result});
}

{
	const  array = ['b', 'c'];
	const result = array.every((item) => item > 'a');
	console.dir({result});
}

{
	const  array = ['a', 'b', 'c'];
	const result = array.some((item) => item > 'a');
	console.dir({result});
}