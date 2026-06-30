const contactPhone = '359884343110';

const setText = (selector, text) => {
  const node = document.querySelector(selector);
  if (node) node.textContent = text;
};

const setHtml = (selector, html) => {
  const node = document.querySelector(selector);
  if (node) node.innerHTML = html;
};

const setHref = (selector, href) => {
  const node = document.querySelector(selector);
  if (node) node.href = href;
};

const viberLink = `viber://chat?number=%2B${contactPhone}`;
const whatsappLink = `https://wa.me/${contactPhone}`;

setText('.brand span:last-child', 'Lumera Web Studio');
setText('.nav a:nth-child(1)', 'Услуги');
setText('.nav a:nth-child(2)', 'Пример');
setText('.nav a:nth-child(3)', 'Как работи');

setText('.hero .eyebrow', 'Бизнес страници за локални услуги');
setText('.hero h1', 'Бизнес страница, която превръща интереса в запитване.');
setText('.hero .lead', 'Lumera Web Studio прави бизнес страници, които помагат на клиентите да разберат, изберат и потърсят вашия бизнес. Подреждаме услугите, снимките, цените, картата и бутоните за контакт — така че човек бързо да разбере какво предлагате и да ви пише без да търси.');
setText('.hero .button-primary', 'Искам безплатен одит');
setHref('.hero .button-primary', viberLink);
setText('.hero .button-ghost', 'Виж пример');
setHref('.hero .button-ghost', '#case');
setText('.hero .note', 'Одитът е кратка диагностика: гледаме къде онлайн губите запитвания и какво има смисъл да се оправи първо.');

setText('.audit-top .mini-label', 'Онлайн одит');
setText('.audit-top h2', 'Първо впечатление');
setText('.status-dot', 'активно');
setHtml('.check-list', `
  <li><span>Услуги и оферта</span><b>яснота</b></li>
  <li><span>Снимки и доверие</span><b>важно</b></li>
  <li><span>Цени или ориентир</span><b>решение</b></li>
  <li><span>Контакт и карта</span><b>запитване</b></li>
  <li><span>Google профил</span><b>подкрепа</b></li>
`);

setHtml('.problem-strip', `
  <div class="strip-card">
    <span>Болката</span>
    <p>Хората питат едно и също, защото онлайн не е ясно какво точно предлагате.</p>
  </div>
  <div class="strip-card">
    <span>Рискът</span>
    <p>Конкурентът изглежда по-подреден и клиентът пише на него, преди да ви попита.</p>
  </div>
  <div class="strip-card">
    <span>Решението</span>
    <p>Подреждаме първото впечатление, за да не губите хора още преди да са ви писали.</p>
  </div>
`);

setText('#services .section-head .eyebrow', 'Услуги и цени');
setText('#services .section-head h2', 'Не продаваме “сайт”. Подреждаме пътя от интерес до запитване.');
setHtml('#services .section-head', `
  <p class="eyebrow">Услуги и цени</p>
  <h2>Не продаваме “сайт”. Подреждаме пътя от интерес до запитване.</h2>
  <p class="lead">Основният продукт е бизнес страница. Одитът е входът: гледаме какво липсва и предлагаме най-смислената следваща стъпка.</p>
`);

