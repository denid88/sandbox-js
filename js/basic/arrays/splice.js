'use strict';

{
	const array = ['a', 'b', 'c'];
	const result = array.splice(1, 2);
	console.dir({array});
	console.dir({result});
}

{
	const array = ['a', 'b', 'c'];
	const result = array.splice(1, 1, 'x', 'y');
	console.dir({array});
	console.dir({result});
}