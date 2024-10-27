'use strict';

{
	const array = [1, 2, 3, -4];
	const result = array.find((item) => item > 0);
	console.dir({result});
}

{
	const  array = ['a', 'b', 'c'];
	const result = array.findIndex((item) => item === 'b');
	console.dir({result});
}

{
	const  array = ['a', 'b', 'c'];
	const result = array.find((item) => item === 'a');
	console.dir({result});
}

{
	const  array = ['a', 'b', 'c', 'd'];
	const result = array.findLast((item) => item === 'd');
	console.dir({result});
}

{
	const  array = ['a', 'b', 'c', 'd'];
	const result = array.findLastIndex((item) => item === 'd');
	console.dir({result});
}
