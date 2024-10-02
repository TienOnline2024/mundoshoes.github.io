// Funcionalidad del carrusel
document.querySelectorAll('.carousel').forEach((carousel) => {
    let currentIndex = 0;
    const images = carousel.querySelector('.carousel-images');
    const totalImages = images.querySelectorAll('img').length;

    const updateCarousel = () => {
        images.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    carousel.querySelector('.prev-btn').addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1;
        updateCarousel();
    });

    carousel.querySelector('.next-btn').addEventListener('click', () => {
        currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
        updateCarousel();
    });
});
function moveCarousel(button, direction) {
    // Encontrar el contenedor del carrusel
    const carousel = button.parentElement.parentElement.querySelector('.carousel-images');
    
    // Obtener el índice actual y la cantidad total de imágenes
    const images = carousel.querySelectorAll('img');
    let currentIndex = parseInt(carousel.getAttribute('data-current-index')) || 0;
    
    // Calcular el nuevo índice
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1; // Ir a la última imagen si se retrocede más allá de la primera
    } else if (currentIndex >= images.length) {
        currentIndex = 0; // Volver a la primera imagen si se avanza más allá de la última
    }

    // Actualizar la posición del carrusel
    const offset = -currentIndex * 200; // Desplazamiento basado en el ancho de las imágenes (200px)
    carousel.style.transform = `translateX(${offset}px)`; // Cambiar a píxeles

    // Guardar el índice actual
    carousel.setAttribute('data-current-index', currentIndex);
}
