const toggleButton = document.querySelector(".hamburger");
const navWrapper = document.querySelector('.nav-wrapper');

toggleButton.addEventListener("click", function () {
    navWrapper.classList.toggle('is-open');
    toggleButton.classList.toggle("active");
})