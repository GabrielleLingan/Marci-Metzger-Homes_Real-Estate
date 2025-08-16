let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let slideInterval;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
  currentSlide = index;
}

function startAutoSlide() {
  slideInterval = setInterval(() => {
    let next = (currentSlide + 1) % slides.length;
    showSlide(next);
  }, 3000);
}

function manualSlide(index) {
  showSlide(index);
  clearInterval(slideInterval); 
  startAutoSlide();           
}

startAutoSlide();