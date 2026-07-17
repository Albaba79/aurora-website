// ---------- Config ----------
// Update these once, they're used across the whole site.
const AURORA_CONFIG = {
  whatsappNumber: "962795888502", // international format, no + or leading 0
  ordersEmail: "orders@auroraicecream.com"
};

// ---------- Mobile nav toggle ----------
document.addEventListener('DOMContentLoaded', () => {
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
        if (field.type === 'checkbox') return; // handled separately below
        value = data.get(field.name) || '';
        if (value) lines.push(`${label}: ${value}`);
      });
      // gather checked flavor checkboxes, if any
      const checked = form.querySelectorAll('input[type=checkbox]:checked');
      if (checked.length) {
        const names = Array.from(checked).map(c => c.value).join(', ');
        lines.push(`Flavors of interest: ${names}`);
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
