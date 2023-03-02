const social = document.querySelector(".social");
const share = document.querySelector(".share-btn");

const rootStyles = window.getComputedStyle(document.documentElement);
const bgColor = rootStyles.getPropertyValue("--par-clr");
const iconColor = rootStyles.getPropertyValue("--bg-clr");

share.addEventListener("click", showOrHide);

function showOrHide() {
    if(social.style.display === "none") {
        social.style.display = "flex";
        share.style.backgroundColor = bgColor;
        share.children[0].style.filter = "brightness(0) invert(1)";
    } else {
        social.style.display = "none";
        share.style.backgroundColor = iconColor;
        share.children[0].style.filter = "unset";
    }
}