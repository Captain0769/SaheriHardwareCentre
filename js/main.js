/**
 * Saheri Hardware Centre - Main JavaScript
 * Mobile Menu, Form Validation, and Interactivity
 */

// ========== Wait for DOM to be fully loaded ==========
document.addEventListener('DOMContentLoaded', function() {

  // ========== Mobile Menu Toggle ==========
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');

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
  }

  // ========== Smooth Scrolling Fallback ==========
  // For browsers that don't support CSS scroll-behavior
  const allLinks = document.querySelectorAll('a[href^="#"]');

  allLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Check if smooth scroll is not supported
        if (!('scrollBehavior' in document.documentElement.style)) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
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
  const phoneRegex = /\d{10,}/; // At least 10 digits

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
    // Remove non-digit characters for validation
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

  // Validate on blur (when user leaves field)
  if (nameInput) nameInput.addEventListener('blur', validateName);
  if (emailInput) emailInput.addEventListener('blur', validateEmail);
  if (phoneInput) phoneInput.addEventListener('blur', validatePhone);
  if (messageInput) messageInput.addEventListener('blur', validateMessage);

  // Form submission
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent actual form submission

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
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';

        // Simulate sending delay (1.5 seconds)
        setTimeout(function() {
          // Show success message
          successMessage.classList.add('show');

          // Reset button
          submitBtn.disabled = false;
          submitBtn.classList.remove('loading');
          submitBtn.textContent = originalText;

          // Clear form
          form.reset();

          // Hide success message after 5 seconds
          setTimeout(function() {
            successMessage.classList.remove('show');
          }, 5000);
        }, 1500);
      }
    });
  }

  // ========== Sticky Navigation Shadow (Optional Enhancement) ==========
  const navbar = document.querySelector('.navbar');

  if (navbar) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)';
      } else {
        navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
      }
    });
  }

});
