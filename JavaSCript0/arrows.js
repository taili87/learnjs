// const sayHi = function (name) {
//     return 'Hello, My name is ' + name
// }

// console.log(sayHi('John, Doe'))

// const sayHi = (name)=> {
//     return `My name is ${name}`
// }

// console.log(sayHi('John, Doe'))

// using => when is callback function
const sayHi = (name) => `My name is ${name}`;
console.log(sayHi('John, Doe'));

const toDosList = [{ title: 'QA', isDone: true },
{ title: 'developer', isDone: true },
{ title: 'devOps', isDone: false }
]

// todoList which are true
const thingsDone = toDosList.filter((todo) => todo.isDone === true)
console.log(thingsDone)