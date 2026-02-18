/* ===============================
   DOM Selection
=================================*/

// Select input, button, and ordered list
const input = document.querySelector("#taskInput");
const button = document.querySelector("#addBtn");
const list = document.querySelector("#taskList");


/* ===============================
   Event Handling - Button Click
=================================*/

button.addEventListener("click", function () {

    // Get input value
    const taskText = input.value.trim();

    // Prevent empty input
    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    /* ===============================
       Dynamic Element Creation
    =================================*/

    // Create new list item
    const li = document.createElement("li");

    // Set text from input
    li.innerText = taskText;

    // Add class using setAttribute
    li.setAttribute("class", "task-item");

    // Apply inline styling
    li.style.color = "#0d47a1";
    li.style.fontWeight = "500";


    /* ===============================
       Remove Task When Clicked
    =================================*/

    li.addEventListener("click", function () {
        li.remove();
    });


    /* ===============================
       Append to Ordered List
    =================================*/

    list.append(li);


    /* ===============================
       Clear Input Field
    =================================*/

    input.value = "";
});
