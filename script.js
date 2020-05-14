const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {  
  const newTodo = document.createElement("li")
  newTodo.innerText = document.getElementById("input").value
  list.append(newTodo)
  document.getElementById("input").value = ""
}
