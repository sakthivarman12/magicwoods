// NAV TOGGLE
function switchNav(mode) {
  const btnPkg  = document.getElementById('btnPackages');
  const btnItems = document.getElementById('btnItems');
  const secPkg   = document.getElementById('subNavPackages');
  const secItems = document.getElementById('subNavItems');
  if (mode === 'packages') {
    btnPkg.classList.add('active');
    btnItems.classList.remove('active');
    secPkg.classList.remove('hidden');
    secItems.classList.add('hidden');
  } else {
    btnItems.classList.add('active');
    btnPkg.classList.remove('active');
    secItems.classList.remove('hidden');
    secPkg.classList.add('hidden');
  }
}

// IMAGE MAP
const IMG = {
  forest_zen:    'img/pkg-forest-zen.jpg',
  cloud_bay:     'img/pkg-cloud-bay.jpg',
  atlas_spirit:  'img/pkg-atlas-spirit.jpg',
  nomad_nest:    'img/pkg-nomad-nest.jpg',
  gentle_waves:  'img/pkg-gentle-waves.jpg',
  kyoto_ridge:   'img/pkg-kyoto-ridge.jpg',
  soho_mood:     'img/pkg-soho-mood.jpg',
  dune_breath:   'img/pkg-dune-breath.jpg',
  rocky_balance: 'img/pkg-rocky-balance.jpg',
  riviera_luxe:  'img/pkg-riviera-luxe.jpg',
  golden_rose:   'img/pkg-golden-rose.jpg',
  pure_form:     'img/pkg-pure-form.jpg',
  forest_villa:  'img/pkg-forest-zen-villa.jpg',
  alba_essence:  'img/pkg-alba-essence.jpg',
  vega_haven:    'img/pkg-vega-haven.jpg',
  noble_grain:   'img/pkg-noble-grain.jpg',
  alvin_kids:    'img/pkg-alvin-kids.jpg',
  toby_kids:     'img/pkg-toby-kids.jpg',
  twinkle_kids:  'img/pkg-twinkle-kids.jpg',
  boardwalk_off: 'img/pkg-boardwalk-office.jpg',
  folio_off:     'img/pkg-folio-office.jpg',
  coastal_out:   'img/pkg-coastal-outdoor.jpg',
  pacific_out:   'img/pkg-pacific-outdoor.jpg',
  marina_calm:   'img/pkg-marina-calm.jpg',
};

// TICKER
const tickerMsgs = [
  'Free home visit across India',
  '5000+ homes furnished',
  '10-day delivery guarantee',
  '0% EMI available on all packages',
  'Design consultation included',
  'Serving Mumbai · Delhi · Bangalore · Hyderabad · Pune · Chennai',
];
const tr = document.getElementById('ticker');
const full = [...tickerMsgs, ...tickerMsgs].map(m => `<span>${m}</span><span class="ticker-sep">—</span>`).join('');
tr.innerHTML = full + full;

