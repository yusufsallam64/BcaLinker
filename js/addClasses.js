var classes = {};
var classesContainer;
var activeClass;

window.onload = () => {
    classesContainer = document.getElementById("classesDiv");
    classes = JSON.parse(window.localStorage.getItem("classes"));
    if (classes == null) {
        classes = {};
    }
    renderClasses();
};

function addClass() {
    // Get class name and link from form
    var className = document.getElementById("className").value;
    var schoologyLink = document.getElementById("schoologyLink").value;
    // If its a valid link, save and re-render the classes
    if (schoologyLink.startsWith("https://bca.schoology.com/course/")) {
        classes[className] = schoologyLink;
        saveClasses();
        renderClasses();
    }
    else {
        alert("Invalid Schoology Link!");
    }

}

// Replace localStorage classes with empty JSON
function removeAll() {
    res = confirm("This action is irreversible!");
    window.localStorage.setItem("classes", res ? "{}" : window.localStorage.getItem("classes"));
    renderClasses();
}

// Paste the classes JSON to the clipboard
function exportClasses() {
    navigator.clipboard.writeText(window.localStorage.getItem("classes"));
    alert("Classes exported to clipboard");
}

// Get JSON input from user and set it to localStorage classes
function importClasses() {
    try {
        inpt = prompt("Insert classes JSON:");
        inpt = JSON.parse(inpt);
        window.localStorage.setItem("classes", JSON.stringify(inpt));
        renderClasses();
    }
    catch
    {
        alert("Valid classes not found");
    }
}

function saveClasses() {
    // Convert classes dict to a JSON string and save it to localStorage
    window.localStorage.setItem("classes", JSON.stringify(classes));
}

function renderClasses() {
    // Remove all existing class buttons
    while (classesContainer.firstChild) {
        classesContainer.removeChild(classesContainer.firstChild);
    }
    // Get classes from localStorage
    classes = JSON.parse(window.localStorage.getItem("classes"));
    if (classes == null) {
        classes = {};
    }
    // Loop through all classes
    for (var key in classes) {
        // If its a valid class
        if (key) {
            // Create a button for it and add event listener
            var c = document.createElement("input");
            c.type = "button";
            c.value = key;
            c.onclick = function () { showMenu(this.value); };
            classesContainer.appendChild(c);
        }
    }
}

// Show the context menu
function showMenu(key) {
    var menu = document.getElementById("contextMenu");
    // TODO: move menu to cursor position
    // TODO: add option to sort classes
    activeClass = key;
    menu.style.display = 'block';
}

// Hide the context menu
function exit() {
    document.getElementById("contextMenu").style.display = "none";
}

// Prompt user for new name and rename active class
function rename() {
    let newName = prompt("Enter the new name for " + activeClass);
    if (newName) {
        classes[newName] = classes[activeClass];
        delete classes[activeClass];
    } else {
        alert("Invalid name!");
    }
    exit();
    saveClasses();
    renderClasses();
}

// Prompt user for new link and change link for active class
function changeLink() {
    let newLink = prompt("Enter the new link for " + activeClass);
    if (newLink.startsWith("https://bca.schoology.com/course/")) {
        classes[activeClass] = newLink;
    } else {
        alert("Invalid link!");
    }
    exit();
    saveClasses();
    renderClasses();
}

// Remove the active class
function remove() {
    delete classes[activeClass];
    exit();
    saveClasses();
    renderClasses();
}