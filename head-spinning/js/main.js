// TweenMax.to("#img", 10, { rotation: 360, ease: Linear.easeNone, repeat: -1 })

const errorBg = document.getElementById("errorBg");
errorBg.innerHTML = "ERROR ".repeat(600);

gsap.to(".error-bg", {
    opacity: 0.3,
    duration: 0.1,
    repeat: -1,
    yoyo: true,
    ease: "steps(1)"
});