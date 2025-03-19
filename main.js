const buttonApplyColor = document.querySelector("#buttonApplyColor");
const colorPicker = document.querySelector("#colorPicker");
const textForChangeColor = document.querySelector("#textForChangeColor");

buttonApplyColor.addEventListener("click", () => {
    textForChangeColor.style.color = colorPicker.value;
});