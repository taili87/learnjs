let car = {
    make: 'bmw',
    model: 'X5',
    year: 2015,
    getPrice: function(){ // This function is a method
        // perform some calculation
        return 5000;
    },

    printDescription: function(){
        console.log(this.make + ' ' +this.model);
    }
}

car.printDescription();
console.log(car.year);

// another 

var anotherCar = {};
anotherCar.name = 'Bob';
console.log(anotherCar.name);

// Three

var a = {
    myProperty: {b: 'Hi'}
};

console.log(a.myProperty.b);


// Four

var address = {
    myProperty: [
        {houseNumber: 46},
        {addressName:'ulsh park drive'},
        {zipCode: 30265},
        {city: 'Newnan'},
        {county: 'Coweta'}
    ]
};

console.log(address.myProperty[1].addressName);

// Five

let contacts  = {
    customers: [
        {firstName: 'Ablaye', lastName: 'Thiam', phoneNumber:['(123) 409-23-3456', '(001) -123-345']},
        {firstName: 'Modou', lastName: 'Ndiaye', phoneNumber:['(221) 409-23-3456']},
        {firstName: 'Ibrahima', lastName: 'Fall', phoneNumber:['(123) 409-23-3456']}
    ],

    employees: [
        {firstName: 'Jack', lastName: 'Hundley', phoneNumber:['(123) 409-23-3456', '(098) -234-28760']},
        {firstName: 'Joe', lastName: 'Doe', phoneNumber:['(221) 409-23-3456']},
        {firstName: 'Michael', lastName: 'Doe', phoneNumber:['(123) 409-23-3456']}
    ]


};

let customerName = contacts.customers[1].lastName; 
let customerName1 = contacts.employees[2].phoneNumber[0]; 
console.log(customerName);
console.log(customerName1);







