const nameCreateNewTask = document.querySelector("#nameCreateNewTask");
const btnCreateNewTask = document.querySelector("#btnCreateNewTask");
const tasks = document.querySelector("#tasks");

tasks.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
    }
})

btnCreateNewTask.addEventListener("click", () => {
    const name = nameCreateNewTask.value.trim();
    if (nameCreateNewTask.value.trim()) {
        const li = document.createElement("li");
        li.innerHTML = `${name} <button type="button">Delete</button>`;
        tasks.appendChild(li)
    }
    nameCreateNewTask.value = "";
})