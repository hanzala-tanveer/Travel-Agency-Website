let menu = document.querySelector(".menu");
let nav = document.querySelector("#nav");
let btns = document.querySelectorAll(".control-btn");
let video = document.querySelector(".video");

// events

menu.addEventListener("click", () => {
  nav.classList.toggle("active");
});

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let src = btn.getAttribute("data-src");
    video.src = src;
  });
});
