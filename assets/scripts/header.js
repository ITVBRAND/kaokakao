/* burger menu */

const burgerBtn = document.querySelector('.header-burger__btn');
const burgerModal = document.querySelector('.burger-modal');
const burgerClose = document.querySelector('.burger-close');

const openBurger = () => {
    burgerModal.classList.add('burger-modal--open');
    document.body.style.overflow = 'hidden';
};

const closeBurger = () => {
    burgerModal.classList.remove('burger-modal--open');
    document.body.style.overflow = '';
};

burgerBtn?.addEventListener('click', openBurger);
burgerClose?.addEventListener('click', closeBurger);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && burgerModal?.classList.contains('burger-modal--open')) {
        closeBurger();
    }
});
