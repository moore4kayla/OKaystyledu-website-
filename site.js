
const fallback = null;
async function getContent(){try{const r=await fetch('content.json',{cache:'no-store'});return await r.json()}catch(e){return fallback}}
const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
function render(c){
document.title=c.businessName+' | Booking';
document.querySelectorAll('[data-business]').forEach(x=>x.textContent=c.businessName);
document.querySelector('#tagline').textContent=c.tagline;
document.querySelector('#bioTitle').textContent=c.bioTitle;
document.querySelector('#bio').textContent=c.bio;
document.querySelector('#phone').textContent=c.phone;
document.querySelector('#phone').href='tel:'+c.phone.replace(/\D/g,'');
document.querySelector('#email').textContent=c.email;
document.querySelector('#email').href='mailto:'+c.email;
document.querySelector('#instagram').textContent=c.instagram;
document.querySelector('#location').textContent=c.location;
document.querySelector('#services').innerHTML=c.services.map(s=>`<article class="card"><img src="${s.image}" alt="${esc(s.name)} reference photo"><div class="cardbody"><div class="eyebrow">${esc(s.name)}</div><div class="price">${esc(s.price)}</div><p class="muted">${esc(s.description)}</p><a class="btn pink" href="#book">Book ${esc(s.name)}</a></div></article>`).join('');
document.querySelector('#gallery').innerHTML=c.gallery.map(g=>`<figure><img src="${g.image}" alt="${esc(g.label)} reference photo"><figcaption>${esc(g.label)}</figcaption></figure>`).join('');
document.querySelector('#hours').innerHTML=c.hours.map(h=>`<div><strong>${esc(h[0])}</strong><span>${esc(h[1])}</span></div>`).join('');
document.querySelector('#policies').innerHTML=c.policies.map(p=>`<article class="policy"><h3>${esc(p[0])}</h3><p>${esc(p[1])}</p></article>`).join('');
document.querySelector('#serviceSelect').innerHTML=c.services.map(s=>`<option>${esc(s.name)}</option>`).join('');
}
getContent().then(render);