// PACKAGES DATA
const packages = {
  'Studio': [
    { name: 'Forest Zen Studio',  price: '₹2,95,000', rating: '4.9 (38)', badge: 'BESTSELLER', style: 'forest_zen' },
    { name: 'Cloud Bay Studio',   price: '₹1,45,000', rating: '4.8 (54)', badge: 'BESTSELLER', style: 'cloud_bay' },
    { name: 'Nomad Nest Studio',  price: '₹1,10,000', rating: '4.8 (40)', style: 'nomad_nest' },
    { name: 'Kyoto Ridge Studio', price: '₹3,25,000', rating: '4.9 (21)', style: 'kyoto_ridge' },
  ],
  '1 BHK': [
    { name: 'Forest Zen 1BHK',   price: '₹4,30,000', rating: '4.9 (42)', badge: 'BESTSELLER', style: 'forest_zen' },
    { name: 'Cloud Bay 1BHK',    price: '₹2,10,000', rating: '4.8 (67)', badge: 'BESTSELLER', style: 'cloud_bay' },
    { name: 'Noble Grain 1BHK',  price: '₹2,40,000', rating: '4.8 (28)', style: 'noble_grain' },
    { name: 'Nomad Nest 1BHK',   price: '₹1,60,000', rating: '4.8 (51)', style: 'nomad_nest' },
  ],
  '2 BHK': [
    { name: 'Forest Zen 2BHK',    price: '₹6,20,000', rating: '4.9 (38)', badge: 'BESTSELLER', style: 'forest_zen' },
    { name: 'Atlas Spirit 2BHK',  price: '₹5,60,000', rating: '4.9 (22)', style: 'atlas_spirit' },
    { name: 'Gentle Waves 2BHK',  price: '₹4,25,000', rating: '4.8 (44)', style: 'gentle_waves' },
    { name: 'Dune Breath 2BHK',   price: '₹2,65,000', rating: '4.8 (31)', style: 'dune_breath' },
  ],
  '3 BHK': [
    { name: 'Forest Zen 3BHK',    price: '₹7,00,000',  rating: '4.9 (29)', badge: 'BESTSELLER', style: 'forest_villa' },
    { name: 'Kyoto Ridge 3BHK',   price: '₹6,45,000',  rating: '4.9 (18)', style: 'kyoto_ridge' },
    { name: 'Rocky Balance 3BHK', price: '₹8,60,000',  rating: '5.0 (11)', style: 'rocky_balance' },
    { name: 'Golden Rose 3BHK',   price: '₹7,80,000',  rating: '4.9 (14)', style: 'golden_rose' },
  ],
  'Villa': [
    { name: 'Forest Zen Villa',    price: '₹9,25,000',  rating: '5.0 (6)',  badge: 'BESTSELLER', style: 'forest_villa' },
    { name: 'Kyoto Ridge Villa',   price: '₹7,95,000',  rating: '4.9 (9)',  style: 'kyoto_ridge' },
    { name: 'Riviera Luxe Villa',  price: '₹10,60,000', rating: '4.9 (7)',  style: 'riviera_luxe' },
    { name: 'Rocky Balance Villa', price: '₹9,30,000',  rating: '4.9 (5)',  style: 'rocky_balance' },
  ],
  'Holiday Home': [
    { name: 'Cloud Bay Holiday',  price: '₹1,80,000', rating: '4.9 (19)', badge: 'BESTSELLER', style: 'cloud_bay' },
    { name: 'Nomad Nest Holiday', price: '₹1,50,000', rating: '4.8 (27)', style: 'nomad_nest' },
    { name: 'Pure Form Holiday',  price: '₹2,50,000', rating: '4.8 (14)', style: 'pure_form' },
    { name: 'Soho Mood Holiday',  price: '₹1,35,000', rating: '4.8 (22)', style: 'soho_mood' },
  ],
  'Kids': [
    { name: "Alvin's World Kids", price: '₹1,10,000', rating: '4.9 (31)', badge: 'BESTSELLER', style: 'alvin_kids' },
    { name: 'Toby Space Kids',    price: '₹1,05,000', rating: '4.8 (19)', style: 'toby_kids' },
    { name: 'Twinkle Stash Kids', price: '₹1,35,000', rating: '5.0 (8)',  style: 'twinkle_kids' },
  ],
  'Office': [
    { name: 'Boardwalk Office', price: '₹98,000', rating: '4.9 (23)', badge: 'BESTSELLER', style: 'boardwalk_off' },
    { name: 'Folio Office Set', price: '₹95,000', rating: '4.8 (12)', style: 'folio_off' },
  ],
  'Outdoor Set': [
    { name: 'Coastal Outdoor',     price: '₹75,000',   rating: '4.9 (16)', badge: 'BESTSELLER', style: 'coastal_out' },
    { name: 'Pacific Outdoor Set', price: '₹1,30,000', rating: '4.8 (11)', style: 'pacific_out' },
  ],
};

