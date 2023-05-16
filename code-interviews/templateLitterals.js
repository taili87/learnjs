// inject other value

let name = 'Bob';
console.log(`Hi ${name}!`);

let sentences = `my name is Ablaye and I came from senegal. This isn't a better's code.`;
               console.log(sentences);

// In web developement in shopping when you want 1 items or 2 items.
function getReasonCount(){
   return 2;
}
let interpolation = `Give me ${(getReasonCount() == 1) ? 'one good reason' : 'a few reasons'} to try this`;
console.log(interpolation);
