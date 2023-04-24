const form = document.querySelector("form");
const input = form.querySelector('input[type="text"]');
const ul = document.querySelector("ul");

// create
function createTodoItem(text) {
  const li = document.createElement("li");
  li.innerHTML = `
    <span>${text}</span>
    <button class="delete">Remove</button>
    <button class="done">Done</button>
  `;
  return li;
}

// add
function addTodoItem(event) {
  event.preventDefault();
  if (!input.value) return;
  const li = createTodoItem(input.value);
  ul.appendChild(li);
  input.value = "";
}

// delete
function deleteTodoItem(event) {
  const button = event.target;
  if (button.classList.contains("delete")) {
    const li = button.parentElement;
    ul.removeChild(li);
  }
}

// mark as done
function doneTodoItem(event) {
  const button = event.target;
  if (button.classList.contains("done")) {
    const li = button.parentElement;
    li.classList.toggle("done");
  }
}

// event listener
form.addEventListener("submit", addTodoItem);
ul.addEventListener("click", deleteTodoItem);
ul.addEventListener("click", doneTodoItem);
