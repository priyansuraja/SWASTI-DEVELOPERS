/* =====================
   CONTACT FORM SUBMISSION
===================== */
document.querySelector(".contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you! We will contact you soon.");
    this.reset();
  });
  
  
  /* =====================
     HERO SLIDER FUNCTIONALITY
  ===================== */
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;
  
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if(i === index) slide.classList.add('active');
    });
  }
  
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }
  
  // Auto slide every 5 seconds
  setInterval(nextSlide, 5000);
  
  
  /* =====================
     TESTIMONIALS CAROUSEL
  ===================== */
  const testimonials = document.querySelectorAll('.testimonial-list p');
  let currentTestimonial = 0;
  
  function showTestimonial(index) {
    testimonials.forEach((t, i) => {
      t.style.display = i === index ? 'block' : 'none';
    });
  }
  
  function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
  }
  
  // Initialize first testimonial
  showTestimonial(currentTestimonial);
  // Auto slide every 6 seconds
  setInterval(nextTestimonial, 6000);
  
  
  /* =====================
     SMOOTH SCROLL FOR NAV LINKS
  ===================== */
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetId);
      window.scrollTo({
        top: targetSection.offsetTop - 70,
        behavior: 'smooth'
      });
    });
  });
  
  
  /* =====================
     MOBILE MENU TOGGLE
  ===================== */
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav-links');
  
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
  