const buttons = document.querySelector('#buttons');

buttons.addEventListener('click', (e) => {
    alert(`You click to "${e.target.textContent}"`);
})