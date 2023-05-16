// dates object

// Get today date
let today = new Date();
let bob  = new Date('December 6, 1969 07:01:23'); // saturday = 6 

//let bob  = new Date('December 7, 1968 07:01:23');

//let bob  = new Date('2022, 7, 8');

//var elapsedTime = today - bob;
//console.log(elapsedTime);

// get parts of the date

console.log(bob.getDate()); // Monday = 1, Sunday = 7
console.log(bob.getTime()); //get time
console.log(bob.getMonth());
console.log(bob.getDay());
console.log(bob.getHours());
console.log(bob.getMinutes());
console.log(bob.getMilliseconds());
