new Swiper('.case-swiper', {

    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    
    pagination: false,

    navigation: {
        nextEl: '.case-button-next',
        prevEl: '.case-button-prev',
    },

    breakpoints: {
        1024: { slidesPerView: 3, spaceBetween: 20 },
        768:  { slidesPerView: 2, spaceBetween: 16 },
        480:  { slidesPerView: 1, spaceBetween: 12 }
    }

});