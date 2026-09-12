const fallback = null;

async function getContent() {
  try {
    const r = await fetch("content.json", { cache: "no-store" });
    return await r.json();
  } catch (e) {
    return fallback;
  }
}

const esc = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (m) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[m]));

function render(c) {
  if (!c) return;

  document.title = c.businessName + " | Booking";

  document.querySelectorAll("[data-business]").forEach((x) => {
    x.textContent = c.businessName;
  });

  const tagline = document.querySelector("#tagline");
  if (tagline) tagline.textContent = c.tagline;

  const bioTitle = document.querySelector("#bioTitle");
  if (bioTitle) bioTitle.textContent = c.bioTitle;

  const bio = document.querySelector("#bio");
  if (bio) bio.textContent = c.bio;

  const phone = document.querySelector("#phone");
  if (phone) {
    phone.textContent = c.phone;
    phone.href = "tel:" + c.phone.replace(/\D/g, "");
  }

  const email = document.querySelector("#email");
  if (email) {
    email.textContent = c.email;
    email.href = "mailto:" + c.email;
  }

  const instagram = document.querySelector("#instagram");
  if (instagram) instagram.textContent = c.instagram;

  const location = document.querySelector("#location");
  if (location) location.textContent = c.location;

  const serviceList = document.querySelector("#service-list");

  if (serviceList) {
    serviceList.innerHTML = c.services.map((s) => `
      <article class="card">
        <img src="${s.image}" alt="${esc(s.name)} reference photo">
        <div class="card-body">
          <div class="eyebrow">${esc(s.name)}</div>
          <div class="price">${esc(s.price)}</div>
          <p class="muted">${esc(s.description)}</p>
          <a class="btn pink" href="#book">Book ${esc(s.name)}</a>
        </div>
      </article>
    `).join("");
  }

  const galleryList = document.querySelector("#gallery-list");

  if (galleryList) {
    galleryList.innerHTML = c.gallery.map((g) => `
      <figure>
        <img src="${g.image}" alt="${esc(g.label)} reference photo">
        <figcaption>${esc(g.label)}</figcaption>
      </figure>
    `).join("");
  }

  const hours = document.querySelector("#hours");

  if (hours) {
    hours.innerHTML = c.hours.map((h) => `
      <div>
        <strong>${esc(h[0])}</strong>
        <span>${esc(h[1])}</span>
      </div>
    `).join("");
  }

  const policies = document.querySelector("#policies");

  if (policies) {
    policies.innerHTML = c.policies.map((p) => `
      <article class="policy">
        <h3>${esc(p[0])}</h3>
        <p>${esc(p[1])}</p>
      </article>
    `).join("");
  }
}

getContent().then(render);
