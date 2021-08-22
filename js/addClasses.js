var classes = {};

window.onload = (event) => {
    classes = JSON.parse(window.localStorage.getItem("classes"));
    if (classes == null) {
        classes = {};
    }
};


function addClass() {
    var className = document.getElementById("className").value;
    var schoologyLink = document.getElementById("schoologyLink").value;
    classes[className] = schoologyLink;
    saveClasses();
}

function saveClasses() {
    window.localStorage.setItem("classes", JSON.stringify(classes));
}

function renderClasses()
{
    // show a list of all classes
}