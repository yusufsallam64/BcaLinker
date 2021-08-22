const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var night = false;
var month = MONTHS[new Date().getMonth()];
var classesContainer;

window.onload = (event) => {
    classesContainer = document.getElementById("classesDiv");
    renderClasses();
    timer();
    getImage();
    setInterval(timer, 1000);
};

function renderClasses() {
    classes = JSON.parse(window.localStorage.getItem("classes"));
    for (var key in classes) {
        var c = document.createElement("input")
        c.type = "button"
        c.value = key
        c.onclick = function () { window.open(classes[key]); }
        classesContainer.appendChild(c);
    }
}

function timer() {

    var d = new Date();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();
    var day = DAYS[d.getDay()]

    if (hours > 12) {
        hours = hours - 12;
        var night = true;
    }

    if (hours === 0) {
        hours = 12;
    }

    if (minutes < 10) {
        var minutes = "0" + d.getMinutes();
    }

    if (seconds < 10) {
        var seconds = "0" + d.getSeconds();
    }

    var t = day + ", " + month + " " + d.getDate() + " || " + hours + ":" + minutes + ":" + seconds + (night ? " PM" : " AM");
    document.getElementById("clock").innerHTML = t;
}

function getImage() {
    var d = new Date();
    d = d.getDay();
    if (d === 3) {
        document.getElementById("images").src = "images/W_April_Schedule.png";
    } else {
        document.getElementById("images").src = "images/M_T_TH_F_March_Schedule.png";
    }
}
