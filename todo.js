const toDoList = document.querySelector(".toDoCont");
const input = document.querySelector(".mainInput");
const submitBut = document.querySelector(".subBut");

function addToDo(){
    const userInput = input.value;
    var newInput = document.createElement("li")
    newInput.append(userInput);
    toDoList.append(newInput);
}
submitBut.onclick = () => addToDo();