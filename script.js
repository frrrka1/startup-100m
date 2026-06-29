const contactPhone = '359884343110';

const contactUrls = {
  viber: `viber://chat?number=%2B${contactPhone}`,
  whatsapp: `https://wa.me/${contactPhone}`,
};

document.querySelectorAll('[data-contact]').forEach((link) => {
  const channel = link.dataset.contact;
  if (contactUrls[channel]) {
    link.href = contactUrls[channel];
  }
});

const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

const scoreElement = document.querySelector('[data-score]');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (scoreElement && !reduceMotion) {
  const target = Number(scoreElement.dataset.score || scoreElement.textContent);
  let current = 41;

  const tick = () => {
    current += 1;
    scoreElement.textContent = current;

    if (current < target) {
      window.requestAnimationFrame(tick);
    }
  };

  setTimeout(() => window.requestAnimationFrame(tick), 450);
}

const scanner = document.querySelector('.scanner-card');

if (scanner && window.matchMedia('(pointer: fine)').matches && !reduceMotion) {
  scanner.addEventListener('mousemove', (event) => {
    const rect = scanner.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    scanner.style.transform = `rotateX(${y * -3.5}deg) rotateY(${x * 4.5}deg) translateY(-4px)`;
  });

  scanner.addEventListener('mouseleave', () => {
    scanner.style.transform = '';
  });
}
