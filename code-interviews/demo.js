// Create a function that accepts any string, and returns every 
//other number that occurs in that string. 
//E.g.: 'abc12346' returns '136'

const PHONE_NUMBER = {
    phonePrettied: "+1(123)456-7890",  // Adds  country code, parens and dash
    tenDigitPhone: "1234567890", // Just what we passed in
  };


  //let a = 10;
l//et b = '20';
b = parseInt(b,10);

let sum = a+b;
console.log(sum);


let d = parseInt('bob', 10);
let e = isNaN(d);
console.log(d);
console.log(e);



// Lesson 7 
let a =2;
let b = 2;
console.log('New value of a :' + a++);
console.log(++b +': New value of b ');

// Array


let a1= [10,20,39,49,50];
let b2 = ['David', 'Danielle', 'John', 'Ablaye'];

a.push(299);
console.log(a);
a.pop();
console.log(a);
console.log(a[1]);
a[10]=77;
console.log(a)
console.log(a.length)

// FUNCTIONS 

function sayHello(){
  console.log('----------------');
  console.log('Hello!');
  console.log('----------------');
}
sayHello(); // invoke the function
a = sayHello; // reference to the function
a();
a();
a();
a();


function sayHi(name){
  console.log('Hello, my name is '+ name +'!');
}

let myFirstName = sayHi;
let mySecondName = sayHi;
myFirstName('Amadou');
mySecondName('Aminata Diop');


function calculateTax(amounts, sum){
   result = (amounts * 0.0025 )+ sum;
   return result;

}

console.log(calculateTax(1000,20));

// Immediately Invoked Function Expressions
(function(){
  console.log('Immediately Invoked Function Expressions');
})();


// Swith operations 

let hero = 'superman';
switch(hero){
    case 'superman': console.log('super strength ');
                     console.log('Xray vision');
                     break;
    case 'batman': console.log('Drive fast black car');
                   console.log('Fighting Skills');
                   break;
    default: console.log('Member of JLA');
}

// ternary operator: when i want to do quick inline - return string, number or boolean
let num1 = 1, num2 = '1';
let result  = (num1 === num2) ? 'equal' : 'inequal'; // a equal b and if its TRUE return equal (:) not true return inequal
let results = (num1 == num2) ? 'equal' : 'inequal'; 
console.log(result);
console.log(results);