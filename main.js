let currentIndex = 0;

function changeImage(direction) {
  const images = document.querySelectorAll('.carousel-item');
  const totalImages = images.length;

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalImages - 1;
  } else if (currentIndex >= totalImages) {
    currentIndex = 0;
  }

  const carousel = document.querySelector('.carousel-images');
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}
