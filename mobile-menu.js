const mobileOpenBtn = document.querySelector(".header-menu-btn");
const mobileCloseBtn = document.querySelector(".mobile-close-btn");
const mobileMenu = document.querySelector(".mobile-backdrop");

mobileOpenBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  document.body.style.overflow = "hidden";
});

mobileCloseBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  document.body.style.overflow = null;
});
