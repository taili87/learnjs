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

 