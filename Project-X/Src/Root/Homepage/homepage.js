/* Sticky Navbar */
window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

/* Image Slider */
let slideIndex = 1;
showSlides(slideIndex);

// Next/Previous Buttons
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail Image Controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("about-img");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}