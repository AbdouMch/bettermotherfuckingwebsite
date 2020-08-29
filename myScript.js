var modal = document.getElementById("modal");

var closeModal = document.getElementById("close_modal");

var modalText = document.getElementById("modal_text");

//countdown from n seconds
function countFrom(start, timerId){

    var seconds = start-1;

    var x = setInterval(function() {
        console.log(seconds);
        document.getElementById(timerId).innerHTML = seconds + " sec";
        seconds = seconds - 1;

        //If the count down is finished activate closing button
        if (seconds < 0) {
            clearInterval(x);
            closeModal.style.backgroundColor = "#df4a16";
            closeModal.style.color = "#000";
            document.getElementById(timerId).innerHTML = "FERMER";
            // When the user clicks on closing button, close the modal
            closeModal.onclick = function () {
            modal.style.display = "none";
            }
        }
    }, 1000);

}

//countdown for closing modal after 10 sec

// window.onload = function () {
//     setTimeout(function () {
//         modal.style.display = "none";
//     }, 10000);
// }

// Countdown fom 10 sec to give permission to close modal

countFrom(10,"timer");