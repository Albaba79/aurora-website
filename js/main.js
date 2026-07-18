// ---------- Config ----------
// Update these once, they're used across the whole site.
const AURORA_CONFIG = {
  whatsappNumber: "962795888502", // international format, no + or leading 0
  ordersEmail: "orders@auroraicecream.com"
};

// ---------- Flavor catalog (mirrors flavors.html) ----------
const FLAVOR_CATALOG = {
  classic: [
    { code: "CL-01", img: "assets/flavor-real/cl-01-vanilla.jpg", en: "Vanilla", ar: "فانيلا" },
    { code: "CL-02", img: "assets/flavor-real/cl-02-chocolate.jpg", en: "Chocolate", ar: "شوكولاتة" },
    { code: "CL-04", img: "assets/flavor-photos/cl-04-strawberry.png", en: "Strawberry", ar: "فراولة" },
    { code: "CL-03", img: "assets/flavor-real/cl-03-lemon.jpg", en: "Lemon", ar: "ليمون" },
  ],
  special: [
    { code: "SP-01", img: "assets/flavor-real/sp-01-snickers.jpg", en: "Snickers", ar: "سنيكرز" },
    { code: "SP-02", img: "assets/flavor-real/sp-02-twix.jpg", en: "Twix", ar: "تويكس" },
    { code: "SP-03", img: "assets/flavor-real/sp-03-arabic-mesteka.jpg", en: "Arabic Mesteka (Booza)", ar: "عربي مستكة" },
    { code: "SP-04", img: "assets/flavor-real/sp-04-pistachio.jpg", en: "Pistachio", ar: "فستق" },
    { code: "SP-05", img: "assets/flavor-real/sp-05-oreo.jpg", en: "Oreo", ar: "اوريو" },
    { code: "SP-06", img: "assets/flavor-real/sp-06-lotus.jpg", en: "Lotus", ar: "لوتس" },
    { code: "SP-07", img: "assets/flavor-real/sp-07-crocan.jpg", en: "Crocan (Almond Praline)", ar: "كروكان" },
    { code: "SP-08", img: "assets/flavor-real/sp-08-mango.jpg", en: "Mango", ar: "مانجا" },
    { code: "SP-09", img: "assets/flavor-real/sp-09-raspberry.jpg", en: "Raspberry", ar: "توت العليق" },
  ],
  request: [
    { code: "UR-01", img: "assets/flavor-real/ur-01-rosewater.jpg", en: "Rosewater", ar: "ماء الورد" },
    { code: "UR-02", img: "assets/flavor-real/ur-02-halawa-tahini.jpg", en: "Halawa (Tahini)", ar: "حلاوة طحينية" },
    { code: "UR-03", img: "assets/flavor-real/ur-03-knafeh.jpg", en: "Knafeh", ar: "كنافة" },
    { code: "UR-04", img: "assets/flavor-real/ur-04-saffron.jpg", en: "Saffron", ar: "زعفران" },
    { code: "UR-05", img: "assets/flavor-real/ur-05-salted-caramel.jpg", en: "Salted Caramel", ar: "كراميل مملح" },
    { code: "UR-06", img: "assets/flavor-real/ur-06-turkish-delight.jpg", en: "Turkish Delight", ar: "راحة تركية" },
    { code: "UR-07", img: "assets/flavor-real/ur-07-date-ajwa.jpg", en: "Date (Ajwa)", ar: "تمر عجوة" },
    { code: "UR-08", img: "assets/flavor-real/ur-08-coffee-mocha.jpg", en: "Coffee / Mocha", ar: "قهوة موكا" },
    { code: "UR-09", img: "assets/flavor-real/ur-09-coconut.jpg", en: "Coconut", ar: "جوز الهند" },
    { code: "UR-10", img: "assets/flavor-real/ur-10-tiramisu.jpg", en: "Tiramisu", ar: "تيراميسو" },
  ],
  dietketo: [
    { code: "DK-01", img: "assets/flavor-real/cl-01-vanilla.jpg", en: "Vanilla — Diet & Keto", ar: "فانيلا (دايت وكيتو)" },
    { code: "DK-02", img: "assets/flavor-real/cl-02-chocolate.jpg", en: "Chocolate — Diet & Keto", ar: "شوكولاتة (دايت وكيتو)" },
    { code: "DK-03", img: "assets/flavor-photos/dk-03-sorbet.png", en: "Sorbet — Diet & Keto", ar: "سوربيه (دايت وكيتو)" }
  ]
};

const cart = {}; // code -> {en, qty}

function renderFlavorPicker() {
  const container = document.getElementById('flavor-picker');
  if (!container) return;
  Object.entries(FLAVOR_CATALOG).forEach(([tier, items]) => {
    const panel = document.createElement('div');
    panel.className = 'picker-panel' + (tier === 'classic' ? ' active' : '');
    panel.id = 'picker-' + tier;
    items.forEach(f => {
      const row = document.createElement('div');
      row.className = 'picker-row';
      row.dataset.code = f.code;
      row.innerHTML = `
        <div class="flavor-icon is-photo"><img src="${f.img}" alt="${f.en}"></div>
        <div class="picker-names"><div class="picker-name-ar">${f.ar}</div><div class="picker-name-en">${f.en}</div></div>
        <div class="qty-stepper">
          <button type="button" class="qty-btn" data-action="minus" aria-label="Decrease">−</button>
          <span class="qty-value">0</span>
          <button type="button" class="qty-btn" data-action="plus" aria-label="Increase">+</button>
        </div>`;
      const minusBtn = row.querySelector('[data-action="minus"]');
      const plusBtn = row.querySelector('[data-action="plus"]');
      const qtyEl = row.querySelector('.qty-value');
      function setQty(n) {
        n = Math.max(0, n);
        qtyEl.textContent = n;
        row.classList.toggle('has-qty', n > 0);
        if (n > 0) cart[f.code] = { en: f.en, ar: f.ar, qty: n };
        else delete cart[f.code];
        updateSummary();
      }
      minusBtn.addEventListener('click', () => setQty(parseInt(qtyEl.textContent) - 1));
      plusBtn.addEventListener('click', () => setQty(parseInt(qtyEl.textContent) + 1));
      panel.appendChild(row);
    });
    container.appendChild(panel);
  });

  document.querySelectorAll('.picker-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.picker-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.picker-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById('picker-' + tab.dataset.picker).classList.add('active');
    });
  });
}

