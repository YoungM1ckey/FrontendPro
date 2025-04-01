const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slider = document.querySelector('.slider');
const dotsContainer = document.querySelector('.dots-container');
let currentIndex = 0;

const images = [
    "team-1.png",
    "team-2.png",
    "team-3.png",
    "team-4.png"
];

images.forEach((src) => {
    const slide = document.createElement('div');
    slide.classList.add('slide');

    const img = document.createElement('img');
    img.src = src = `images/${src}`;
    img.alt = "Slide Image";

    slide.appendChild(img);
    slider.appendChild(slide);
});

images.forEach((_, index) => {
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
    nextButton.classList.toggle('hidden', currentIndex === images.length - 1);

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
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateSlider();
    }
});
