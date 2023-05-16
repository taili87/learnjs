let pattern = /xyz/;
let value = 'This is just a test';

let result = value.match(pattern);

console.log(result, typeof result);

if(result === null){
    console.log('no match was found');
}else{
    console.log('match was found!')
}