function renderPkgs(tab) {
  const data = packages[tab] || [];
  document.getElementById('pkgGrid').innerHTML = data.map(p => `
    <div class="pkg-card" onclick="addToCart('${p.name}')">
      <div class="pkg-img">
        <img src="${IMG[p.style]}" alt="${p.name}" loading="lazy">
        ${p.badge ? `<div class="pkg-badge">${p.badge}</div>` : ''}
      </div>
      <div class="pkg-name">${p.name}</div>
      <div class="pkg-rating">⭐ ${p.rating}</div>
      <div class="pkg-price"><span>from </span>${p.price}</div>
    </div>`).join('');
}

function renderPkgTabs() {
  const tabs = Object.keys(packages);
  document.getElementById('pkgTabs').innerHTML = tabs.map((t, i) =>
    `<div class="pkg-tab${i === 0 ? ' active' : ''}" onclick="switchPkg('${t}',this)">${t}</div>`
  ).join('');
  renderPkgs(tabs[0]);
}

function switchPkg(tab, el) {
  document.querySelectorAll('.pkg-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  renderPkgs(tab);
}

renderPkgTabs();

// LAYOUT SLIDESHOW (hover-activated, character stagger + clip-path reveal)
const layoutSlides = ['Studio', '1 BHK', '2 BHK', '3 BHK', 'Villa'].map(tab => {
  const best = packages[tab].find(p => p.badge) || packages[tab][0];
  return { tab, img: IMG[best.style] };
});

function renderLayoutSlideshow() {
  const textCol = document.getElementById('layoutTextCol');
  const imageWrap = document.getElementById('layoutImageWrap');
  if (!textCol || !imageWrap) return;

  textCol.innerHTML = layoutSlides.map((slide, i) => {
    const chars = slide.tab.split('').map(ch => {
      const safe = ch === ' ' ? '&nbsp;' : ch;
      return `<span class="layout-char"><span class="layout-char-base">${safe}</span><span class="layout-char-top">${safe}</span></span>`;
    }).join('');
    return `<span class="layout-text-item${i === 0 ? ' active' : ''}" data-index="${i}">${chars}</span>`;
  }).join('');

  imageWrap.innerHTML = layoutSlides.map((slide, i) =>
    `<img src="${slide.img}" alt="${slide.tab}" loading="${i === 0 ? 'eager' : 'lazy'}" class="${i === 0 ? 'active' : ''}">`
  ).join('');

  const items = textCol.querySelectorAll('.layout-text-item');
  const images = imageWrap.querySelectorAll('img');
  items.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const index = item.dataset.index;
      items.forEach(t => t.classList.remove('active'));
      images.forEach(im => im.classList.remove('active'));
      item.classList.add('active');
      images[index].classList.add('active');
    });
  });
}

renderLayoutSlideshow();

// COMPLETE HOME
const completeItems = [
  { tab: 'Curtains',              img: 'img/complete-curtains.jpg',          title: 'Curated Curtain Sets',   desc: 'Ready-made curtain sets selected to match the style of each package — all pre-measured and co-ordinated to complement your furniture.' },
  { tab: 'Kitchen appliances',    img: 'img/complete-kitchen-appliances.jpg', title: 'Kitchen Appliances',    desc: 'Fridge, oven, washing machine and everything else you need from day one — sourced, delivered and installed in one visit.' },
  { tab: 'Small appliances',      img: 'img/complete-small-appliances.jpg',  title: 'Small Appliances',       desc: 'Kettle, microwave, hairdryer and other essentials that make an apartment feel lived-in from the first hour.' },
  { tab: 'Bedroom essentials',    img: 'img/complete-bedroom.jpg',           title: 'Bedroom Essentials',     desc: 'Bedding, pillows and duvets so your first night in a new apartment feels like home.' },
  { tab: 'Bathroom accessories',  img: 'img/complete-bathroom.jpg',          title: 'Bathroom Accessories',   desc: 'Towel rails, dispensers and mats for a complete, finished bathroom.' },
  { tab: 'Decoration sets',       img: 'img/complete-decor.jpg',             title: 'Decoration Sets',        desc: 'Small details that turn a property into a place that actually feels like home.' },
  { tab: 'Kitchen utensils',      img: 'img/complete-kitchen-utensils.jpg',  title: 'Kitchen Utensils',       desc: 'Pans, knives and chopping boards for those who want to cook from the very first evening.' },
  { tab: 'Lighting',              img: 'img/complete-lighting.jpg',          title: 'Lighting',               desc: 'Floor lamps, desk lamps and wall lights to set the right atmosphere in every room.' },
];

