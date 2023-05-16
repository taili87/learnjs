// Object linked to Other Object - OLOO


let originalCar = {
    make: 'BMW',
    model: '876IO',
    year: 2012
};

let newCar = Object.create(originalCar);

console.log(newCar.make);
console.log(Object.getPrototypeOf(newCar));

let myPrototype = Object.getPrototypeOf(newCar);
console.log(myPrototype.make);
console.log(myPrototype.year);

 // Add properties in original car

 originalCar.price = 10000;
 console.log(originalCar);
 console.log(newCar.price);

 // If this property belong to you

 console.log(originalCar.hasOwnProperty('price')); // TRUE
 console.log(newCar.hasOwnProperty('price'));      // FASLE