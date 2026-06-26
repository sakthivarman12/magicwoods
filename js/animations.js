// ANIME.JS — hero entrance + scroll-triggered reveals
document.addEventListener('DOMContentLoaded', () => {
  if (typeof anime === 'undefined') return;

  // HERO ENTRANCE
  anime.timeline({ easing: 'easeOutExpo' })
    .add({ targets: '.hero-eye',   opacity: [0, 1], translateY: [20, 0], duration: 700 })
    .add({ targets: '.hero-title', opacity: [0, 1], translateY: [30, 0], duration: 800 }, '-=500')
    .add({ targets: '.hero-sub',   opacity: [0, 1], translateY: [20, 0], duration: 700 }, '-=500')
    .add({ targets: '.hero-cta',   opacity: [0, 1], translateY: [20, 0], duration: 700 }, '-=450')
    .add({ targets: '.hero-stats', opacity: [0, 1], translateY: [20, 0], duration: 700 }, '-=400');

  // SCROLL-TRIGGERED REVEALS
  const revealTargets = [
    { selector: '.section-eye, .section-title', stagger: 80 },
    { selector: '.pkg-card', stagger: 60 },
    { selector: '.gallery-cell', stagger: 60 },
    { selector: '.review-card', stagger: 80 },
    { selector: '.faq-item', stagger: 60 },
    { selector: '.complete-tab', stagger: 40 },
    { selector: '.layout-text-item', stagger: 50 },
  ];

  const animated = new WeakSet();

  function reveal(el, stagger) {
    if (animated.has(el)) return;
    animated.add(el);
    anime({
      targets: el,
      opacity: [0, 1],
      translateY: [24, 0],
      duration: 650,
      delay: stagger,
      easing: 'easeOutQuad',
    });
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const group = entry.target.parentElement
        ? Array.from(entry.target.parentElement.children).filter(c => c.matches(entry.target.dataset.match))
        : [entry.target];
      group.forEach((el, i) => reveal(el, i * Number(entry.target.dataset.stagger || 0)));
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.15 });

  function observeGroup(selector, stagger) {
    document.querySelectorAll(selector).forEach(el => {
      el.style.opacity = '0';
      el.dataset.match = selector;
      el.dataset.stagger = stagger;
      observer.observe(el);
    });
  }

  // Re-run after dynamic content (packages, reviews, faq, gallery) is rendered by script.js
  setTimeout(() => {
    revealTargets.forEach(t => observeGroup(t.selector, t.stagger));
  }, 50);
});
