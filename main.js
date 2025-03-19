const buttonApplyColor = document.querySelector("#buttonApplyColor");
const textForChangeColor = document.querySelector("#textForChangeColor");
const colorPicker = document.querySelector("#colorPicker");

let originalColor = window.getComputedStyle(textForChangeColor).color;

buttonApplyColor.addEventListener("click", (e) => {
    const currentColor = window.getComputedStyle(textForChangeColor).color;

    if (currentColor === originalColor) {
        textForChangeColor.style.color = colorPicker.value;
    } else {
        textForChangeColor.style.color = originalColor;
    }
})