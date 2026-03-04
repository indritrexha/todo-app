const taskInput =
document.getElementById("taskInput");
const addBtn =
document.getElementById("addBtn");
const taskList =
document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
  if (taskInput.value === "") return;

  const li = document.createElement("li");
  li.textContent = taskInput.value;

  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  const deleteBtn =
document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.onclick = () => li.remove();

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
}
