const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCount = document.getElementById('item-count')
const uncheckedCount = document.getElementById('unchecked-count')

let counter = 0;
let uncheckedCounter = 0;

function newTodo() {  
  const addTodo = document.createElement("li")
  const liText = document.getElementById("input").value
    if(liText == ''){
      alert("You cannot submit an empty ToDo!")
    }else{
    addTodo.innerHTML = `<label><input type='checkbox' id='checkbox'>&ensp;${liText}<span>&ensp;<button type="button">Delete</button></span></label>`

      list.append(addTodo)
      document.getElementById("input").value = ""
  
      counter++;
      uncheckedCounter++;

      itemCount.innerText = `${counter}`
      uncheckedCount.innerText = `${uncheckedCounter}`
  }

addTodo.addEventListener("click", function(event){
  dealWithChecked()
})

}

function dealWithChecked() {
  const checkboxes = document.querySelectorAll("li")

  checkboxes.forEach(function(li) {
    if(li.children[0].childNodes[0].checked == true){
      console.log(li.children[0].childNodes[0].checked)
      li.classList.add("checked")
      console.log(uncheckedCounter)
      uncheckedCounter--;
      uncheckedCount.innerText = `${uncheckedCounter}`
      console.log(uncheckedCounter)
    } else{
      console.log(li.children[0].childNodes[0].checked)
      li.classList.remove("checked")
      // console.log(uncheckedCounter)
      // uncheckedCounter++;
      // uncheckedCount.innerText = `${uncheckedCounter}`
      // console.log(uncheckedCounter)
    }
  })
}

