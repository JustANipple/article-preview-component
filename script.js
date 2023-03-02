const shareBtn = document.querySelector(".share-btn");
const socialBox = document.querySelector(".share");
const avatarBox = document.querySelector(".avatar");

const rootStyles = window.getComputedStyle(document.documentElement);
const shareClr = rootStyles.getPropertyValue("--par-clr");
const avatarClr = rootStyles.getPropertyValue("--bg-clr");

shareBtn.addEventListener("click", showOrHide);

function showOrHide() {
    if(socialBox.style.display === "none") {
        socialBox.style.display = "block";
        avatarBox.style.display = "none";
        shareBtn.style.backgroundColor = shareClr;
        shareBtn.children[0].style.filter = "brightness(0) invert(1)";
    } else {
        socialBox.style.display = "none";
        avatarBox.style.display = "flex";
        shareBtn.style.backgroundColor = avatarClr;
        shareBtn.children[0].style.filter = "unset";
    }
}