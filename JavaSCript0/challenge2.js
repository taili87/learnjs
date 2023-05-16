function multiply(){
    const args = [...arguments];
    const result = args.reduce((total, item)=>{
        return item ? item + total: item +total;
    },1);

    return result;
}

const multiplication = multiply(1,2,3,10);
console.log(multiplication);

// Utilize arrow function

const mul = (...args) =>{
    const result = args.reduce((total, item)=>{
        return item ? item * total : item +total;
    },1);
    return result;
};

console.log(mul(4,5))
console.log(mul(2,4,5))