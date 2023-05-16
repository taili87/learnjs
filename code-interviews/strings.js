let first = 'Knowledge is power but enthusisam pulls the switch.';
let second = 'Do or do not. There is no try.';
let third = '4,8,14,15,16,23,42';


// You can call this method on string literals

let mySplit = third.split(',');
console.log(mySplit);

let mySlice = first.slice(13,18); // postion 13 to 18 - power
console.log(mySlice); 

let mySubstr = first.substring(13,18); // power
console.log(mySubstr);

let myEndsWith = second.endsWith('try.'); // true
console.log(myEndsWith);

let myStartsWith = second.startsWith('Do'); //true
console.log(myStartsWith);

let myInclude = second.includes('There'); // TRUE
console.log(myInclude);


let myRepeat = 'Ha!'.repeat(5);
console.log(myRepeat);

let mySpace = '    bloated      '; // 17 because of the space between the letter
console.log(mySpace.length);
console.log(mySpace.trim().length); // 7 a