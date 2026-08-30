(function () {
  'use strict';

  // ---------- Menu mobile ----------
  var toggle = document.querySelector('.menu-toggle');
  var mobileNav = document.getElementById('mobile-nav');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () {
      var isOpen = mobileNav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---------- Fade-in au scroll ----------
  var fadeEls = document.querySelectorAll('.fade-in');
  if ('IntersectionObserver' in window && fadeEls.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    fadeEls.forEach(function (el) { observer.observe(el); });
  } else {
    fadeEls.forEach(function (el) { el.classList.add('visible'); });
  }

  // ---------- FAQ accordion ----------
  document.querySelectorAll('.faq-question').forEach(function (q) {
    q.addEventListener('click', function () {
      var item = q.closest('.faq-item');
      var wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function (el) { el.classList.remove('open'); });
      if (!wasOpen) item.classList.add('open');
    });
  });

  // ---------- Formulaire de contact (validation + envoi via Formspree) ----------
  var form = document.getElementById('contact-form');
  if (form) {
    var successBox = document.getElementById('form-success');
    var errorBox = document.getElementById('form-error');

    var showFieldError = function (field, message) {
      var errorEl = form.querySelector('[data-error-for="' + field.name + '"]');
      field.classList.toggle('error', !!message);
      if (errorEl) errorEl.textContent = message || '';
    };

    var validators = {
      name: function (v) { return v.trim().length >= 2 ? '' : 'Veuillez indiquer votre nom complet.'; },
      phone: function (v) { return /^[0-9+\s().-]{7,20}$/.test(v.trim()) ? '' : 'Veuillez indiquer un numéro valide.'; },
      email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? '' : 'Veuillez indiquer un email valide.'; },
      service: function (v) { return v ? '' : 'Veuillez sélectionner un service.'; },
      message: function (v) { return v.trim().length >= 10 ? '' : 'Votre message doit contenir au moins 10 caractères.'; }
    };

    var validate = function () {
      var valid = true;
      Object.keys(validators).forEach(function (name) {
        var field = form.elements[name];
        if (!field) return;
        var error = validators[name](field.value);
        if (error) valid = false;
        showFieldError(field, error);
      });
      return valid;
    };

    Object.keys(validators).forEach(function (name) {
      var field = form.elements[name];
      if (!field) return;
      field.addEventListener('blur', function () {
        showFieldError(field, validators[name](field.value));
      });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      successBox.style.display = 'none';
      errorBox.style.display = 'none';

      if (!validate()) return;

      // Honeypot anti-spam : si ce champ caché est rempli, on abandonne silencieusement.
      if (form.elements['_gotcha'] && form.elements['_gotcha'].value) return;

      var submitBtn = form.querySelector('button[type="submit"]');
      var originalLabel = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Envoi en cours...';

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      })
        .then(function (response) {
          if (response.ok) {
            successBox.style.display = 'block';
            form.reset();
            successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
          } else {
            errorBox.style.display = 'block';
          }
        })
        .catch(function () {
          errorBox.style.display = 'block';
        })
        .finally(function () {
          submitBtn.disabled = false;
          submitBtn.textContent = originalLabel;
        });
    });
  }
})();
