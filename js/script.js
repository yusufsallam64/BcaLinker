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


    if (hours > 12) {
        hours = hours - 12;
        var t = hours + ":" + d.getMinutes() + ":" + d.getSeconds();
    } else {
        var t = hours + ":" + d.getMinutes() + ":" + d.getSeconds();
    }


    document.getElementById("Clock").innerHTML = t;
}
