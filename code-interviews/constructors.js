// FORMAT -SHIFT + OPTION + F

function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
}

let myCar = new Car('BMW', '755LI', 2012);
console.log(myCar);


function MyFunction(){
    console.log('I am a function');
}

let myFunction = new MyFunction();
console.log(typeof myFunction);

// Can not really do anything with this particular object ...
// its certainly NOT a function reference anymore;

// myFunction(); DO NOT DO THIS

function Meals( maffe, yassa, thiebou){
    this.maffe = maffe;
    this.yassa = yassa;
    this.thiebou = thiebou;
    console.log('This is my today meals');

}

let meals = new Meals ('kanni', 'kadia', 'yambi');
console.log(meals);