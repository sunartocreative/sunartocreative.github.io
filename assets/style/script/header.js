const buttonImg = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".navbar__menu2");

buttonImg.addEventListener("click", () => {
    console.log("Di Tekan");
    navMenu.classList.toggle("active");
});


