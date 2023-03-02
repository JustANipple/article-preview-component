const shareBtn = document.querySelector(".share-btn");
const socialBox = document.querySelector(".share");
const avatarBox = document.querySelector(".avatar");

shareBtn.addEventListener("click", showOrHide);

function showOrHide() {
    if(socialBox.style.display === "none") {
        socialBox.style.display = "block";
    }
}