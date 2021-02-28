// Handles website redirection and opening
function openWin(link) {
    window.open(link);
}

// $(document).ready(function(){
//
//     $("Clock")
//
// });



var clockUpdater = setInterval(myTimer, 1000);

function myTimer() {
    var d = new Date();
    var hours = d.getHours()
    var minutes = d.getMinutes()
    var seconds = d.getSeconds()
    var night = false;

    if (hours > 12) {
        hours = hours - 12;
        var night = true;
    }

    if (minutes < 10){
        var minutes = "0" + d.getMinutes();
    }

    if (seconds < 10){
        var seconds = "0" + d.getSeconds();
    }

    if (night){
        var t = hours + ":" + minutes + ":" + seconds + " p.m";
    } else {
        var t = hours + ":" + minutes + ":" + seconds + " a.m";
    }

    document.getElementById("Clock").innerHTML = t;
}
