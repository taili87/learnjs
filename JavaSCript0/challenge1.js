// Utilize function declaration

function example(numberOne, numberTwo){
    return function(numberThree, numberFour){
        return function(numberFive, numberSix){
            return (numberOne * numberThree * numberFive) + (numberTwo * numberFour *numberSix); 
        }
    }
}

const result = example(1,2)(1,2)(3,4);
console.log(result)


const sample = (numberOne, numberTwo) => 
(numberThree, numberFour) =>
(numberFive, numberSix)=>(numberOne * numberThree * numberFive) + (numberTwo * numberFour *numberSix);

const results = example(1,2)(1,2)(3,4);
console.log(results);