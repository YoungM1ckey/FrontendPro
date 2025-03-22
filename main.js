const getLinkAddress = document.querySelector("#getLinkAddress");
const transitionToAddress = document.querySelector("#transitionToAddress");
let linkAddress = '';

getLinkAddress.addEventListener("click", (e) => {
    linkAddress = prompt('Please enter address');
})

transitionToAddress.addEventListener("click", (e) => {
    window.open(linkAddress);
})