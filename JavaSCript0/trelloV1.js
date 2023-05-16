let myToDos ={
    day:'Monday',
    meetings: 0,
    meetDone: 0,
}

// Function to add some meetings 
let addMeeting = function(todo, meet=0){
    todo.meetings = todo.meetings + meet; 
}

let meetDone = function(todo, meet=0){
  todo.meetDone = todo.meetDone - meet;

}
let reSetDay = function(todo){
    todo.meetings = 0;
    todo.meetDone = 0;
}

let getSummaryOfTheDay = function(todo){
   let meetLeft = todo.meetings + todo.meetDone;
   return ` You have ${meetLeft} meetings today`
}

addMeeting(myToDos, 4)
addMeeting(myToDos, 3)
meetDone(myToDos, 5)


//Verification of substraction
console.log(myToDos)
console.log(getSummaryOfTheDay(myToDos))