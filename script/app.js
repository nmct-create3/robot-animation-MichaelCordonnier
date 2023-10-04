let tl = gsap.timeline({
  defaults: {
    duration: 1,
    ease: "power1.inOut",
  },
  repeat: -1,
  yoyo: true,
});

tl.set("#shadow", {
  transformOrigin: "50% 100%",
});

tl.fromTo(
  "#Robot",
  {
    y: 2.5,
  },
  {
    y: -5,
  }
).to(
  "#Shadow",
  {
    scale: 0.75,
  },
  "<"
);

document.querySelector('#btnSlow').addEventListener('click', () => {
    tl.timeScale(0.1)
})

document.querySelector("#btnNormal").onclick = () => tl.timeScale(1);
document.querySelector("#btnFast").onclick = () => tl.timeScale(5);

document.querySelector(".jspause").addEventListener("click", () => {
  tl.pause();
});
