//This keyword a given contest base on how you call the function - (call function  using the method invocation

function first(){
    return this;
}

console.log(first() === global); 

// this is Node's global object
// because thats where the
// first method was called


function second(){
    'use strict';
    return this;
}

console.log(second() === global);
console.log(second() === undefined);

// this depends on HOW a function is called 

let myObject = {
    value: 'Object inside myObject'
};


// value is set on the global object

global.value = 'Global object';

function third(){
    return this.value;
}

function applyFunction(name){
    return this.value + ' ' + name;
}

console.log(third());
console.log(third.call(myObject)); // calling the value that is in my myObject
console.log(third.apply(myObject));
console.log(applyFunction.apply(myObject, ['bob'])); // apply
console.log(applyFunction.apply(myObject, 'bob')); // call


/* Both call and apply allow you to explicitly set what you want
to represent 'this'. The difference is in how additional argument to the function are sent*/

/// another function

function fifth(){
    console.log(this.firstName + ' '+ this.lastName);

} 
let customer1 = {
    firstName : 'bob',
    lastName  : 'tabor',
    print:fifth

}

let customer2 = {
    firstName : 'Ablaye',
    lastName  : 'Thiam',
    print:fifth

}

customer1.print();
customer2.print();


// this -how a given function is called and the site from which it is called
// in this case, this keyword is used at call side , element level console.log(arg)
// at this call this is called at the global level - console.log(this)
// By default functions that are called using the method invocation operators alone
//will use the context which the call is made - if the call is made in global context the this keyword 
// will fall to the global object
// If the call is made in the object then this keyword will be bounded to the object -customer 1 and 2

// You can take control by using call and apply
// use the browser this - how its being call and who is calling in.

// Lesson 18