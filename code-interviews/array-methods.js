let names = ['david', 'eddie', 'alex', 'michael'];
let others = ['sammy', 'gary', 'wolfgang', 'mark'];

let lost = [4, 8, 15, 16, 23, 42];
let fibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

var combine = lost.concat(fibonacci);
console.log(combine);

console.log(fibonacci.join('~')); // join and separate by ~

//push, pop
console.log(lost.shift());
console.log(lost);
lost.unshift(1, 2, 3, 4);
console.log(lost);

console.log(names.reverse()); // reverse the order of the names

console.log(names.sort());// from A-Z

console.log(others.indexOf('mark')); // index of the elements

console.log(combine);
console.log(combine.lastIndexOf(55)); // where 55 in the index

// map using arrays function

var filtered = combine.filter((x) => { if (x <= 15) return x; }); // return number that match numbers<=15
console.log(filtered);

names.forEach((name) => console.log(`Howdy ${name}`)); // for each element of the array


var numbers = combine.filter((x) => { if (x <= 15) return x; }); // return number that match numbers<=15
console.log(numbers);
console.log(numbers.every((num) => num < 16)); // number of 
console.log(numbers.every((num) => num < 10)); // false because there are less number

// Tell me if one elements matched our conditions
console.log(fibonacci.some((num1) => num1 > 50));
console.log(fibonacci.some((num1) => num1 > 100));



