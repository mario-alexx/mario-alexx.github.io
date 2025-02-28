function toggleMenu() {
    document.querySelector('.menu').classList.toggle('active');
}

// const slider = document.querySelector('slider');
// let position = 0;
// const itemWidth = slider.children[0].offsetWidth;

// function moveSlider() {
//     position -= itemWidth;
//     if (position < -itemWidth) {
//         position = 0;
//     }
//     slider.style.transform = `translateX(${position}px)`;
// }

// setInterval(moveSlider, 2000); // Cambia cada 2 segundos