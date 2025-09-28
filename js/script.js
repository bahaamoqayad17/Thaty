// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Initialize carousel with custom settings
  const carousel = document.getElementById("heroCarousel");
  if (carousel) {
    const bsCarousel = new bootstrap.Carousel(carousel, {
      interval: 5000, // Auto-slide every 5 seconds
      wrap: true,
      touch: true,
      keyboard: true,
    });
  }

  // Smooth scroll for navigation links
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  // Add navbar background on scroll
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        navbar.style.backgroundColor = "rgba(161, 178, 60, 0.95)";
        navbar.style.backdropFilter = "blur(10px)";
        navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.15)";
      } else {
        navbar.style.backgroundColor = "#a1b23c";
        navbar.style.backdropFilter = "none";
        navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
      }
    });
  }

  // Add click handlers for CTA buttons
  const ctaButtons = document.querySelectorAll(".btn-hero");
  ctaButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();

      // Handle button actions
      const buttonText = this.textContent.trim();
      if (buttonText.includes("سجل الآن مجانا")) {
        console.log("Register button clicked");
        // You can add registration logic here
      } else if (buttonText.includes("تصفح جديدنا")) {
        console.log("Browse new content clicked");
        // You can add navigation logic here
      }
    });
  });
});
