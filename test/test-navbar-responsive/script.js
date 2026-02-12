const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Optional: tutup menu saat layar diperbesar
window.addEventListener("resize", () => {
  if (window.innerWidth > 315) {
    // navMenu.classList.remove("active");
    navMenu.classList.remove("active");
  }
});
