// ---------- Config ----------
// Update these once, they're used across the whole site.
const AURORA_CONFIG = {
  whatsappNumber: "962795888502", // international format, no + or leading 0
  ordersEmail: "orders@auroraicecream.com"
};

// ---------- Flavor catalog (mirrors flavors.html) ----------
const FLAVOR_CATALOG = {
  classic: [
    { code: "CL-01", icon: "cl-01-vanilla-new", en: "Vanilla", ar: "فانيلا" },
    { code: "CL-02", icon: "cl-02-chocolate-new", en: "Chocolate", ar: "شوكولاتة" },
    { code: "CL-04", icon: "cl-03-strawberry", en: "Strawberry", ar: "فراولة" },
    { code: "CL-03", icon: "cl-03-lemon", en: "Lemon", ar: "ليمون" },
  ],
  special: [
    { code: "SP-01", icon: "sp-01-snickers", en: "Snickers", ar: "سنيكرز" },
    { code: "SP-02", icon: "sp-02-twix", en: "Twix", ar: "تويكس" },
    { code: "SP-03", icon: "sp-03-arabic-mesteka", en: "Arabic Mesteka (Booza)", ar: "عربي مستكة" },
    { code: "SP-04", icon: "sp-04-pistachio", en: "Pistachio", ar: "فستق" },
    { code: "SP-05", icon: "sp-05-oreo", en: "Oreo", ar: "اوريو" },
    { code: "SP-06", icon: "sp-06-lotus", en: "Lotus", ar: "لوتس" },
    { code: "SP-07", icon: "sp-07-crocan", en: "Crocan (Almond Praline)", ar: "كروكان" },
    { code: "SP-08", icon: "sp-08-mango", en: "Mango", ar: "مانجا" },
    { code: "SP-09", icon: "sp-09-raspberry", en: "Raspberry", ar: "توت العليق" },
  ],
  request: [
    { code: "UR-01", icon: "ur-01-rosewater", en: "Rosewater", ar: "ماء الورد" },
    { code: "UR-02", icon: "ur-02-halawa-tahini", en: "Halawa (Tahini)", ar: "حلاوة طحينية" },
    { code: "UR-03", icon: "ur-03-knafeh", en: "Knafeh", ar: "كنافة" },
    { code: "UR-04", icon: "ur-04-saffron", en: "Saffron", ar: "زعفران" },
    { code: "UR-05", icon: "ur-05-salted-caramel", en: "Salted Caramel", ar: "كراميل مملح" },
    { code: "UR-06", icon: "ur-06-turkish-delight", en: "Turkish Delight", ar: "راحة تركية" },
    { code: "UR-07", icon: "ur-07-date-ajwa", en: "Date (Ajwa)", ar: "تمر عجوة" },
    { code: "UR-08", icon: "ur-08-coffee-mocha", en: "Coffee / Mocha", ar: "قهوة موكا" },
    { code: "UR-09", icon: "ur-09-coconut", en: "Coconut", ar: "جوز الهند" },
    { code: "UR-10", icon: "ur-10-tiramisu", en: "Tiramisu", ar: "تيراميسو" },
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
        <div class="flavor-icon"><img src="assets/flavor-icons/${f.icon}.svg" alt="${f.en} icon"></div>
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
