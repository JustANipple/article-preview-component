const shareBtn = document.querySelector(".share-btn");
const socialBox = document.querySelector(".share");
const avatarBox = document.querySelector(".avatar");

const rootStyles = window.getComputedStyle(document.documentElement);
const shareBtnBgClr = rootStyles.getPropertyValue("")

shareBtn.addEventListener("click", showOrHide);

function showOrHide() {
    if(socialBox.style.display === "none") {
        socialBox.style.display = "block";
        avatarBox.style.display = "none";
        shareBtn.style.backgroundColor = ""
    } else {
        socialBox.style.display = "none";
        avatarBox.style.display = "flex";
    }
}