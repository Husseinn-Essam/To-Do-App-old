window.addEventListener("load", () => {
    const form = document.querySelector("#taskInput");
    const addTask = document.querySelector("add");
    const list = document.querySelector("#tasks");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const input = document.querySelector("#taskName").value;
        //check if input is empty
        if (!input) {
            alert("Please enter a task");
            return;
        }
        //creating task element
        const task = document.createElement("div");
        task.classList.add("task");
        //creating task content element
        const taskContent = document.createElement("div");
        taskContent.classList.add("content");
        //creating text element 
        const name = document.createElement("input");
        name.classList.add("text");
        name.value = input;
        name.setAttribute("readonly", "readonly")
        //adding actions element
        actions = document.createElement("div");
        actions.classList.add("actions");
        //add edit and delete elements
        edit = document.createElement("button");
        edit.classList.add("edit");
        edit.innerText = "Edit";
        delet = document.createElement("button");
        delet.classList.add("delete");
        delet.innerText = "Delete";
        //appending 
        list.appendChild(task);
        task.appendChild(taskContent);
        taskContent.appendChild(name);
        task.appendChild(actions)
        actions.appendChild(edit);
        actions.appendChild(delet);
        //Delete logic
        delet.addEventListener('click', () => {
            list.removeChild(task);

        })
        //Edit logic
        edit.addEventListener('click', () => {
            if (edit.innerText != "Save") {
                name.removeAttribute("readonly");
                name.focus();
                edit.innerText = "Save";
            }
            else {
                edit.innerText = "Edit";
                name.setAttribute("readonly", "readonly")
            }


        })

    })
})