function renderComplete() {
  document.getElementById('completeTabs').innerHTML = completeItems.map((c, i) =>
    `<div class="complete-tab${i === 0 ? ' active' : ''}" onclick="switchComplete(${i},this)">${c.tab}</div>`
  ).join('');
  document.getElementById('completePanels').innerHTML = completeItems.map((c, i) => `
    <div class="complete-panel${i === 0 ? ' active' : ''}" id="cp${i}">
      <div class="complete-visual"><img src="${c.img}" alt="${c.title}" loading="lazy"></div>
      <div class="complete-text">
        <h3>${c.title}</h3><p>${c.desc}</p>
        <a href="#contact" class="btn-dark">Enquire About This</a>
      </div>
    </div>`).join('');
}

function switchComplete(i, el) {
  document.querySelectorAll('.complete-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  document.querySelectorAll('.complete-panel').forEach(p => p.classList.remove('active'));
  document.getElementById('cp' + i).classList.add('active');
}

renderComplete();

// GALLERY STRIP
const galleryImgs = [
  'https://images.unsplash.com/photo-1617103996702-96ff29b1c467?w=600&q=80',
  'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
  'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80',
  'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80',
  'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80',
];
document.getElementById('galleryStrip').innerHTML = galleryImgs.map(u =>
  `<div class="gallery-cell"><img src="${u}" alt="Interior" loading="lazy"></div>`
).join('');

// REVIEWS
const reviewImgs = [
  ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=120&q=70', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=120&q=70', 'https://images.unsplash.com/photo-1617103996702-96ff29b1c467?w=120&q=70'],
  ['https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=120&q=70', 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=120&q=70', 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=120&q=70'],
  ['https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=120&q=70', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=120&q=70', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=120&q=70'],
  ['https://images.unsplash.com/photo-1617103996702-96ff29b1c467?w=120&q=70', 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=120&q=70', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=120&q=70'],
  ['https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=120&q=70', 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=120&q=70', 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=120&q=70'],
  ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=120&q=70', 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=120&q=70', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=120&q=70'],
];

