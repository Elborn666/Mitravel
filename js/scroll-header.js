let header = document.querySelector(".header")

window.onscroll = function () {
    if (window.scrollY >= 100) {
        header.style.boxShadow = "0px 5px 20px 20px rgba(255, 255, 255, 0.9)"
    }
    else {
        header.style.background = "#fff"
        header.style.boxShadow = "0px 0px 0px 0px"
    }
}