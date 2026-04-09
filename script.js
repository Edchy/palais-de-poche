const book = document.getElementById("book");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const romanNumerals = [
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
  "IX",
  "X",
  "XI",
  "XII",
  "XIII",
  "XIV",
  "XV",
  "XVI",
  "XVII",
  "XVIII",
  "XIX",
  "XX",
  "XXI",
  "XXII",
  "XXIII",
  "XXIV",
  "XXV",
  "XXVI",
  "XXVII",
  "XXVIII",
  "XXIX",
  "XXX",
  "XXXI",
  "XXXII",
  "XXXIII",
  "XXXIV",
  "XXXV",
  "XXXVI",
  "XXXVII",
  "XXXVIII",
  "XXXIX",
  "XL",
  "XLI",
  "XLII",
  "XLIII",
  "XLIV",
  "XLV",
  "XLVI",
  "XLVII",
  "XLVIII",
  "XLIX",
  "L",
  "LI",
  "LII",
  "LIII",
  "LIV",
  "LV",
  "LVI",
  "LVII",
  "LVIII",
  "LIX",
  "LX",
  "LXI",
  "LXII",
  "LXIII",
  "LXIV",
  "LXV",
  "LXVI",
  "LXVII",
  "LXVIII",
  "LXIX",
  "LXX",
  "LXXI",
];

// Layout cycle for single-image spreads
const LAYOUT_CYCLE = [
  "wide",
  "reversed",
  "red",
  "display",
  "wide",
  "collage",
];

function getLayout(page, index, prevLayout) {
  if (page.layout) return page.layout;
  const imgs = page.imgs;
  if (imgs && imgs.length === 3) return "trio";
  if (imgs && imgs.length === 2) return "duo";
  // Pick from cycle, skipping if it would repeat the previous layout
  let pick = LAYOUT_CYCLE[index % LAYOUT_CYCLE.length];
  if (pick === prevLayout) {
    pick = LAYOUT_CYCLE[(index + 1) % LAYOUT_CYCLE.length];
  }
  return pick;
}

function getTheme(page, index, layout) {
  if (page.theme) return page.theme;
  // Alternate white/rouge; red layout always rouge
  if (layout === "red") return "rouge";
  return index % 2 === 0 ? "default" : "rouge";
}

// Normalise: always work with an imgs array
function getImgs(page) {
  return page.imgs || [page.img];
}

function buildTextBlock(page, num, extra = "") {
  return `
    <div class="page-content${extra ? " " + extra : ""}">
      <p class="label">${num}</p>
      <h2>${page.title}</h2>
      <p class="caption">${page.caption}</p>
    </div>`;
}

function buildSpread(page, i, prevLayout) {
  const layout = getLayout(page, i, prevLayout);
  const theme = getTheme(page, i, layout);
  const num = `${i + 1}/${pages.length}`;
  const imgs = getImgs(page);
  const imgClass = page.contain ? ' class="contain"' : "";
  const t = `data-theme="${theme}"`;

  if (layout === "duo-side") {
    return `
      <div class="spread layout-duo-side" id="spread-${i + 1}" ${t}>
        <div class="page page-left duo-side-text">
          ${buildTextBlock(page, num)}
        </div>
        <div class="page page-right duo-side-photos">
          <div class="multi-photo"><img data-src="${imgs[0]}" alt="${page.title}"></div>
          <div class="multi-photo"><img data-src="${imgs[1]}" alt="${page.title}"></div>
          <div class="spread-nav spread-nav">
            <button class="spread-prev" aria-label="Previous page">&#8592;</button>
            <button class="spread-next" aria-label="Next page">&#8594;</button>
          </div>
        </div>
      </div>`;
  }

  if (layout === "duo") {
    return `
      <div class="spread layout-duo" id="spread-${i + 1}" ${t}>
        <div class="multi-stage">
          <div class="multi-photos">
            <div class="multi-photo"><img data-src="${imgs[0]}" alt="${page.title}"></div>
            <div class="multi-photo"><img data-src="${imgs[1]}" alt="${page.title}"></div>
          </div>
          <div class="multi-bar">
            <p class="label">${num}</p>
            <h2>${page.title}</h2>
            <p class="caption">${page.caption}</p>
          </div>
        </div>
      </div>`;
  }

  if (layout === "trio") {
    return `
      <div class="spread layout-trio" id="spread-${i + 1}" ${t}>
        <div class="multi-stage">
          <div class="multi-photos">
            <div class="multi-photo"><img data-src="${imgs[0]}" alt="${page.title}"></div>
            <div class="multi-photo"><img data-src="${imgs[1]}" alt="${page.title}"></div>
            <div class="multi-photo"><img data-src="${imgs[2]}" alt="${page.title}"></div>
          </div>
          <div class="multi-bar">
            <p class="label">${num}</p>
            <h2>${page.title}</h2>
            <p class="caption">${page.caption}</p>
          </div>
        </div>
      </div>`;
  }

  if (layout === "reversed") {
    return `
      <div class="spread layout-reversed" id="spread-${i + 1}" ${t}>
        <div class="page page-left reversed-img">
          <img data-src="${imgs[0]}" alt="${page.title}"${imgClass}>
        </div>
        <div class="page page-right reversed-text">
          <div class="page-content">
            <p class="label">${num}</p>
            <h2>${page.title}</h2>
            <p class="caption">${page.caption}</p>
          </div>
        </div>
        <div class="spread-nav spread-nav">
          <button class="spread-prev" aria-label="Previous page">&#8592;</button>
          <button class="spread-next" aria-label="Next page">&#8594;</button>
        </div>
      </div>`;
  }

  if (layout === "red") {
    return `
      <div class="spread layout-red" id="spread-${i + 1}" ${t}>
        <div class="page page-left">
          ${buildTextBlock(page, num)}
        </div>
        <div class="page page-right">
          <img data-src="${imgs[0]}" alt="${page.title}"${imgClass}>
          <div class="spread-nav spread-nav">
            <button class="spread-prev" aria-label="Previous page">&#8592;</button>
            <button class="spread-next" aria-label="Next page">&#8594;</button>
          </div>
        </div>
      </div>`;
  }

  if (layout === "display") {
    return `
      <div class="spread layout-display" id="spread-${i + 1}" ${t}>
        <div class="page page-left display-page">
          <div class="display-body">
            <p class="display-numeral">${num}</p>
            <h2>${page.title}</h2>
            <p class="caption display-caption">${page.caption}</p>
          </div>
        </div>
        <div class="page page-right">
          <img data-src="${imgs[0]}" alt="${page.title}"${imgClass}>
          <div class="spread-nav spread-nav">
            <button class="spread-prev" aria-label="Previous page">&#8592;</button>
            <button class="spread-next" aria-label="Next page">&#8594;</button>
          </div>
        </div>
      </div>`;
  }

  if (layout === "collage") {
    const nextPage = pages[i + 1];
    const img2 = imgs[1] || (nextPage && (nextPage.img || (nextPage.imgs && nextPage.imgs[0]))) || imgs[0];
    return `
      <div class="spread layout-collage" id="spread-${i + 1}" ${t}>
        <div class="page page-left">
          ${buildTextBlock(page, num)}
        </div>
        <div class="page page-right collage-stage">
          <div class="collage-photo collage-photo--back">
            <img data-src="${img2}" alt="${page.title}">
          </div>
          <div class="collage-photo collage-photo--front">
            <img data-src="${imgs[0]}" alt="${page.title}">
          </div>
          <div class="spread-nav spread-nav">
            <button class="spread-prev" aria-label="Previous page">&#8592;</button>
            <button class="spread-next" aria-label="Next page">&#8594;</button>
          </div>
        </div>
      </div>`;
  }

  // 'wide' — default single image
  return `
    <div class="spread layout-wide" id="spread-${i + 1}" ${t}>
      <div class="page page-left wide-text">
        ${buildTextBlock(page, num)}
      </div>
      <div class="page wide-img">
        <img data-src="${imgs[0]}" alt="${page.title}"${imgClass}>
        <div class="spread-nav spread-nav">
          <button class="spread-prev" aria-label="Previous page">&#8592;</button>
          <button class="spread-next" aria-label="Next page">&#8594;</button>
        </div>
      </div>
    </div>`;
}

