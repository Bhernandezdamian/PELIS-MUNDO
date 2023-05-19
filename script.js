// Inicializar todos los contenedores de género
const genreSliders = document.querySelectorAll('.genre-slider');

genreSliders.forEach(slider => {
  const sliderContainer = slider.querySelector('.slider-container');
  const sliderWidth = sliderContainer.offsetWidth;
  const sliderContent = slider.querySelector('.slider');

  // Calcular el ancho total del contenido del slider
  let totalWidth = 0;
  sliderContent.querySelectorAll('.movie-card').forEach(card => {
    totalWidth += card.offsetWidth + parseInt(getComputedStyle(card).marginRight);
  });

  // Establecer el ancho del contenido del slider al ancho total
  sliderContent.style.width = `${totalWidth}px`;

  // Función para desplazar el slider al hacer clic en la flecha
  const scrollSlider = (scrollX) => {
    sliderContainer.scrollTo({
      top: 0,
      left: sliderContainer.scrollLeft + scrollX,
      behavior: 'smooth'
    });
  };

  // Agregar un evento de clic a la flecha izquierda
  slider.querySelector('.slider-prev').addEventListener('click', () => {
    scrollSlider(-sliderWidth);
  });

  // Agregar un evento de clic a la flecha derecha
  slider.querySelector('.slider-next').addEventListener('click', () => {
    scrollSlider(sliderWidth);
  });
});





