//
// Header fix on the top viewport
window.onscroll = function() {myFunction()};
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("_sticky");
    } else {
        header.classList.remove("_sticky");
    }
}
//
