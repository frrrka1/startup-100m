const revealItems = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

revealItems.forEach((item) => revealObserver.observe(item));

const auditCard = document.querySelector('.audit-card');

if (auditCard && window.matchMedia('(pointer: fine)').matches) {
  auditCard.addEventListener('mousemove', (event) => {
    const rect = auditCard.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    auditCard.style.transform = `translateY(-8px) rotateX(${y * -4}deg) rotateY(${x * 5}deg)`;
  });

  auditCard.addEventListener('mouseleave', () => {
    auditCard.style.transform = '';
  });
}