// Build spreads
function buildBook() {
  book.innerHTML += `
    <div class="spread active" id="spread-0">
      <div class="page page-left cover-left">
      </div>
      <div class="page page-right cover-right">
        <div class="cover-content">
          <h1>Le Palais<br>de Poche</h1>
          <p class="cover-translation">The Pocket Palace. A petite house on wheels.</p>
        </div>
      </div>
    </div>`;

  let prevLayout = null;
  pages.forEach((page, i) => {
    const html = buildSpread(page, i, prevLayout);
    // Extract the layout class to track it for the next spread
    const match = html.match(/class="spread (layout-[^\s"]+)/);
    prevLayout = match ? match[1].replace("layout-", "") : null;
    book.innerHTML += html;
  });

  book.innerHTML += `
    <div class="spread" id="spread-${pages.length + 1}">
      <div class="page page-left back-cover">
        <div class="page-content">
          <p class="back-title">Palais de Poche</p>
        </div>
      </div>
      <div class="page page-right back-cover-right"></div>
    </div>`;
}

buildBook();

// Navigation
const spreads = document.querySelectorAll(".spread");
const total = spreads.length;
let current = 0;

function loadSpread(index) {
  const spread = spreads[index];
  if (!spread) return;
  spread.querySelectorAll("img[data-src]").forEach((img) => {
    img.src = img.dataset.src;
    img.removeAttribute("data-src");
  });
}

function goTo(index) {
  if (current === 0 && index !== 0) {
    const hint = document.getElementById("nav-hint");
    if (hint) hint.classList.add("nav-hint--gone");
  }
  spreads[current].classList.remove("active");
  current = index;
  spreads[current].classList.add("active");
  spreads[current].scrollTop = 0;
  loadSpread(current);
  loadSpread(current + 1);
  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === total - 1;
  // Sync spread-level nav buttons
  document.querySelectorAll(".spread-prev").forEach(btn => { btn.disabled = current === 0; });
  document.querySelectorAll(".spread-next").forEach(btn => { btn.disabled = current === total - 1; });
  // Hide global nav when the active spread has its own
  const hasSpreadNav = spreads[current].querySelector(".spread-nav") !== null;
  document.body.classList.toggle("has-spread-nav", hasSpreadNav);
  // Cover styling for global nav
  document.body.classList.toggle("on-cover", current === 0);
}

prevBtn.addEventListener("click", () => {
  if (current > 0) goTo(current - 1);
});
nextBtn.addEventListener("click", () => {
  if (current < total - 1) goTo(current + 1);
});

book.addEventListener("click", (e) => {
  if (e.target.closest(".spread-prev") && current > 0) goTo(current - 1);
  if (e.target.closest(".spread-next") && current < total - 1) goTo(current + 1);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight" || e.key === "ArrowDown") {
    if (current < total - 1) goTo(current + 1);
  } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
    if (current > 0) goTo(current - 1);
  }
});

let touchStartX = 0;
document.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
});
document.addEventListener("touchend", (e) => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 50) {
    if (dx < 0 && current < total - 1) goTo(current + 1);
    if (dx > 0 && current > 0) goTo(current - 1);
  }
});

goTo(0);
