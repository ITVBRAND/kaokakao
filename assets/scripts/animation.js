const fadeUpElements = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

fadeUpElements.forEach((element) => observer.observe(element));