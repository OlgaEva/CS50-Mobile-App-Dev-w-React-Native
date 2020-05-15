const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let counter = 0;

function newTodo() {  
  const addTodo = document.createElement("li")
  const liText = document.getElementById("input").value

  addTodo.innerHTML = `<label><input type='checkbox' id='checkbox'>${liText}</label>`

  list.append(addTodo)
  document.getElementById("input").value = ""


addTodo.addEventListener("click", function(event){
  // console.log(event)
  dealWithChecked()
})
// debugger;

document.getElementById("input").value = ""
counter++
console.log(counter)

const quantity = document.getElementById("item-count")
quantity.innerText = `${counter}`
}

function dealWithChecked() {
  // console.log("this still works")
  const checkboxes = document.querySelectorAll("li")
  console.log(checkboxes)

  checkboxes.forEach(function(li) {
    if(li.children[0].childNodes[0].checked == true){
      // console.log("I want a strikethrough please")
      li.classList.add("checked")
    } else{
      li.classList.remove("checked")
    }
  })

}

