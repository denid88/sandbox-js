'use strict';

{
	const array = [1, 2, 3, -4];
	const result = array.indexOf(3);
	console.dir({result});
}

{
	const  array = ['b', 'c'];
	const result = array.indexOf('a');
	console.dir({result});
}

{
	const  array = ['b', 'a', 'b', 'c'];
	const result = array.lastIndexOf('b');
	console.dir({result});
}