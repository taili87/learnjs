// using arrow function run a function over each element of the arrays

/*map: a function that accepts up to three arguments. The map method calls 
  the callbackfn function are time for each element in the array - 
   Calls a defined callback function on each element of an array, and returns an array
   that contains the results*/

   // This program below: map ech elemnt of array to our arrow function and pass names_ and results
    // for all we get the results:

    let names = ['David', 'Eddie', 'Alex', 'Michael'];
    names.map((namesVariable) => { console.log(`Hi, my name is  ${namesVariable}`);});