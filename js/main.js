/**
 * SAHERI HARDWARE CENTRE - ENHANCED JAVASCRIPT
 * Modern interactions, animations, and user experience
 */

// ========== Wait for DOM to be fully loaded ==========
document.addEventListener('DOMContentLoaded', function() {

  // ========== Mobile Menu Toggle ==========
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
  const navbar = document.getElementById('navbar');

  if (hamburger && mobileMenu) {
    // Toggle menu on hamburger click
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('menu-open');
    });

    // Close menu when a link is clicked
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('menu-open');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('menu-open');
      }
    });
  }

  // ========== Smooth Scrolling & Active Nav Links ==========
  const navLinks = document.querySelectorAll('.nav-link, .mobile-menu a');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const offsetTop = targetElement.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });

          // Update active state
          navLinks.forEach(l => l.classList.remove('active'));
          this.classList.add('active');
        }
      }
    });
  });

  // ========== Navbar Scroll Effect ==========
  let lastScroll = 0;

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;

    // Add scrolled class for styling
    if (currentScroll > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  });

  // ========== Counter Animation for Hero Stats ==========
  const counters = document.querySelectorAll('.counter');
  let counterAnimated = false;

  function animateCounters() {
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60fps
      let current = 0;

      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.ceil(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      };

      updateCounter();
    });
  }

  // Trigger counter animation when hero section is in view
  const observerOptions = {
    threshold: 0.5
  };

  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !counterAnimated) {
        animateCounters();
        counterAnimated = true;
      }
    });
  }, observerOptions);

  const heroSection = document.querySelector('.hero');
  if (heroSection) {
    heroObserver.observe(heroSection);
  }

  // ========== Scroll Animation for Elements ==========
  const animatedElements = document.querySelectorAll('[data-aos]');

  const elementObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    elementObserver.observe(el);
  });

  // ========== Form Validation ==========
  const form = document.getElementById('contactForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const messageInput = document.getElementById('message');
  const submitBtn = document.querySelector('.submit-btn');
  const successMessage = document.getElementById('success-message');

  // Error message elements
  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const phoneError = document.getElementById('phone-error');
  const messageError = document.getElementById('message-error');

  // Validation regex patterns
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /\d{10,}/;

  // Validation functions
  function validateName() {
    const value = nameInput.value.trim();
    if (value.length < 2) {
      showError(nameError, 'Please enter your name (at least 2 characters)');
      return false;
    }
    hideError(nameError);
    return true;
  }

  function validateEmail() {
    const value = emailInput.value.trim();
    if (!emailRegex.test(value)) {
      showError(emailError, 'Please enter a valid email address');
      return false;
    }
    hideError(emailError);
    return true;
  }

  function validatePhone() {
    const value = phoneInput.value.trim();
    const digitsOnly = value.replace(/\D/g, '');
    if (digitsOnly.length < 10) {
      showError(phoneError, 'Please enter a valid phone number (at least 10 digits)');
      return false;
    }
    hideError(phoneError);
    return true;
  }

  function validateMessage() {
    const value = messageInput.value.trim();
    if (value.length < 10) {
      showError(messageError, 'Please enter a message (at least 10 characters)');
      return false;
    }
    hideError(messageError);
    return true;
  }

  function showError(errorElement, message) {
    if (errorElement) {
      errorElement.textContent = message;
      errorElement.classList.add('show');
    }
  }

  function hideError(errorElement) {
    if (errorElement) {
      errorElement.classList.remove('show');
      errorElement.textContent = '';
    }
  }

  // Validate on blur
  if (nameInput) nameInput.addEventListener('blur', validateName);
  if (emailInput) emailInput.addEventListener('blur', validateEmail);
  if (phoneInput) phoneInput.addEventListener('blur', validatePhone);
  if (messageInput) messageInput.addEventListener('blur', validateMessage);

  // Real-time validation on input (remove error when user starts typing)
  if (nameInput) nameInput.addEventListener('input', () => { if (nameInput.value.length >= 2) hideError(nameError); });
  if (emailInput) emailInput.addEventListener('input', () => { if (emailRegex.test(emailInput.value)) hideError(emailError); });
  if (phoneInput) phoneInput.addEventListener('input', () => { if (phoneInput.value.replace(/\D/g, '').length >= 10) hideError(phoneError); });
  if (messageInput) messageInput.addEventListener('input', () => { if (messageInput.value.length >= 10) hideError(messageError); });

  // Form submission
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      // Validate all fields
      const isNameValid = validateName();
      const isEmailValid = validateEmail();
      const isPhoneValid = validatePhone();
      const isMessageValid = validateMessage();

      // Check if all fields are valid
      if (isNameValid && isEmailValid && isPhoneValid && isMessageValid) {
        // Show loading state
        submitBtn.disabled = true;
        submitBtn.classList.add('loading');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>';

        // Simulate sending delay (1.5 seconds)
        setTimeout(function() {
          // Show success message
          successMessage.classList.add('show');

          // Reset button
          submitBtn.disabled = false;
          submitBtn.classList.remove('loading');
          submitBtn.innerHTML = originalText;

          // Clear form
          form.reset();

          // Smooth scroll to success message
          successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

          // Hide success message after 5 seconds
          setTimeout(function() {
            successMessage.classList.remove('show');
          }, 5000);
        }, 1500);
      } else {
        // Shake form on validation error
        form.style.animation = 'shake 0.5s';
        setTimeout(() => {
          form.style.animation = '';
        }, 500);
      }
    });
  }

  // ========== Back to Top Button ==========
  const backToTopBtn = document.getElementById('backToTop');

  if (backToTopBtn) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    });

    backToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ========== Parallax Effect for Hero Background ==========
  const heroBackground = document.querySelector('.hero-background');

  if (heroBackground) {
    window.addEventListener('scroll', function() {
      const scrolled = window.pageYOffset;
      const parallaxSpeed = 0.5;
      if (scrolled < window.innerHeight) {
        heroBackground.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
      }
    });
  }

  // ========== Add Entrance Animations ==========
  // Animate hero content on load
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    setTimeout(() => {
      heroContent.style.opacity = '1';
      heroContent.style.transform = 'translateY(0)';
    }, 100);
  }

  // ========== Smooth Product Card Hover Effects ==========
  const categoryCards = document.querySelectorAll('.category-card');

  categoryCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });

  // ========== Active Section Highlighting in Navigation ==========
  const sections = document.querySelectorAll('section[id]');

  function highlightActiveSection() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => link.classList.remove('active'));
        if (navLink) navLink.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', highlightActiveSection);

  // ========== Prevent Scroll Jump on Page Load ==========
  history.scrollRestoration = 'manual';

  // ========== Performance: Debounce Scroll Events ==========
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Optimized scroll handlers
  const optimizedScroll = debounce(function() {
    highlightActiveSection();
  }, 10);

  window.addEventListener('scroll', optimizedScroll);

  // ========== Add Loading State ==========
  window.addEventListener('load', function() {
    document.body.classList.add('loaded');
  });

  // ========== Console Greeting ==========
  console.log('%c👋 Welcome to Saheri Hardware Centre!', 'color: #FF6B35; font-size: 20px; font-weight: bold;');
  console.log('%c🔨 Building quality websites for quality hardware stores', 'color: #004E89; font-size: 14px;');

});

// ========== Add Shake Animation for Form Errors ==========
const shakeAnimation = `
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
}
`;

// Add shake animation to document
const style = document.createElement('style');
style.textContent = shakeAnimation;
document.head.appendChild(style);