const reviews = [
  { author: 'Priya S.',           city: 'Mumbai',    pkg: 'Forest Zen 2BHK',   text: 'As a young family, we needed our new home ready right away, and the Forest Zen package was exactly what we needed. Magic Woods took care of all the furniture, bedding, and kitchenware — saved us so much time and stress!',                                           stars: 5, date: '2026-04-12', idx: 0 },
  { author: 'Riya & Karan M.',    city: 'Bangalore', pkg: 'Cloud Bay 2BHK',    text: 'Magic Woods was a huge help for our new home! They gave us everything we needed. Our personal manager made sure everything was perfect and checked in with us the whole time. They even include a free cleaning after setup — made moving in so easy!',             stars: 5, date: '2026-03-28', idx: 1 },
  { author: 'Sunita R.',          city: 'Pune',      pkg: 'Forest Zen 1BHK',   text: 'I chose the Forest Zen style for my rental apartment and Magic Woods handled all the furnishing. The warm earthy tones are great for attracting tenants and the setup was fast and professional.',                                                                       stars: 5, date: '2026-03-15', idx: 2 },
  { author: 'Ananya V.',          city: 'Delhi NCR', pkg: 'Cloud Bay 1BHK',    text: 'I chose the Cloud Bay package for my new flat and it was exactly what I needed! These colours make the space feel bright and airy, the queen size bed is great — all the furniture has excellent quality. Magic Woods team made sure everything was set up perfectly.', stars: 5, date: '2026-05-01', idx: 3 },
  { author: 'Rajesh K.',          city: 'Hyderabad', pkg: 'Rocky Balance 3BHK', text: 'Furnishing rental units has never been easier. The Rocky Balance package saved me so much time — the furniture looks high-end and everything was installed in just one day. Exactly what I needed to get my apartments rented quickly without the hassle.',               stars: 5, date: '2026-02-18', idx: 4 },
  { author: 'Aditi P.',           city: 'Goa',       pkg: 'Cloud Bay Holiday',  text: 'Going with Magic Woods to furnish my three holiday homes was the best decision. I chose Cloud Bay and the design is sleek — my guests love it. Didn\'t have to spend time picking out every item myself. Highly recommended!',                              stars: 5, date: '2026-04-22', idx: 5 },
  { author: 'Deepika & Arjun N.', city: 'Chennai',   pkg: 'Gentle Waves 2BHK', text: 'We had just moved into our new apartment and needed so many things but didn\'t know where to start. Luckily we found Magic Woods! They included all the essentials, even decorations and cutlery. Our personal manager kept in touch to make sure everything was perfect.',stars: 5, date: '2026-01-30', idx: 0 },
  { author: 'Namrata B.',         city: 'Mumbai',    pkg: 'Forest Zen 3BHK',   text: 'I recently moved to Mumbai and chose Magic Woods — couldn\'t be happier! They made the entire process effortless. My sofa was initially off-white and they offered a customised warm beige for free so it\'s both stylish and toddler-friendly!',                  stars: 5, date: '2026-03-05', idx: 1 },
  { author: 'Vikram T.',          city: 'Delhi NCR', pkg: 'Kyoto Ridge 2BHK',  text: 'The Kyoto Ridge package is stunning. The furniture is sleek, modern, and gave my apartment a luxurious feel. Magic Woods did all the heavy lifting and had everything set up in no time. All my friends love the sofa!',                                               stars: 5, date: '2026-02-28', idx: 2 },
  { author: 'Sameer A.',          city: 'Bangalore', pkg: 'Noble Grain 1BHK',  text: 'I didn\'t have time to deal with furniture shopping. Magic Woods\' Noble Grain package was a lifesaver — they handled everything while I focused on work and I moved into a fully furnished apartment in just one day! This clean modern look is so relaxing.',       stars: 5, date: '2026-04-08', idx: 3 },
];

document.getElementById('reviewsGrid').innerHTML = reviews.map(r => `
  <div class="review-card">
    <div class="review-photos">
      ${reviewImgs[r.idx].map(u => `<img class="review-photo" src="${u}" alt="Review photo" loading="lazy">`).join('')}
    </div>
    <div class="review-author">${r.author}</div>
    <div class="review-pkg">${r.pkg} · ${r.city}</div>
    <div class="review-stars">${'★'.repeat(r.stars)}</div>
    <div class="review-text">${r.text}</div>
    <div class="review-date">${r.date}</div>
  </div>`).join('');

// FINDER
const finderData = [
  { step: 'STEP 1 OF 4', q: 'What is the size of your home?',           opts: ['1 BHK', '2 BHK', '3 BHK', '4 BHK', 'Villa', 'Farmhouse'] },
  { step: 'STEP 2 OF 4', q: 'What is your furnishing budget?',          opts: ['Under ₹2 Lakh', '₹2L – ₹5L', '₹5L – ₹10L', '₹10L – ₹20L', '₹20L+'] },
  { step: 'STEP 3 OF 4', q: 'What is the home for?',                    opts: ['Own use', 'Long-term rental', 'Holiday / Airbnb', 'Investment flat'] },
  { step: 'STEP 4 OF 4', q: 'Leave your details for a curated offer',   form: true },
];

let finderStep = 0;
const finderAnswers = {};

