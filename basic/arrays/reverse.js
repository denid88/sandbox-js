'use strict';

{
	const array = ['a', 'b', 'c'];
	const result = array.reverse();
	console.dir({result});
}

{
	const array = [1, 0, 0, 127];
	const result = array.reverse().join('.');
	console.dir({result});
}