setHtml('.pricing-grid', `
  <article class="price-card reveal is-visible">
    <div class="price-head">
      <h3>Онлайн одит</h3>
      <strong><s>€10</s> €0</strong>
    </div>
    <p>Кратка диагностика: къде човек може да се откаже, преди да ви пише. Даваме конкретни препоръки, не общи приказки.</p>
  </article>
  <article class="price-card price-card--accent reveal is-visible">
    <div class="price-head">
      <h3>Бизнес страница</h3>
      <strong>от €99</strong>
    </div>
    <p>Подредена страница с услуги, снимки, цени или ориентир, карта и бутони за контакт. Цената зависи от обема, дизайна и нужните функции.</p>
  </article>
  <article class="price-card reveal is-visible">
    <div class="price-head">
      <h3>Страница + Google профил</h3>
      <strong>€150–300</strong>
    </div>
    <p>Бизнес страница плюс подреден Google профил: описание, снимки, услуги, линкове и QR за отзиви.</p>
  </article>
  <article class="price-card reveal is-visible">
    <div class="price-head">
      <h3>Google профил</h3>
      <strong>€30–50</strong>
    </div>
    <p>Самостоятелно подреждане на профила, ако сайтът още не е нужен: контакти, услуги, снимки, линкове и отзиви.</p>
  </article>
  <article class="price-card reveal is-visible">
    <div class="price-head">
      <h3>PDF / меню / QR</h3>
      <strong>€30–80</strong>
    </div>
    <p>Меню, ценова листа, QR за отзиви или кратък PDF, който може да пращате на клиенти.</p>
  </article>
`);

const workflow = document.querySelector('.workflow');
if (workflow) workflow.id = 'process';
setText('.workflow .section-head .eyebrow', 'Как работи');
setText('.workflow .section-head h2', 'Първо яснота. После страница.');
setHtml('.steps', `
  <div class="step reveal is-visible"><span>01</span><h3>Пращате ни бизнеса</h3><p>Име, град, линк към Google профил, Facebook или снимки. Нищо сложно.</p></div>
  <div class="step reveal is-visible"><span>02</span><h3>Правим одита</h3><p>Гледаме какво вижда клиентът и къде се губи доверие, яснота или контакт.</p></div>
  <div class="step reveal is-visible"><span>03</span><h3>Предлагаме следваща стъпка</h3><p>Бизнес страница, Google профил, QR, PDF меню или комбинация. Решението остава ваше.</p></div>
`);

setText('#case .eyebrow', 'Пример');
setText('#case h2', 'Реализиран сайт: Metrograd');
setText('#case .case-copy p:nth-of-type(2)', 'Едностраничен сайт за строителна фирма от Бургас. Целта е човек бързо да види услугите, снимки от работа и начин за контакт, без да търси информация в пет различни места.');

setHtml('.faq-section .section-head', `
  <p class="eyebrow">Често питат</p>
  <h2>Без тежки обещания и без агенционна мъгла.</h2>
`);
setHtml('.faq-grid', `
  <div class="faq-card reveal is-visible"><h3>Ще ми донесе ли това клиенти?</h3><p>Не обещаваме чудеса. Подреждаме пътя от “видях ви онлайн” до “пиша ви”, за да не губите запитвания от неясна информация.</p></div>
  <div class="faq-card reveal is-visible"><h3>Само сайтове ли правите?</h3><p>Фокусът сега е бизнес страници, но можем да помогнем и с Google профил, QR, PDF меню и други онлайн материали.</p></div>
  <div class="faq-card reveal is-visible"><h3>Кой стои зад Lumera?</h3><p>Lumera е малко web studio за ясни онлайн решения. Работим по конкретни задачи, без дълги процеси и празни презентации.</p></div>
`);

setText('#contact .eyebrow', 'Безплатен одит');
setText('#contact h2', 'Да видим къде губите запитвания онлайн.');
setText('#contact p:not(.eyebrow)', 'Пратете име на бизнеса и линк към Google профил, Facebook или сайт. Връщаме кратка диагностика и предложение какво има смисъл да се направи.');
setText('#contact .button-primary', 'Пиши във Viber');
setHref('#contact .button-primary', viberLink);
setText('#contact .button-ghost', 'Пиши в WhatsApp');
setHref('#contact .button-ghost', whatsappLink);

setText('.footer span:first-child', 'Lumera Web Studio');
setText('.footer span:last-child', 'Бизнес страници • Google профил • QR • PDF');

const contactLinks = document.querySelectorAll('a[href*="359000000000"]');
contactLinks.forEach((link) => {
  if (link.href.startsWith('viber:')) link.href = viberLink;
  if (link.href.includes('wa.me')) link.href = whatsappLink;
});

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
