document.documentElement.classList.add('reveal-ready');

const riseObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      riseObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

document.querySelectorAll('[data-rise]').forEach((item) => riseObserver.observe(item));

const diagnostic = document.querySelector('.diagnostic-object');

if (diagnostic && window.matchMedia('(pointer: fine)').matches) {
  diagnostic.addEventListener('mousemove', (event) => {
    const rect = diagnostic.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    diagnostic.style.setProperty('--tilt-x', `${x * 10}deg`);
    diagnostic.style.setProperty('--tilt-y', `${y * -8}deg`);
  });
}