function updateSummary() {
  const listEl = document.getElementById('order-summary-list');
  const emptyEl = document.getElementById('order-summary-empty');
  const totalEl = document.getElementById('order-summary-total');
  if (!listEl) return;
  const entries = Object.entries(cart);
  listEl.innerHTML = '';
  if (entries.length === 0) {
    emptyEl.style.display = 'block';
    totalEl.style.display = 'none';
    return;
  }
  emptyEl.style.display = 'none';
  totalEl.style.display = 'block';
  let totalQty = 0;
  entries.forEach(([code, item]) => {
    totalQty += item.qty;
    const li = document.createElement('li');
    li.innerHTML = `<span>${item.en} <span style="opacity:.6">(${item.ar})</span></span><b>× ${item.qty}</b>`;
    listEl.appendChild(li);
  });
  totalEl.textContent = `Total items: ${totalQty}`;
}

function cartSummaryText() {
  const entries = Object.entries(cart);
  if (entries.length === 0) return "No flavors selected yet";
  return entries.map(([code, item]) => `${item.en} (${item.ar}) x${item.qty}`).join(', ');
}


// ---------- Mobile nav toggle ----------
document.addEventListener('DOMContentLoaded', () => {
  renderFlavorPicker();

  // ---------- Sticky header: transparent at top, solid on scroll ----------
  const siteHeader = document.querySelector('header.site-header');
  if (siteHeader) {
    function updateHeaderScroll() {
      if (window.scrollY < 10) {
        siteHeader.classList.add('at-top');
        siteHeader.classList.remove('scrolled');
      } else {
        siteHeader.classList.remove('at-top');
        siteHeader.classList.add('scrolled');
      }
    }
    updateHeaderScroll();
    window.addEventListener('scroll', updateHeaderScroll, { passive: true });
  }

  // ---------- Order type toggle (Wholesale / Retail) ----------
  const typeButtons = document.querySelectorAll('.order-type-btn');
  if (typeButtons.length) {
    typeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        typeButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        document.querySelectorAll('.order-fields-group').forEach(g => {
          const isActive = g.id === 'fields-' + btn.dataset.orderType;
          g.classList.toggle('active', isActive);
          g.querySelectorAll('[data-required-in-group]').forEach(f => {
            f.required = isActive;
          });
        });
        const hiddenType = document.getElementById('order-type-value');
        if (hiddenType) hiddenType.value = btn.dataset.orderType === 'wholesale' ? 'Wholesale' : 'Retail';
      });
    });
  }

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      const expanded = nav.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded);
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
  }

  // ---------- Flavor tier tabs (flavors.html) ----------
  const tabs = document.querySelectorAll('.tier-tab');
  if (tabs.length) {
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tier-panel').forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById(tab.dataset.tier).classList.add('active');
      });
    });
  }

  // ---------- Order / Contact forms -> WhatsApp ----------
  document.querySelectorAll('form[data-whatsapp-form]').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const lines = [];
      lines.push("New inquiry from aurora website:");
      form.querySelectorAll('[data-label]').forEach(field => {
        const label = field.dataset.label;
        let value = '';
        if (field.type === 'checkbox') return;
        // skip fields inside inactive order-fields-group
        const group = field.closest('.order-fields-group');
        if (group && !group.classList.contains('active')) return;
        value = data.get(field.name) || '';
        if (value) lines.push(`${label}: ${value}`);
      });
      const checked = form.querySelectorAll('input[type=checkbox]:checked');
      if (checked.length) {
        const names = Array.from(checked).map(c => c.value).join(', ');
        lines.push(`Flavors of interest: ${names}`);
      }
      // include flavor picker cart, if this form has one
      if (form.querySelector('#flavor-picker')) {
        lines.push(`Flavors selected: ${cartSummaryText()}`);
      }
      const message = lines.join('\n');
      const waUrl = `https://wa.me/${AURORA_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;

      const status = form.querySelector('.form-status');
      if (status) {
        status.textContent = "Opening WhatsApp with your details filled in — just hit send.";
        status.classList.add('show', 'ok');
      }
      window.open(waUrl, '_blank');
    });
  });

  // ---------- Email fallback links ----------
  document.querySelectorAll('[data-email-link]').forEach(el => {
    const subject = encodeURIComponent(el.dataset.subject || "Wholesale inquiry — Aurora");
    const body = encodeURIComponent(el.dataset.body || "Hello Aurora team,\n\nWe'd like to request a quote for:\n- \n\nBusiness name:\nContact number:\n\nThank you.");
    el.href = `mailto:${AURORA_CONFIG.ordersEmail}?subject=${subject}&body=${body}`;
  });

  // ---------- Set WhatsApp links dynamically ----------
  document.querySelectorAll('[data-whatsapp-link]').forEach(el => {
    const text = encodeURIComponent(el.dataset.whatsappText || "Hello Aurora, I'd like to ask about wholesale ice cream orders.");
    el.href = `https://wa.me/${AURORA_CONFIG.whatsappNumber}?text=${text}`;
  });

  // set current year in footer
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
});
