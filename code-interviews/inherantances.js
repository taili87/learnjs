  // declaration
  
  class Car{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // Define a method
    print(){console.log(`${this.make}, ${this.model}, ${this.year}`)};

  }

  let myCar = new Car('bmw', '876ER', 2015);
  console.log(myCar.year);
  myCar.print();

  //expressions

  // Inheritance

  class SportsCar extends Car{
    revEngine(){
        console.log('VRRRROOMMMM goes the ' + this.make);
    }
  }

  let mySportsCar = new SportsCar('Dogde','Challenger', 2020);
  mySportsCar.print();
  mySportsCar.revEngine();

  //myCar.revEngine();

 