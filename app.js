//getting values
var todoList = document.getElementById("todoList"); //ul
var input = document.getElementById("userInput"); //input

// press enter key
input.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    addItem();
  }
});

function addItem() {
  if (input.value == "") {
    alert("Please enter any value");
  } else {
    var li = document.createElement("li");
    var liText = document.createTextNode(input.value);
    li.appendChild(liText);
    li.setAttribute("class", "myList");
    todoList.appendChild(li);

    //creating edit button
    var editBtn = document.createElement("button");
    editBtn.setAttribute("class", "edit_btn");
    editBtn.setAttribute("onclick", "editList(this)");

    editBtn.innerHTML = '<img src="edit.png"/>';
    li.appendChild(editBtn);

    //creating delete button
    var deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "delete_btn");
    deleteBtn.setAttribute("onclick", "deleteList(this)");

    deleteBtn.innerHTML = '<img src="delete.png"/>';
    li.appendChild(deleteBtn);

    //empty the input field
    input.value = "";
  }
}

function deleteList(btn) {
  btn.parentNode.remove();
}

function editList(btn) {
  var editedValue = prompt("Enter the edited value");
  btn.parentNode.firstChild.nodeValue = editedValue;
}

function deleteAll() {
  todoList.innerHTML = "";
}
