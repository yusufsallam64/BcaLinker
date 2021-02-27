// Handles website redirection and opening
function openWin(link) {
    window.open(link);
}

// var dateTime = new Date()
// var date = dateTime.getFullYear() + '-' + (dateTime.getMonth() + 1) + '-' + dateTime.getDate();
// var time = dateTime.getHours() + ':' + dateTime.getMinutes() + ":" + dateTime.getSeconds();

// var interval    =   0;
// function start(){
//     setTimeout( function(){
//         ajax_function();
//         interval    =   60;
//         setInterval( function(){
//             ajax_function();
//         }, interval * 1000);
//     }, interval * 1000);
// }
//
// function ajax_function(){
//     $.ajax({
//         url: "../time.php",
//         context: document.body,
//         success: function(result){
//             $('.time').html(result);
//         }
//     });
// }
//
// $( window ).load(function(){
//     var time    =   new Date();
//     interval    =   60 - time.getSeconds();
//     if(interval==60)
//         interval    =   0;
//     start();
// });