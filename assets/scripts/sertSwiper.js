new Swiper('.sert-swiper', {
    slidesPerView: 4,          // 4 слайда на ПК
    spaceBetween: 20,
    loop: true,
    
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    pagination: false,         // пагинации нет
    navigation: {
        nextEl: '.sert-button-next',
        prevEl: '.sert-button-prev',
    },
    breakpoints: {
        1024: { slidesPerView: 4, spaceBetween: 20 },
        768:  { slidesPerView: 3, spaceBetween: 16 },
        480:  { slidesPerView: 2, spaceBetween: 12 },
        0:    { slidesPerView: 1, spaceBetween: 10 }
    }
});