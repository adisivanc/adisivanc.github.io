var currentIndex = 0;
function goToSlide(index) {
    const sliderContainer = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.slide');
    const slideWidth = slides[0].clientWidth;
    sliderContainer.style.transform = `translateX(-${slideWidth * index}px)`;
    currentIndex = index;
}

window.addEventListener('resize', () => {
    goToSlide(currentIndex);
})

function goToNextSlide() {
    const slides = document.querySelectorAll('.slide');
    if (currentIndex === slides.length - 1) {
        goToSlide(0);
    } else {
        goToSlide(currentIndex + 1);
    }
}

function goToPrevSlide() {
    const slides = document.querySelectorAll('.slide');
    if (currentIndex === 0) {
        goToSlide(slides.length - 1);
    } else {
        goToSlide(currentIndex - 1);
    }
}