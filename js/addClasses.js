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
            var c = document.createElement("input")
            c.type = "button"
            c.value = key
            c.onclick = function () { showMenu(key) }
            classesContainer.appendChild(c);
        }
    }
}

// Show the context menu
function showMenu(key) {
    var menu = document.getElementById("contextMenu")
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
    classes[newName] = classes[activeClass];
    delete classes[activeClass];
    exit();
    saveClasses();
    renderClasses();
}

// Prompt user for new link and change link for active class
function changeLink() {
    classes[activeClass] = prompt("Enter the new link for " + activeClass);
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