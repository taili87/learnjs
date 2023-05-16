// let superHeros = ['John', 'Doe', 'Mister', 'IronMan']
// console.log(superHeros);
// console.log(superHeros[0]);
// console.log(superHeros.length);
// let sizes = superHeros[superHeros.length - 1];
// console.log(sizes)
// console.log('We have ${superHeros.length} super Heroes');
// console.log(`We have ${superHeros.length} super Heroes`);
// console.log(`My Last SuperHeros is ${superHeros[superHeros.length - 1]}`)





let numbers  =['one', 'two', 'three', 'four'];

// start
console.log(numbers.shift());// remove the first element of the array
console.log(numbers)

console.log(numbers.unshift('zero')); // Insert new element at the start 
console.log(numbers)


//middle 
//numbers.splice(2, 1, 'SOMETHING-ELSE')
//console.log(numbers);

numbers.splice(2, 2, 'SOMETHING-ELSE')
console.log(numbers);

//end 
console.log('The element to be deleted is: '+ numbers.pop());
console.log(numbers);
numbers.push('four');
console.log(numbers);
