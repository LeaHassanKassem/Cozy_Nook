document.addEventListener("DOMContentLoaded", function () {
    // Product redirection logic
    const products = document.querySelectorAll(".product");
  
    products.forEach(product => {
      product.addEventListener("click", function () {
        let productName = product.querySelector("h3").innerText.toLowerCase().replace(" ", "-");
        product.classList.add("bounce-effect");
  
        setTimeout(() => {
          window.location.href = `gallery.html#${productName}`;
        }, 400);
      });
    });
  
    // Testimonial slider logic
    let currentSlide = 0;
    const slides = document.querySelectorAll('.testimonial');
    const track = document.querySelector('.testimonial-track');
  
    function updateSlidePosition() {
      track.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  
    window.nextSlide = function () {
      if (currentSlide < slides.length - 1) {
        currentSlide++;
        updateSlidePosition();
      }
    };
  
    window.prevSlide = function () {
      if (currentSlide > 0) {
        currentSlide--;
        updateSlidePosition();
      }
    };
    const toggleBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show-nav");
});
  });