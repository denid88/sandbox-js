'use strict';

{
	const array = [1, 2, 3, 4, 5];
	const newArray = array.map((value, index) => {
		return value * 2;
	});
	console.log(newArray);
}