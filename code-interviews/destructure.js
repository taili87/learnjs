// Destructuring arrays

let a,b,c,d,e,f;
let names = ['David', 'Danielle', 'Molla', 'Morgan', 'Alex', 'Sammy'];

// take the first element and put it to a, and second to b .....


[a,b,c,d,e] = names;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);


let others;
[a, b, ...others] = names;
console.log(a);
console.log(b);
console.log(others);

// Working in Objects: grap what I want and put it to othere
let year, model;
({year, model, value,make} = { make: 'BMW', model: 'x5', year: 2010,  value: 5000 });

console.log(year);
console.log(model);
console.log(value);
console.log(make);