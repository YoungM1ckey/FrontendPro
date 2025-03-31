const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slider = document.querySelector('.slider');
const dotsContainer = document.querySelector('.dots-container');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

slides.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
    });
    dotsContainer.appendChild(dot);
});

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    prevButton.classList.toggle('hidden', currentIndex === 0);
    nextButton.classList.toggle('hidden', currentIndex === slides.length - 1);
    document.querySelectorAll('.dots-container span').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});
nextButton.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateSlider();
    }
});