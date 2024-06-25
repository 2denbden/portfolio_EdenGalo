// carousel code //

const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// slide positioning
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}
slides.forEach(setSlidePosition);

// next button functionality
// nextButton.addEventListener('click', e => {
//     const currentSlide = track.querySelector('.current-slide');
//     const nextSlide = currentSlide.nextElementSibling;
//     const amountToMove = nextSlide.style.left;
//     // console.log(amountToMove);
//     track.style.transform = 'translateX(-' + amountToMove + ')';

// });