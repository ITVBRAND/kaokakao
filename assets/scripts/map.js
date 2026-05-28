const main = document.querySelector("main");
const baseLayer = ".map__img--base";
const overlayLayer = ".map__img--overlay";

gsap.set("main", { perspective: 650 });

const outerRX = gsap.quickTo(".map__picture", "rotationX", { ease: "power3" });
const outerRY = gsap.quickTo(".map__picture", "rotationY", { ease: "power3" });
const baseX = gsap.quickTo(baseLayer, "x", { ease: "power3" });
const baseY = gsap.quickTo(baseLayer, "y", { ease: "power3" });
const overlayX = gsap.quickTo(overlayLayer, "x", { ease: "power3" });
const overlayY = gsap.quickTo(overlayLayer, "y", { ease: "power3" });

main.addEventListener("pointermove", (e) => {
    outerRX(gsap.utils.interpolate(15, -15, e.y / window.innerHeight));
    outerRY(gsap.utils.interpolate(-15, 15, e.x / window.innerWidth));
    baseX(gsap.utils.interpolate(-18, 18, e.x / window.innerWidth));
    baseY(gsap.utils.interpolate(-18, 18, e.y / window.innerHeight));
    overlayX(gsap.utils.interpolate(-34, 34, e.x / window.innerWidth));
    overlayY(gsap.utils.interpolate(-34, 34, e.y / window.innerHeight));
});

main.addEventListener("pointerleave", (e) => {
    outerRX(0);
    outerRY(0);
    baseX(0);
    baseY(0);
    overlayX(0);
    overlayY(0);
});