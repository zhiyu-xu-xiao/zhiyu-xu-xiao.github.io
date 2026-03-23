/* ================================================================
   PERSONAL WEBSITE TEMPLATE – main.js
   ================================================================ */

(function () {
  'use strict';

  /* ── DOM references ─────────────────────────────────────────── */
  const navbar     = document.getElementById('navbar');
  const navToggle  = document.getElementById('navToggle');
  const navLinks   = document.getElementById('navLinks');
  const navAnchors = navLinks.querySelectorAll('a');
  const yearEl     = document.getElementById('year');
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  /* ── Current year ───────────────────────────────────────────── */
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ── Navbar: scroll class ───────────────────────────────────── */
  function handleScroll() {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    highlightNavLink();
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // run once on load

  /* ── Navbar: mobile toggle ──────────────────────────────────── */
  navToggle.addEventListener('click', function () {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
    navToggle.querySelector('i').className = isOpen
      ? 'fa-solid fa-xmark'
      : 'fa-solid fa-bars';
  });

  /* Close mobile menu when a link is clicked */
  navAnchors.forEach(function (anchor) {
    anchor.addEventListener('click', function () {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.querySelector('i').className = 'fa-solid fa-bars';
    });
  });

  /* ── Active nav link based on scroll position ───────────────── */
  const sections = document.querySelectorAll('section[id]');

  function highlightNavLink() {
    const scrollY = window.scrollY + 120; // offset for fixed navbar
    let current = '';

    sections.forEach(function (section) {
      if (section.offsetTop <= scrollY) {
        current = section.getAttribute('id');
      }
    });

    navAnchors.forEach(function (anchor) {
      anchor.classList.remove('active');
      if (anchor.getAttribute('href') === '#' + current) {
        anchor.classList.add('active');
      }
    });
  }

  /* ── Fade-in on scroll (Intersection Observer) ──────────────── */
  const fadeEls = document.querySelectorAll(
    '.skill-card, .project-card, .timeline-item, .about-grid, .contact-form'
  );

  fadeEls.forEach(function (el) {
    el.classList.add('fade-in');
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    fadeEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    /* Fallback: show everything immediately */
    fadeEls.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  /* ── Contact form: client-side validation ───────────────────── */
  function setFieldError(inputId, errorId, message) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    if (message) {
      input.classList.add('invalid');
      error.textContent = message;
    } else {
      input.classList.remove('invalid');
      error.textContent = '';
    }
  }

  function validateForm(name, email, message) {
    let valid = true;

    if (!name.trim()) {
      setFieldError('name', 'nameError', 'Please enter your name.');
      valid = false;
    } else {
      setFieldError('name', 'nameError', '');
    }

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
    if (!email.trim()) {
      setFieldError('email', 'emailError', 'Please enter your email address.');
      valid = false;
    } else if (!emailRegex.test(email)) {
      setFieldError('email', 'emailError', 'Please enter a valid email address.');
      valid = false;
    } else {
      setFieldError('email', 'emailError', '');
    }

    if (!message.trim()) {
      setFieldError('message', 'messageError', 'Please enter a message.');
      valid = false;
    } else {
      setFieldError('message', 'messageError', '');
    }

    return valid;
  }

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const nameVal    = document.getElementById('name').value;
      const emailVal   = document.getElementById('email').value;
      const messageVal = document.getElementById('message').value;

      if (!validateForm(nameVal, emailVal, messageVal)) return;

      /* ── Replace this block with your real form submission logic ──
         Options:
           • Formspree:  fetch('https://formspree.io/f/YOUR_ID', { method:'POST', … })
           • EmailJS:    emailjs.sendForm(…)
           • Your own API endpoint
      ──────────────────────────────────────────────────────────── */
      formStatus.textContent = 'Sending…';
      formStatus.className   = 'form-status';

      // Simulated async send – replace with real implementation
      setTimeout(function () {
        contactForm.reset();
        formStatus.textContent = '✓ Message sent! I\'ll get back to you soon.';
        formStatus.className   = 'form-status success';

        setTimeout(function () {
          formStatus.textContent = '';
          formStatus.className   = 'form-status';
        }, 6000);
      }, 1000);
    });

    /* Clear field errors on input */
    ['name', 'email', 'message'].forEach(function (id) {
      document.getElementById(id).addEventListener('input', function () {
        this.classList.remove('invalid');
        document.getElementById(id + 'Error').textContent = '';
      });
    });
  }

})();
