var classes = {};
var classesContainer;

window.onload = (event) => {
    classesContainer = document.getElementById("classesDiv");
    classes = JSON.parse(window.localStorage.getItem("classes"));
    if (classes == null) {
        classes = {};
    }
    renderClasses();
};

function addClass() {
    var className = document.getElementById("className").value;
    var schoologyLink = document.getElementById("schoologyLink").value;
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
    window.localStorage.setItem("classes", JSON.stringify(classes));
}

function renderClasses() {
    while (classesContainer.firstChild) {
        classesContainer.removeChild(classesContainer.firstChild);
    }
    classes = JSON.parse(window.localStorage.getItem("classes"));
    if (classes == null) {
        classes = {};
    }
    for (var key in classes) {
        if (key) {
            var c = document.createElement("input")
            c.type = "button"
            c.value = key
            c.onclick = function () { removeClass(key) }
            classesContainer.appendChild(c);
        }
    }
}

function removeClass(className) {
    delete classes[className];
    saveClasses();
    renderClasses();
}