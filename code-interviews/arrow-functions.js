// Arrow functions are useful whenever you works like array - Map, filter, 

let hi = () => { console.log('my arrow function'); }
hi();

// --------------

let hello = (name) => {
    console.log(`Hello, I am ${name} `);
}

hello('Ablaye');

//------------------

let add = (a, b) => { return a + b };
console.log(add(12, 18));

// using arrow function run a function over each element of the arrays

/*map: a function that accepts up to three arguments. The map method calls 
  the callbackfn function are time for each element in the array - 
   Calls a defined callback function on each element of an array, and returns an array
   that contains the results*/

   // This program below: map ech elemnt of array to our arrow function and pass names_ and results
    // for all we get the results:

let names = ['David', 'Eddie', 'Alex', 'Michael'];
names.map((namesVariable) => { console.log(`Hi, my name is  ${namesVariable}`);});

let numbers = [1,2,3,4,5,6];
let i = 0;
numbers.map((num) => {
     i++; 
     console.log(`${num} ${i}`) 

    });


    // return keyword

    let name_value = ['David', 'Eddie', 'Alex', 'Michael'];
    var transformed = name_value.map((nameTransformed) => {return `Voila, je m'appelle ${nameTransformed}`});
    console.log(transformed);