const buttonApplyColor = document.querySelector("#buttonApplyColor");
const textForChangeColor = document.querySelector("#textForChangeColor");

buttonApplyColor.addEventListener("click", (e) => {
    if (textForChangeColor.style.color === "purple") {
        textForChangeColor.style.color = "black";
        document.querySelector(".block").style.backgroundColor = "#fff";
    } else {
        textForChangeColor.style.color = "purple";
        document.querySelector(".block").style.backgroundColor = "#ccc";
    }
})