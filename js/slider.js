let currentIndex = 0;

function changeSlide(direction) {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider > div');
    const navItems = document.querySelectorAll('.nav-navigation');

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    } else if (currentIndex >= slides.length) {
        currentIndex = 0;
    }

    slides.forEach((slide, index) => {
        slide.style.display = index === currentIndex ? 'block' : 'none';
    });

    navItems.forEach((item, index) => {
        if (index === currentIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

function jumpToSlide(index) {
    changeSlide(index - currentIndex);
}
