$(document).ready(function(){

var date = new Date();
var hour = date.getHours();
console.log(hour);

var dayStarts = hour
var todoList = document.querySelector("#todo-list");

var todos = ["9,10,11,12,1,2,3,4,5"];

init();

function renderTodos() {



}

function init() {
 
    
    var storedTodos = JSON.parse(localStorage.getItem("todos"));
  
    if (storedTodos !== null) {
      todos = storedTodos;
    }
  
    renderTodos();
   

  }

  function storeTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  

// When form is submitted...
todoTable.addEventListener("submit", function(event) {
  event.preventDefault();

  var todoInput = document.querySelector("#todo-input");
  var todoText = todoInput.value.trim();

  // Add new todoText to todos array
  todos.push(todoText);


  // Re-render the list
  storeTodos();
  renderTodos();
});

// When a element inside of the todoList is clicked...
todoList.addEventListener("click", function(event) {
  var element = event.target;

  // If that element is a button...
  if (element.matches("button") === true) {
    // Get its data-index value and remove the todo element from the list
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);

    storeTodos();
    renderTodos();
  }
});
})