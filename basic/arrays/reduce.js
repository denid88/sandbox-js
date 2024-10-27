'use strict';

{
	const array = [1, 2, 3, -4];
	const result = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
	console.dir({result});
}

{
	const array = [1, 2, 3, -4];
	const sum = (accumulator, currentValue) => accumulator + currentValue;
	const result = array.reduce(sum, 0);
	console.dir({result});
}

{
	const array = [1, 2, 3, -4];
	const sum = (accumulator, currentValue) => accumulator - currentValue;
	const result = array.reduceRight(sum);
	console.dir({result});
}