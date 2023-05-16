//List of build in function:

/*
String()
Number()
Boolean()
Function()
Symbol()
*/

/* Array(), RegExp()*/

/*Date(), Error()*/
let myString = new String('My name is Ablaye');
console.log(myString);
console.log(myString.toString()); // convert to primitive string
console.log(typeof myString);

// convert to lower Case

let myPrimitive = 'THIS IS CRAZY';
console.log(typeof myPrimitive);
myPrimitive = myPrimitive.toLowerCase();
console.log(typeof myPrimitive);
console.log(myPrimitive);

// Lets supose you want to start out with with built native - convert builder native to primitive

let myNumber = new Number(10);
console.log(myNumber , typeof(myNumber));

// convert to primitive - javaScript will box and unbox 

let myPrimitiveNumber = myNumber.valueOf();
console.log(myPrimitiveNumber, typeof(myPrimitiveNumber));
