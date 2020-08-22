var win = document.getElementById("popUp");

var closeWin = document.getElementById("close_popUp");

var winText = document.getElementById("popUp_text");


window.onload = function () {
    setTimeout(function () {
        win.style.display = "none";
    }, 10000);
}

// When the user clicks on <span> (x), close the modal
closeWin.onclick = function () {
    win.style.display = "none";

}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == win) {
        win.style.display = "none";
    }
}
