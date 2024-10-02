    // JavaScript para mostrar/ocultar detalles de productos
    document.querySelectorAll('.toggle-details').forEach((toggle, index) => {
        toggle.addEventListener('click', () => {
            const details = document.getElementById(`details-${index + 1}`);
            if (details.style.display === 'none') {
                details.style.display = 'block';
                toggle.innerText = 'Ocultar Detalles';
            } else {
                details.style.display = 'none';
                toggle.innerText = 'Ver Detalles';
            }
        });
    });

    
   // Funcionalidad del carrusel
document.querySelectorAll('.carousel').forEach((carousel) => {
    let currentIndex = 0;
    const images = carousel.querySelector('.carousel-images');
    const totalImages = images.querySelectorAll('img').length;

    const updateCarousel = () => {
        const imageWidth = carousel.offsetWidth; // Usamos el ancho dinámico del carrusel
        images.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    };

    // Botón "Anterior"
    carousel.querySelector('.prev-btn').addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1;
        updateCarousel();
    });

    // Botón "Siguiente"
    carousel.querySelector('.next-btn').addEventListener('click', () => {
        currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
        updateCarousel();
    });

    // Ajuste automático al cambiar el tamaño de la ventana
    window.addEventListener('resize', updateCarousel);

    updateCarousel(); // Inicializa el carrusel al cargar
});



