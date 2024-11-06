// Carrusel de imágenes
const prevBtn = document.querySelector('.carousel__button--prev');
const nextBtn = document.querySelector('.carousel__button--next');
const carouselImages = document.querySelectorAll('.carousel__image');
let currentImageIndex = 0;

// Función para mostrar la imagen actual
function showImage(index) {
    carouselImages.forEach((img, i) => {
        img.style.display = (i === index) ? 'block' : 'none';
    });
}

// Evento para el botón "Anterior"
prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : carouselImages.length - 1;
    showImage(currentImageIndex);
});

// Evento para el botón "Siguiente"
nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex < carouselImages.length - 1) ? currentImageIndex + 1 : 0;
    showImage(currentImageIndex);
});

// Inicializar el carrusel mostrando la primera imagen
showImage(currentImageIndex);

// Carrusel de noticias
const newsItems = document.querySelector('.news__items');
const newsItem = document.querySelectorAll('.news__item');
const prevButton = document.querySelector('.news__button--prev');
const nextButton = document.querySelector('.news__button--next');
let currentIndex = 0;

function updateCarousel() {
    const offset = -currentIndex * 100;
    newsItems.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = Math.ceil(newsItem.length / 3) - 1;
    }
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    if (currentIndex < Math.ceil(newsItem.length / 3) - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
});



// Obtener los modales
const modalJoin = document.getElementById('modal-join');
const modalDonate = document.getElementById('modal-donate');

// Obtener los botones que abren los modales
const btnJoin = document.getElementById('ctaJoin');
const btnDonate = document.getElementById('ctaDonate');

// Obtener el botón que cierra los modales
const spanJoin = document.getElementById('close-join');
const spanDonate = document.getElementById('close-donate');

// Cuando el usuario hace clic en el botón, abre el modal
btnJoin.onclick = function() {
    modalJoin.style.display = "block";
}
btnDonate.onclick = function() {
    modalDonate.style.display = "block";
}


// Cuando el usuario hace clic en la X, cierra el modal
spanJoin.onclick = function() {
    modalJoin.style.display = "none";
}
spanDonate.onclick = function() {
    modalDonate.style.display = "none";
}


// Cuando el usuario hace clic fuera del modal, cierra el modal
window.onclick = function(event) {
    if (event.target == modalJoin) {
        modalJoin.style.display = "none";
    } else if (event.target == modalDonate) {
        modalDonate.style.display = "none";
    }
}


//Menu Lateral
document.querySelector('.header__hamburger').addEventListener('click', () => {
    document.getElementById('sideMenu').classList.add('open');
});

function closeMenu() {
    document.getElementById('sideMenu').classList.remove('open');
}

const fixedFooter = document.getElementById("fixedFooter");
const buttonConfig = document.getElementById("buttonConfig");
const headerCta = buttonConfig.parentNode;
const buttonUp = document.getElementById("buttonUp");
const body = document.body;

function moveButtons(){
    if (window.innerWidth > 768){
        headerCta.insertBefore(btnJoin, buttonConfig);
        headerCta.insertBefore(btnDonate, buttonConfig);
        body.appendChild(buttonUp);
    }
    else{
        fixedFooter.appendChild(btnJoin);
        fixedFooter.appendChild(btnDonate);
        fixedFooter.appendChild(buttonUp);
    }
}
moveButtons()
window.onresize = moveButtons;