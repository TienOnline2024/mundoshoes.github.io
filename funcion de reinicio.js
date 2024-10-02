// JavaScript para el temporizador de la oferta
const offerCountdownTimer = () => {
    // Precios originales y precios de oferta de cada producto
    const products = {
        'brahama': {
            originalPrice: 220999, // Precio original
            offerPrice: 149900 // Precio de oferta
        },
        'samba': {
            originalPrice: 75000,
            offerPrice: 75000 // Sin descuento
        },
        'nike_running': {
            originalPrice: 75000,
            offerPrice: 75000 // Sin descuento
        },
        'alisia': {
            originalPrice: 48000,
            offerPrice: 48000 // Sin descuento
        },
        'puma': {
            originalPrice: 75000,
            offerPrice: 75000 // Sin descuento
        },
        'tropical': {
            originalPrice: 53000,
            offerPrice: 53000 // Sin descuento
        },
        'linse': {
            originalPrice: 75000,
            offerPrice: 75000 // Sin descuento
        },
        'tommy': {
            originalPrice: 55000,
            offerPrice: 55000 // Sin descuento
        }
    }; // Objeto para almacenar precios de productos

    let offerDuration = 2 * 60 * 60 * 1000; // 2 horas en milisegundos
    let endDate = new Date().getTime() + offerDuration; // Fecha de finalización de la oferta
    let timerInterval; // Para almacenar el intervalo

    // Función para actualizar los precios
    const updatePrices = () => {
        document.querySelectorAll('.price').forEach((priceElement) => {
            const productName = priceElement.getAttribute('data-product-name');

            // Obtenemos los detalles del producto desde el objeto
            const productDetails = products[productName];
            if (!productDetails) return;

            const { offerPrice } = productDetails;
            priceElement.innerText = `$${offerPrice}`.replace(/\B(?=(\d{3})+(?!\d))/g, "."); // Precio de oferta
            priceElement.previousElementSibling.style.textDecoration = 'line-through'; // Marcar el precio original
        });
    };

    // Función para actualizar el temporizador
    const updateTimer = () => {
        const now = new Date().getTime();
        const distance = endDate - now;

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("hours").innerText = String(hours).padStart(2, '0');
        document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
        document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');

        // Cuando el temporizador llega a cero, reiniciarlo inmediatamente
        if (distance < 0) {
            endDate = new Date().getTime() + offerDuration; // Reiniciar el tiempo
        }
    };

    // Función que maneja la ejecución del temporizador
    const countdownTimer = () => {
        timerInterval = setInterval(updateTimer, 1000);
        updateTimer(); // Ejecutar el temporizador inmediatamente
    };

    // Aplicar los precios con descuento al inicio
    updatePrices(); 
    countdownTimer(); // Iniciar el temporizador de cuenta regresiva
};

// Iniciar el temporizador de la oferta
offerCountdownTimer();

