const social = document.querySelector(".social");
const share = document.querySelector(".share-btn");

const icons = document.querySelectorAll(".social-icons div");

const rootStyles = window.getComputedStyle(document.documentElement);
const bgColor = rootStyles.getPropertyValue("--par-clr");
const iconColor = rootStyles.getPropertyValue("--bg-clr");

share.addEventListener("click", showOrHide);
share.addEventListener("mouseover", (event) => {
    share.style.boxShadow = "0px 0px 20px -7px black";
});
share.addEventListener("mouseout", (event) => {
    share.style.boxShadow = "unset";
});

for(const icon of icons) {
    icon.addEventListener("mouseover", (event) => {
        icon.style.filter = "invert(47%) sepia(41%) saturate(233%) hue-rotate(174deg) brightness(95%) contrast(90%)";
    });
    icon.addEventListener("mouseout", (event) => {
        icon.style.filter = "unset";
    });
}

function showOrHide() {
    if(social.style.visibility === "hidden") {
        social.style.visibility = "visible";
        social.style.opacity = "1";
        share.style.backgroundColor = bgColor;
        share.children[0].style.filter = "brightness(0) invert(1)";
    } else {
        social.style.visibility = "hidden";
        social.style.opacity = "0";
        share.style.backgroundColor = iconColor;
        share.children[0].style.filter = "unset";
    }
}