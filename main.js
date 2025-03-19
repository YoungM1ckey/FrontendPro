const buttonForChangeImg = document.querySelector('#buttonForChangeImg');
const inputForChangeImg = document.querySelector('#imageChange');


buttonForChangeImg.addEventListener('click', e => {
    const randomNumber = Math.floor(Math.random() * 9) + 1;

    inputForChangeImg.setAttribute('src', `./image/${randomNumber}.jpg`);
})