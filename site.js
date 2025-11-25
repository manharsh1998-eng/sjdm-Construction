
const L = {
  en: {
    headline: "Design. Build. Renovate.",
    sub: "Commercial & residential projects delivered on time with bank-grade quality control.",
    cta: "Get a free estimate",
    servicesTitle: "What we do",
    s1: "Renovations – Commercial & Residential",
    s2: "Construction – Residential & Commercial",
    s3: "Interior & Exterior Design",
    s4: "Sidewalks, Pathways & Parks",
    clientsTitle: "Trusted by",
    aboutBlurb: "SJDM Constructions is an Amritsar-based team delivering full‑stack construction—from concept and design to civil execution and finishing. We specialise in bank interiors, branch refreshes, façade upgrades, and modern office fit‑outs with clean MEP, lighting and acoustics. Safety-first. Contract‑driven. Transparent budgets.",
    footer: "© " + new Date().getFullYear() + " SJDM Constructions. All rights reserved."
  },
  pa: {
    headline: "ਡਿਜ਼ਾਇਨ। ਤਿਆਰ ਕਰੋ। ਰੀਨੋਵੇਟ ਕਰੋ।",
    sub: "ਵਪਾਰਕ ਤੇ ਰਿਹਾਇਸ਼ੀ ਪ੍ਰੋਜੈਕਟ ਸਮੇਂ ’ਤੇ, ਬੈਂਕ-ਗ੍ਰੇਡ ਕੁਆਲਿਟੀ ਨਾਲ।",
    cta: "ਮੁਫ਼ਤ ਅਨੁਮਾਨ ਲਓ",
    servicesTitle: "ਅਸੀਂ ਕੀ ਕਰਦੇ ਹਾਂ",
    s1: "ਰੀਨੋਵੇਸ਼ਨ – ਕਮਰਸ਼ੀਅਲ ਅਤੇ ਰਿਹਾਇਸ਼ੀ",
    s2: "ਕੰਸਟਰਕਸ਼ਨ – ਰਿਹਾਇਸ਼ੀ ਤੇ ਕਮਰਸ਼ੀਅਲ",
    s3: "ਇੰਟੀਰੀਅਰ ਅਤੇ ਐਕਸਟੀਰੀਅਰ ਡਿਜ਼ਾਇਨ",
    s4: "ਸਾਈਡਵਾਕ, ਪੈਦਲ ਪਥ ਤੇ ਪਾਰਕ",
    clientsTitle: "ਭਰੋਸੇਯੋਗ ਗਾਹਕ",
    aboutBlurb: "SJDM Constructions ਅੰਮ੍ਰਿਤਸਰ ਅਧਾਰਿਤ ਟੀਮ ਹੈ ਜੋ ਡਿਜ਼ਾਇਨ ਤੋਂ ਲੈ ਕੇ ਨਿਰਮਾਣ ਤੇ ਫਿਨਿਸ਼ਿੰਗ ਤੱਕ ਪੂਰਾ ਹੱਲ ਦਿੰਦੀ ਹੈ। ਅਸੀਂ ਬੈਂਕ ਇੰਟੀਰੀਅਰ, ਬ੍ਰਾਂਚ ਰਿਫ਼ਰੈਸ਼, ਫਸਾਡ ਅਪਗ੍ਰੇਡ, ਤੇ ਆਧੁਨਿਕ ਦਫ਼ਤਰ ਫਿਟ-ਆਉਟਸ ਵਿੱਚ ਮਾਹਿਰ ਹਾਂ। ਸੇਫ਼ਟੀ ਪਹਿਲਾਂ। ਕਾਂਟ੍ਰੈਕਟ ਅਨੁਸਾਰ ਕੰਮ। ਸਾਫ਼ ਬਜਟ।",
    footer: "© " + new Date().getFullYear() + " SJDM Constructions. ਸਭ ਹੱਕ ਰਾਖਵੇਂ ਹਨ।"
  }
};

const slides = [
  "assets/site_shell_a.jpg",
  "assets/office_new_a.jpg",
  "assets/office_room.jpg",
  "assets/office_hall.jpg"
];

function applyLang(lang){
  const t = L[lang] || L.en;
  document.querySelectorAll("[data-i]").forEach(el => {
    const k = el.getAttribute("data-i");
    if(t[k]) el.textContent = t[k];
  });
  document.querySelector("footer .copy").textContent = t.footer;
  localStorage.setItem("lang", lang);
}

function initHero(){
  const wrap = document.querySelector(".hero");
  if(!wrap) return;
  slides.forEach((src, i) => {
     const d = document.createElement("div");
     d.className = "hero-slide" + (i===0?' active':'');
     d.style.backgroundImage = `url('${src}')`;
     wrap.appendChild(d);
  });
  let idx = 0;
  setInterval(()=>{
    const els = document.querySelectorAll(".hero-slide");
    els[idx].classList.remove("active");
    idx = (idx+1) % els.length;
    els[idx].classList.add("active");
  }, 4000);
}

document.addEventListener("DOMContentLoaded", () => {
  // Language
  const lang = localStorage.getItem("lang") || "en";
  applyLang(lang);
  document.querySelectorAll("[data-lang]").forEach(btn=>{
    btn.addEventListener("click", ()=>applyLang(btn.getAttribute("data-lang")));
  });
  initHero();
});
