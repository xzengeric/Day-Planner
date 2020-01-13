<<<<<<< HEAD

const date = moment()
var nhour = date.format("HH")


document.querySelector("#currentDay").innerHTML = moment().format('LLLL');
var todoform = document.querySelector("#todo-form")

var todoList = document.querySelector("#todo-list");

var todos = [
  {
    hour: 9,
    todoText: ""
  },
  {
    hour: 10,
    todoText: ""
  },
  {
    hour: 11,
    todoText: ""
  },
  {
    hour: 12,
    todoText: ""
  },
  {
    hour: 13,
    todoText: ""
  },
  {
    hour: 14,
    todoText: ""
  },
  {
    hour: 15,
    todoText: ""
  },
  {
    hour: 16,
    todoText: ""
  },
  {
    hour: 17,
    todoText: ""
  },
]



init()

function renderTodos() {
  
  todoform.innerHTML = "";

  for (var i = 0; i < todos.length; i++) {

    var todoIndex = todos[i].hour;
    
    
    var tr = document.createElement("tr");
    tr.setAttribute("id", "todo-list" + todoIndex);
    var n = tr.getAttribute("id");



    var th = document.createElement("th");
    th.setAttribute("id", "hourIndex");
    th.setAttribute("data-index", i);
    th.setAttribute("style", "font-size:30px");
    th.setAttribute("value", todoIndex);
    th.textContent = todoIndex + ":00";
    var meIndex = th.getAttribute("data-index");


    var td = document.createElement("td");

    var textArea = document.createElement("textarea");
    textArea.setAttribute("placeholder", "What needs to be done?");
    textArea.setAttribute("id", "todo-input"+ i)
    textArea.textContent = todos[i].todoText;
    


    var button = document.createElement("button");
    button.setAttribute("class", "btn btn-primary btn-lg");
    button.setAttribute("id", "saveBtn");
    button.setAttribute("data-index", i);
    
    button.setAttribute("onclick", "saveTodos()");
    button.textContent = "Save";

    var td2 = document.createElement("td");

    document.querySelector("#todo-form").appendChild(tr);
    tr.appendChild(th);
    td.appendChild(textArea);
    tr.appendChild(td);
    td2.appendChild(button);
    tr.appendChild(td2);

    checkIfMatch(n, todoIndex);
  }
  
}

//check time
function checkIfMatch(n, todoIndex) {

  nhour= parseInt(nhour);

  if (nhour === todoIndex) {

    document.getElementById(n).setAttribute("Class", "present");

  } else if (nhour < todoIndex) {
    document.getElementById(n).setAttribute("Class", "future");
    
  } else {
    document.getElementById(n).setAttribute("Class", "past");

  }
}

function init() {
  // Get stored todos from localStorage
  // Parsing the JSON string to an object
  var storedTodos = JSON.parse(localStorage.getItem("todos"));

  // If todos were retrieved from localStorage, update the todos array to it
  if (storedTodos !== null) {
    todos = storedTodos;
  }

  // Render todos to the DOM
  renderTodos();
}

function storeTodos() {
  // Stringify and set "todos" key in localStorage to todos array
  localStorage.setItem("todos", JSON.stringify(todos));
}

function saveTodos() {
  var element = event.target;
  
  if (element.matches("button") === true) {

    var index = element.getAttribute("data-index");
   
    var i = "todo-input"+ index;
    
    var userInput= document.getElementById(i).value;

    todos[index].todoText= userInput;
    


    

    storeTodos();
    renderTodos();
    
  }
};

=======


const date = moment()
var nhour = date.format("HH")


document.querySelector("#currentDay").innerHTML = moment().format('LLLL');
var todoform = document.querySelector("#todo-form")

var todoList = document.querySelector("#todo-list");

var todos = [
  {
    hour: 9,
    todoText: "1"
  },
  {
    hour: 10,
    todoText: ""
  },
  {
    hour: 11,
    todoText: ""
  },
  {
    hour: 12,
    todoText: ""
  },
  {
    hour: 13,
    todoText: ""
  },
  {
    hour: 14,
    todoText: ""
  },
  {
    hour: 15,
    todoText: ""
  },
  {
    hour: 16,
    todoText: ""
  },
  {
    hour: 17,
    todoText: ""
  },
]



init()

function renderTodos() {
  
  todoform.innerHTML = "";

  for (var i = 0; i < todos.length; i++) {

    var todoIndex = todos[i].hour;
    
    
    var tr = document.createElement("tr");
    tr.setAttribute("id", "todo-list" + todoIndex);
    var n = tr.getAttribute("id");



    var th = document.createElement("th");
    th.setAttribute("id", "hourIndex");
    th.setAttribute("data-index", i);
    th.setAttribute("style", "font-size:30px");
    th.setAttribute("value", todoIndex);
    th.textContent = todoIndex + ":00";
    var meIndex = th.getAttribute("data-index");


    var td = document.createElement("td");

    var textArea = document.createElement("textarea");
    textArea.setAttribute("placeholder", "What needs to be done?");
    textArea.setAttribute("id", "todo-input"+ i)
    textArea.textContent = todos[i].todoText;
    


    var button = document.createElement("button");
    button.setAttribute("class", "btn btn-primary btn-lg");
    button.setAttribute("id", "saveBtn");
    button.setAttribute("data-index", i);
    
    button.setAttribute("onclick", "saveTodos()");
    button.textContent = "Save";

    var td2 = document.createElement("td");

    document.querySelector("#todo-form").appendChild(tr);
    tr.appendChild(th);
    td.appendChild(textArea);
    tr.appendChild(td);
    td2.appendChild(button);
    tr.appendChild(td2);

    checkIfMatch(n, todoIndex);
  }
  
}

//check time
function checkIfMatch(n, todoIndex) {

  nhour= parseInt(nhour);

  if (nhour === todoIndex) {

    document.getElementById(n).setAttribute("Class", "present");

  } else if (nhour < todoIndex) {
    document.getElementById(n).setAttribute("Class", "future");
    
  } else {
    document.getElementById(n).setAttribute("Class", "past");

  }
}

function init() {
  // Get stored todos from localStorage
  // Parsing the JSON string to an object
  var storedTodos = JSON.parse(localStorage.getItem("todos"));

  // If todos were retrieved from localStorage, update the todos array to it
  if (storedTodos !== null) {
    todos = storedTodos;
  }

  // Render todos to the DOM
  renderTodos();
}

function storeTodos() {
  // Stringify and set "todos" key in localStorage to todos array
  localStorage.setItem("todos", JSON.stringify(todos));
}

function saveTodos() {
  var element = event.target;
  
  if (element.matches("button") === true) {

    var index = element.getAttribute("data-index");
   
    var i = "todo-input"+ index;
    
    var userInput= document.getElementById(i).value;

    todos[index].todoText= userInput;
    


    

    storeTodos();
    renderTodos();
    
  }
};


>>>>>>> 476d8a0d68e4168d398e6a59f24b17cfa936d950
