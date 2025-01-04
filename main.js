let currentIndex = 0;

function changeImage(direction) {
  const images = document.querySelectorAll('.carousel-item');
  const totalImages = images.length;

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalImages - 1;  // Ir al final si estamos en el principio
  } else if (currentIndex >= totalImages) {
    currentIndex = 0;  // Volver al principio si estamos al final
  }

  const carousel = document.querySelector('.carousel-images');
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}
