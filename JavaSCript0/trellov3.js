const findTodo = function(myToDos, title){
    const titleReturn = myToDos.find(function(todo, index){
        return todo.title.toLowerCase()===title.toLowerCase()
    })

    return titleReturn
}

let printMe = findTodo(newToDos, 'To the gym with bro!')
console.log(printMe)