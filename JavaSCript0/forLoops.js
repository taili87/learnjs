const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
console.log(days[0]);
console.log('There are ' +days.length + ' day a week') ;

days.forEach(function(day, index){
  console.log(`Start with ${index+1}--${day}`)
})

for(let index = 0; index < days.length; index++){
const elementArray = days[index];
console.log('With for Loops :'+ elementArray)
}

// Print from Last day: Sunday to Monday
for(let index = days.length-1; index >= 0; index--){
    const elementArray = days[index];
    console.log('With for Loops :'+ elementArray)
    }