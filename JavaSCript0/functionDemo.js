let fullName = function(firstName, lastName){
    console.log(`my name is ${firstName} - ${lastName}`)
}

fullName('Joe', 'Doe');

console.log('********RETURN STATEMENT************')

let addNumber = function(num1, num2){
    let sum = num1+num2;
    return sum;
}

let result = addNumber(2,8)
console.log(result)


// DEFAULT PARAMS
let name = function(firstName='defaultFistName', lastName = 'defaultLastName'){
    return 'Hello, '+ 'I am '+ firstName + " "+ lastName
}


console.log(name('John', 'Doe'))