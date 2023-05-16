/*
var my_variable  = 'I am at the global scope'; // DO NOT DO THIS
console.log(my_variable);
var my_function = function (){ // DONT DO THIS 
    console.log('me too !');
}

console.log(my_function());

*/


function two(){
    return function (){
        console.log('two');
    }
}

let myFunction = two();
myFunction();
//two()();

function three(){
    return function(){
        return 'hello my function!';
    }
}

//console.log(three()());

let my_function = three();
console.log(my_function());