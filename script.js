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
    if(liText == ''){
      alert("You cannot submit an empty ToDo!")
      counter--
    }else{
    addTodo.innerHTML = `<label><input type='checkbox' id='checkbox'>&ensp;${liText}<span>&ensp;<button type="button">Delete</button></span></label>`
    }
  list.append(addTodo)
  document.getElementById("input").value = ""


addTodo.addEventListener("click", function(event){
  dealWithChecked()
})

document.getElementById("input").value = ""
counter++

const quantity = document.getElementById("item-count")
  quantity.innerText = `${counter}`
const unchecked = document.getElementById("unchecked-count")
  unchecked.innerText = `${counter}`
}

function dealWithChecked() {
  const checkboxes = document.querySelectorAll("li")
  console.log(checkboxes)

  checkboxes.forEach(function(li) {
    if(li.children[0].childNodes[0].checked == true){
      li.classList.add("checked")
      //IS THIS THE BEST PLACE TO DEAL WITH THE UNCHECKED COUNT???
      // const unchecked = document.getElementById("unchecked-count")
      // unchecked.innerText = `${counter - 1}`
      // console.log(counter)
    } else{
      li.classList.remove("checked")
    }
  })
}

