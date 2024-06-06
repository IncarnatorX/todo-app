const form = document.querySelector("#form");
const input = document.querySelector("#input");
const message = document.querySelector(".msg");
const clear = document.querySelector(".clear");
const post = document.querySelector("#posts");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

function formValidation() {
  if (input.value === "") {
    message.innerHTML = "Cannot add empty task. Please jot down something.";
  } else {
    let userInput = input.value;
    addTask(userInput);
    message.innerHTML = "";
    input.value = "";
    input.focus(); // refocus the input field
  }
}

function addTask(task) {
  let taskContainer = document.createElement("div");
  taskContainer.classList.add("task-container");

  let todoContent = document.createElement("p");
  todoContent.textContent = task;
  todoContent.setAttribute("contenteditable", "false");

  let iconsDiv = document.createElement("div");
  iconsDiv.classList.add("icons");

  let editIcon = document.createElement("i");
  editIcon.classList.add("fa-solid", "fa-pen-to-square", "icon");
  editIcon.addEventListener("click", () => {
    // input.value = task;
    // taskContainer.remove();
    todoContent.setAttribute("contenteditable", "true");
    todoContent.focus();
  });

  let trashIcon = document.createElement("i");
  trashIcon.classList.add("fa-solid", "fa-trash", "icon");
  trashIcon.addEventListener("click", () => {
    taskContainer.remove();
  });

  iconsDiv.append(editIcon, trashIcon);
  taskContainer.append(todoContent, iconsDiv);
  post.append(taskContainer);
}

clear.addEventListener("click", () => {
  let clearTasks = document.querySelectorAll(".task-container");
  clearTasks.forEach((el) => el.remove());
  input.focus();
});
