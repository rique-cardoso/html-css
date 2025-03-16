const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const cardWidth = document.querySelector('.card').offsetWidth + 20; // 200px + 20px de margem
let position = 0;

function moveCarousel() {
    carousel.style.transform = `translateX(${position}px)`;
}

nextBtn.addEventListener('click', () => {
    const maxPosition = -(cardWidth * (carousel.children.length - 1)); // Corrigido "lenfth" para "length"
    if (position > maxPosition) {
        position -= cardWidth;
        moveCarousel();
    }
});

prevBtn.addEventListener('click', () => {
    if (position < 0) {
        position += cardWidth;
        moveCarousel();
    }
});