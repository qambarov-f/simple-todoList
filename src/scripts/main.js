document.addEventListener("DOMContentLoaded", () => {
  const formTag = document.querySelector(".formTag");
  const inpTag = document.querySelector(".inpTag");
  const todoList = document.querySelector(".todoList");

  formTag.addEventListener("submit", function (e) {
    e.preventDefault();
    const taskText = inpTag.value.trim();
    const todoItem = document.createElement("li");
    const check = document.createElement("input");
    check.classList.add("check");
    check.setAttribute("type", "checkbox");

    if (taskText !== "") {
      todoItem.textContent = taskText;
      todoItem.appendChild(check);

      const deleteButton = document.createElement("button");
      deleteButton.classList.add("delBtn");
      deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
      deleteButton.addEventListener("click", () => {
        todoList.removeChild(todoItem);
      });

      todoItem.appendChild(deleteButton);
      todoList.appendChild(todoItem);

      inpTag.value = "";
    }
    check.addEventListener("click", () => {
      todoItem.classList.toggle("checked");
    });
  });
});
