// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Initialize hero carousel with custom settings
  const heroCarousel = document.getElementById("heroCarousel");
  if (heroCarousel) {
    const bsCarousel = new bootstrap.Carousel(heroCarousel, {
      interval: 5000, // Auto-slide every 5 seconds
      wrap: true,
      touch: true,
      keyboard: true,
    });
  }

  // Initialize services carousel with custom settings
  const servicesCarousel = document.getElementById("servicesCarousel");
  if (servicesCarousel) {
    const bsServicesCarousel = new bootstrap.Carousel(servicesCarousel, {
      interval: 6000, // Auto-slide every 6 seconds
      wrap: true,
      touch: true,
      keyboard: true,
    });

    // Left arrow functionality
    const leftArrow = document.querySelector(".left-arrow");
    if (leftArrow) {
      leftArrow.addEventListener("click", function () {
        bsServicesCarousel.prev();
      });
    }

    // Right arrow functionality
    const rightArrow = document.querySelector(".right-arrow");
    if (rightArrow) {
      rightArrow.addEventListener("click", function () {
        bsServicesCarousel.next();
      });
    }

    // Add hover effects for arrows
    if (leftArrow) {
      leftArrow.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-50%) scale(1.1)";
        this.style.transition = "transform 0.3s ease";
      });
      leftArrow.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(-50%) scale(1)";
      });
    }

    if (rightArrow) {
      rightArrow.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-50%) scale(1.1)";
        this.style.transition = "transform 0.3s ease";
      });
      rightArrow.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(-50%) scale(1)";
      });
    }
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

  // Add click handlers for service buttons
  const serviceButtons = document.querySelectorAll(".service-btn");
  serviceButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const buttonText = this.textContent.trim();
      console.log(`Service button clicked: ${buttonText}`);
      // You can add service-specific logic here
    });
  });

  // Lecture Toggle Buttons Functionality
  const lectureToggleButtons = document.querySelectorAll(".lecture-toggle-btn");
  if (lectureToggleButtons.length > 0) {
    lectureToggleButtons.forEach((button) => {
      button.addEventListener("click", function () {
        // Remove active class from all buttons
        lectureToggleButtons.forEach((btn) => btn.classList.remove("active"));

        // Add active class to clicked button
        this.classList.add("active");

        // Optional: Add content switching logic here
        const buttonText = this.textContent.trim();
        console.log(`Lecture tab switched to: ${buttonText}`);

        // You can add content switching logic here based on the active button
        // For example, show/hide different content sections
      });
    });
  }
});
