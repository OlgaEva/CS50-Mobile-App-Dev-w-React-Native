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

function newTodo(){
  const addTodo = document.createElement("li")
  const liText = document.getElementById("input").value
    if(liText == ''){
      alert("You cannot submit an empty TODO!")
    }else{
    addTodo.innerHTML = `<label><input type='checkbox' id='checkbox'>&ensp;${liText}<span>&ensp;<button type="button" onClick="deleteMe()">Delete</button></span></label>`

      list.append(addTodo)
      document.getElementById("input").value = ""
  
      counter++;
      uncheckedCounter++;

      itemCount.innerText = `${counter}`

      addTodo.addEventListener("click", function(event){
        dealWithChecked()
        })

        calculateUnchecked();
  }
}

function dealWithChecked(){
  console.log("checking my todos...")
  console.log(event.target.checked)
  console.dir(event.target.parentElement.parentElement)
  if(event.target.checked == true){
    console.log("blah")
    event.target.parentElement.parentElement.classList.add("checked")
    calculateUnchecked();
  }else{
    event.target.parentElement.parentElement.classList.remove("checked")
    calculateUnchecked();
  }
}

function calculateUnchecked(){
  console.log("hello")

    let notChecked = 0;
    const checkboxes = document.querySelectorAll("li")
    console.log(checkboxes)
  
      checkboxes.forEach(function(li) {
    
          console.dir(li.childNodes[0])
          if(li.childNodes[0].control.checked == false){
          notChecked++;
          }else{
          // console.log("I'm a true one")
        }
        console.log(notChecked)
  
    uncheckedCount.innerText = `${notChecked}`
      })
  }

function deleteMe(){
 
  if(event.target.parentElement.previousElementSibling.checked == true){
    event.target.parentElement.parentElement.parentElement.remove();
    counter--;
    itemCount.innerText = `${counter}`
  }else{
    event.target.parentElement.parentElement.parentElement.remove();
    counter--;
    itemCount.innerText = `${counter}`
    calculateUnchecked();
  }
}