(function () {
  'use strict';

  const video = document.getElementById('hero-video');
  const form = document.getElementById('notify-form');
  const emailInput = document.getElementById('email');
  const formMessage = document.getElementById('form-message');

  if (video) {
    video.play().catch(function () {
      document.querySelector('.video-bg').style.background =
        'radial-gradient(ellipse at 30% 20%, rgba(99,102,241,0.15), transparent 60%), #000';
    });

    document.addEventListener('visibilitychange', function () {
      if (!document.hidden) video.play().catch(function () {});
    });
  }

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const email = emailInput.value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      formMessage.className = 'form-message';

      if (!email || !emailPattern.test(email)) {
        formMessage.textContent = 'Lütfen geçerli bir e-posta adresi girin.';
        formMessage.classList.add('error');
        emailInput.focus();
        return;
      }

      const emails = JSON.parse(localStorage.getItem('vetcron_notify') || '[]');
      if (!emails.includes(email)) {
        emails.push(email);
        localStorage.setItem('vetcron_notify', JSON.stringify(emails));
      }

      formMessage.textContent = 'Teşekkürler! Lansmanımızda sizi bilgilendireceğiz.';
      formMessage.classList.add('success');
      emailInput.value = '';
    });
  }
})();
