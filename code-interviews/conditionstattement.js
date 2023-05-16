let hero = 'superman';
switch(hero){
    case 'superman': console.log('super strength ');
                     console.log('Xray vision');
                     break;
    case 'batman': console.log('Drive fast black car');
                   console.log('Fighting Skills');
                   break;
    default: console.log('Member of JLA');
}

// ternary operator: when i want to do quick inline - return string, number or boolean
let a = 1, b = '1';
let result  = (a === b) ? 'equal' : 'inequal'; // a equal b and if its TRUE return equal (:) not true return inequal
let results = (a == b) ? 'equal' : 'inequal'; 
console.log(result);
console.log(results);




// Iteration statement number of time the condition is met.
// SCOPE :  variable that has different variation 

for(let i =0; i < 10 ; i++){
    console.log(i);
}

console.log('-------------------*******---------------')

let a2= [12,2,3,4,,5,6,7];
for (let i =0 ; i<a2.length; i++){
    const MY_ARRAY = a2[i];
    console.log(MY_ARRAY);
}

// while Loops

let i = 0;
while(i < 10){
    console.log(i++);

    if( i == 7){
        break;
    }
}