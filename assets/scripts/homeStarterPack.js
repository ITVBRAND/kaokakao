/*starter pack*/

document.addEventListener("DOMContentLoaded", () => {
    const section = document.querySelector(".start_pack-section");

    if (!section) {
        return;
    }

    const slides = Array.from(section.querySelectorAll(".start_pack-gallery__item"));
    const controls = Array.from(section.querySelectorAll(".start_pack-controller__btn"));

    if (!slides.length || !controls.length) {
        return;
    }

    const setActiveSlide = (index) => {
        slides.forEach((slide, slideIndex) => {
            slide.classList.toggle("active", slideIndex === index);
        });

        controls.forEach((button, buttonIndex) => {
            button.classList.toggle("active", buttonIndex === index);
            button.setAttribute("aria-pressed", String(buttonIndex === index));
        });
    };

    controls.forEach((button, index) => {
        button.addEventListener("click", () => {
            setActiveSlide(index);
        });
    });

    setActiveSlide(0);
});