function renderFinder() {
  document.getElementById('finderNav').innerHTML = finderData.map((d, i) =>
    `<div class="finder-step-btn${i === finderStep ? ' active' : ''}">${d.step}</div>`
  ).join('');

  document.getElementById('finderSteps').innerHTML = finderData.map((d, i) => {
    if (d.form) return `
      <div class="finder-q${i === finderStep ? ' active' : ''}" id="fq${i}">
        <h3>${d.q}</h3>
        <div class="finder-form">
          <input type="text"  placeholder="Your Name"          id="fName">
          <input type="tel"   placeholder="WhatsApp Number"    id="fPhone">
          <input type="email" placeholder="Email (optional)"   id="fEmail">
          <small>Our advisor will reach out within 30 minutes during business hours.</small>
        </div>
      </div>`;
    return `
      <div class="finder-q${i === finderStep ? ' active' : ''}" id="fq${i}">
        <h3>${d.q}</h3>
        <div class="finder-opts">
          ${d.opts.map(o =>
            `<div class="finder-opt${finderAnswers[i] === o ? ' selected' : ''}" onclick="selFinder(this,${i},'${o}')">${o}</div>`
          ).join('')}
        </div>
      </div>`;
  }).join('');

  document.getElementById('finderNext').textContent =
    finderStep === finderData.length - 1 ? 'Get My Package →' : 'Next →';
}

function selFinder(el, s, v) {
  el.closest('.finder-opts').querySelectorAll('.finder-opt').forEach(e => e.classList.remove('selected'));
  el.classList.add('selected');
  finderAnswers[s] = v;
}

document.getElementById('finderNext').addEventListener('click', () => {
  if (finderStep < finderData.length - 1) {
    finderStep++;
    renderFinder();
  } else {
    alert('Thank you! Our advisor will send you a curated package shortly.');
    finderStep = 0;
    renderFinder();
  }
});

renderFinder();

// FAQ
const faqs = [
  { q: 'Do you operate in my city?',                a: 'We serve Mumbai, Delhi NCR, Bangalore, Hyderabad, Pune, and Chennai. Book a free home visit and our advisor comes to you.' },
  { q: 'Can I customise my package?',               a: 'Yes. Swap materials, change finishes, add or remove items — our packages are starting points, not rigid constraints. Most changes are confirmed before delivery.' },
  { q: 'How long does delivery take?',              a: 'Average from order confirmation to move-in ready is 10 days. Rush delivery is available in most cities — ask when booking.' },
  { q: 'What if something arrives damaged?',        a: 'All items carry a minimum 1-year Magic Woods warranty. Report damage within 48 hours and we replace or repair at no cost.' },
  { q: 'Do you offer EMI?',                         a: 'Yes. 0% EMI for 6 and 12 months via HDFC, ICICI, Axis, and SBI credit cards. No-cost EMI also available via Bajaj Finserv.' },
  { q: 'Is assembly and installation included?',    a: 'Completely. Assembly, arrangement, packaging removal, and a final walk-through are all included — no hidden charges.' },
  { q: 'Where are your products made?',             a: 'We partner with premium workshops across Rajasthan, Gujarat, and Tamil Nadu, with select imported pieces from Italy, Vietnam, and Scandinavia.' },
  { q: 'Do you furnish rental and holiday homes?',  a: 'Yes — dedicated short-term rental collection built for high guest turnover, available in budget, mid, and premium tiers.' },
];

document.getElementById('faqGrid').innerHTML = faqs.map(f => `
  <div class="faq-item" onclick="this.classList.toggle('open')">
    <div class="faq-q">${f.q}<i class="faq-icon">+</i></div>
    <div class="faq-a">${f.a}</div>
  </div>`).join('');

// CONTACT — apartment type selector
document.querySelectorAll('.apt-opt').forEach(el => {
  el.addEventListener('click', () => {
    document.querySelectorAll('.apt-opt').forEach(e => e.classList.remove('selected'));
    el.classList.add('selected');
  });
});

// CONTACT — form submit
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you! Our advisor will contact you within 30 minutes via WhatsApp.');
});

// CART
let cartCount = 0;
function addToCart(name) {
  cartCount++;
  document.getElementById('cartBadge').textContent = cartCount;
}
