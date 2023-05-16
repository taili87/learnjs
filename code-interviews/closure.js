// Closure is function the return another function with differents set of data

function sayHello(name){
    return function(){
      console.log(`Howdy ${name}`);
    }

}

let bob = sayHello('Bob');
bob();
console.log(typeof bob);