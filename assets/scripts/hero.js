var swiper = new Swiper(".hero-swiper", {

    loop: true,
    effect: "fade",

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".hero-pagination",
    },

});