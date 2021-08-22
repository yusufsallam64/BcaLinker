// Handles website redirection and opening
function openWin(link) {
    window.open(link);
}

var clockUpdater = setInterval(myTimer, 1000);

function myTimer() {

    var d = new Date();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();
    var night = false;
    var day = new Array();
    day[0] = "Sunday";
    day[1] = "Monday";
    day[2] = "Tuesday";
    day[3] = "Wednesday";
    day[4] = "Thursday";
    day[5] = "Friday";
    day[6] = "Saturday";
    var day = day[d.getDay()]

    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var month = month[d.getMonth()];



    if (hours > 12) {
        hours = hours - 12;

        var night = true;
    }

    if (hours === 0) {
        hours = 12;
    }

    if (minutes < 10){
        var minutes = "0" + d.getMinutes();
    }

    if (seconds < 10){
        var seconds = "0" + d.getSeconds();
    }

    if (night){
        var t = day + ", " + month + " " + d.getDate() + " || " + hours + ":" + minutes + ":" + seconds + " p.m";
    } else {
        var t = day + ", " + month + " " + d.getDate() + " || " + hours + ":" + minutes + ":" + seconds + " a.m";
    }

    document.getElementById("clock").innerHTML = t;
}

function getImage(){
    var d = new Date();
    d = d.getDay();
    if(d === 3){
        document.getElementById("Images").src = "images/W_April_Schedule.png";
    } else {
        document.getElementById("Images").src = "images/M_T_TH_F_March_Schedule.png";
    }
}

