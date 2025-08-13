const inputBox = document.getElementById("input-box");
const listContainer = document.querySelector(".list-container"); // Changed to querySelector for class

function AddTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // This adds a delete icon (×)
        li.appendChild(span);
        saveData();
    } 
    inputBox.value = "";
}

// Add click event listener for the list items (for marking as complete and deleting)
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Function to save data to local storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Function to show tasks when page loads
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();