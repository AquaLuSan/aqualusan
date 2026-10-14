(function () {
  const contact = {
    name: "Eric Liu",
    phoneDisplay: "0456 493 395",
    phoneTel: "+61456493395",
    whatsapp: "61456493395",
    websiteDisplay: "aqualusan.com.au",
    websiteUrl: "https://aqualusan.com.au",
    email: "aqualusan@gmail.com",
    facebook: "https://www.facebook.com/share/1EnbQx4eUw/?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/aqualusan"
  };

  const socials = `
    <div class="socials">
      <a href="mailto:${contact.email}" aria-label="Email AquaLuSan">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8.24l7.4 6.48a1 1 0 0 0 1.2 0L20 8.24V18H4z"/></svg>
      </a>
      <a href="https://wa.me/${contact.whatsapp}" target="_blank" rel="noopener" aria-label="WhatsApp AquaLuSan">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.33.16 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.9 11.9 0 0 0 5.76 1.47h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.45-8.44zM12.07 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.64-.24-.37a9.86 9.86 0 0 1-1.51-5.28c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.13 1.03 7 2.9a9.82 9.82 0 0 1 2.9 7c0 5.45-4.44 9.88-9.9 9.88zm5.43-7.4c-.3-.15-1.76-.87-2.03-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47a8.9 8.9 0 0 1-1.65-2.05c-.17-.3 0-.46.13-.6.13-.14.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.48 1.78.77 2.48.84 3.37.7.51-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35z"/></svg>
      </a>
      <a href="${contact.facebook}" target="_blank" rel="noopener" aria-label="Find AquaLuSan on Facebook">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12.07C22 6.5 17.52 2 12 2S2 6.5 2 12.07C2 17.1 5.66 21.24 10.44 22v-7.01H7.9v-2.92h2.54V9.84c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.92h-2.34V22C18.34 21.24 22 17.1 22 12.07z"/></svg>
      </a>
      <a href="${contact.instagram}" target="_blank" rel="noopener" aria-label="Find AquaLuSan on Instagram">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zm5.25-3.25a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"/></svg>
      </a>
    </div>`;

  const page = document.body.getAttribute("data-page") || "";
  const isCurrent = (key) => (page === key ? ' aria-current="page"' : "");
  const servicesOpen = ["services", "rental", "packages", "maintenance"].includes(page);

  const logo = `
    <a class="logo" href="${contact.websiteUrl}" aria-label="AquaLuSan home">
      <img class="logo-img" src="images/logo.png?v=clear" alt="AquaLuSan">
    </a>`;

  const nav = `
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Open menu">
      <span></span><span></span><span></span>
    </button>
    <nav class="nav" id="site-nav">
      <a href="${contact.websiteUrl}"${isCurrent("home")}>Home</a>
      <a href="about.html"${isCurrent("about")}>About</a>
      <div class="nav-item${servicesOpen ? " open" : ""}">
        <button class="drop-toggle" type="button" aria-expanded="${servicesOpen}" aria-controls="services-menu">Services</button>
        <div class="dropdown" id="services-menu">
          <a href="packages.html"${isCurrent("packages")}>All-in-one aquarium packages</a>
          <a href="rental.html"${page === "rental" || page === "maintenance" ? ' aria-current="page"' : ""}>Aquarium rental and maintenance</a>
        </div>
      </div>
      <a href="portfolio.html"${isCurrent("portfolio")}>Portfolio</a>
      <a href="contact.html"${isCurrent("contact")}>Contact</a>
      <div class="nav-cta">
        <a class="btn btn-primary" href="request-a-quote.html"${isCurrent("quote")}>Request a Quote</a>
      </div>
    </nav>`;

  const headerEl = document.getElementById("site-header");
  if (headerEl) {
    headerEl.className = "site-header";
    headerEl.innerHTML = `<div class="wrap header-inner">${logo}${nav}</div>`;
  }

  const footerEl = document.getElementById("site-footer");
  if (footerEl) {
    footerEl.className = "site-footer";
    footerEl.innerHTML = `
      <div class="wrap">
        <div class="footer-grid">
          <div>
            <h4>AquaLuSan</h4>
            <p>Professional aquarium design, aquascaping, installation and ongoing maintenance for restaurants, cafés, offices, hotels, retail stores, shopping centres and entertainment venues.</p>
          </div>
          <div>
            <h4>Services</h4>
            <div class="footer-links">
              <a href="packages.html">All-in-one aquarium packages</a>
              <a href="rental.html">Aquarium rental and maintenance</a>
            </div>
          </div>
          <div>
            <h4>Plan a project</h4>
            <div class="footer-links">
              <a href="about.html">About</a>
              <a href="request-a-quote.html">Request a Quote</a>
              <a href="book-a-consultation.html">Book a Consultation</a>
              <a href="portfolio.html">Portfolio</a>
              <a href="contact.html">Contact</a>
            </div>
          </div>
          <div>
            <h4>Contact</h4>
            <div class="footer-links">
              <span>Eric Liu</span>
              <a href="tel:${contact.phoneTel}">0456 493 395</a>
              <a href="mailto:${contact.email}">${contact.email}</a>
            </div>
            ${socials}
          </div>
        </div>
        <div class="legal">© AquaLuSan. Bringing the beauty of aquatic life closer to you.</div>
      </div>`;
  }

  const cta = document.createElement("div");
  cta.className = "mobile-cta";
  cta.innerHTML = `
    <a class="btn btn-primary" href="request-a-quote.html">Request a Quote</a>`;
  document.body.appendChild(cta);

  document.querySelectorAll("a[data-phone]").forEach((el) => {
    el.href = `tel:${contact.phoneTel}`;
    if (el.hasAttribute("data-phone-label")) el.textContent = contact.phoneDisplay;
  });
  document.querySelectorAll("[data-contact-name]").forEach((el) => {
    el.textContent = contact.name;
  });
  document.querySelectorAll("a[data-web]").forEach((el) => {
    el.href = contact.websiteUrl;
    if (el.hasAttribute("data-web-label")) el.textContent = contact.websiteDisplay;
  });
  document.querySelectorAll("[data-socials]").forEach((el) => {
    el.innerHTML = socials;
  });
  document.querySelectorAll("a[data-whatsapp]").forEach((el) => {
    el.href = `https://wa.me/${contact.whatsapp}`;
  });

  const toggle = document.querySelector(".nav-toggle");
  const navEl = document.getElementById("site-nav");
  if (toggle && navEl) {
    toggle.addEventListener("click", () => {
      const open = navEl.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  const dropToggle = document.querySelector(".drop-toggle");
  const navItem = document.querySelector(".nav-item");
  if (dropToggle && navItem) {
    dropToggle.addEventListener("click", () => {
      const open = navItem.classList.toggle("open");
      dropToggle.setAttribute("aria-expanded", String(open));
    });
  }

  const params = new URLSearchParams(window.location.search);
  const serviceSelect = document.getElementById("service");
  if (serviceSelect && params.get("service")) {
    const wanted = params.get("service");
    [...serviceSelect.options].forEach((opt) => {
      if (opt.value === wanted || opt.textContent === wanted) serviceSelect.value = opt.value || opt.textContent;
    });
  }

  const sizeInput = document.getElementById("tank-size");
  const sizeKnownRadios = document.querySelectorAll('input[name="Size known"]');
  const syncSizeField = () => {
    if (!sizeInput) return;
    const known = [...sizeKnownRadios].some((radio) => radio.checked && radio.value === "I know the size");
    sizeInput.disabled = !known;
    sizeInput.required = known;
    if (!known) sizeInput.value = "";
  };
  sizeKnownRadios.forEach((radio) => radio.addEventListener("change", syncSizeField));
  syncSizeField();

  if (params.get("package")) {
    const pkg = params.get("package");
    const styleSelect = document.getElementById("style");
    const styleMatch = ["Tropical", "Goldfish", "Cichlids"].find((name) => name.toLowerCase() === pkg.toLowerCase());
    if (styleMatch && styleSelect) {
      styleSelect.value = styleMatch;
    } else if (sizeInput) {
      const knowRadio = document.querySelector('input[name="Size known"][value="I know the size"]');
      if (knowRadio) knowRadio.checked = true;
      syncSizeField();
      sizeInput.value = pkg;
    }
  }

  const notes = document.getElementById("notes");
  const countEl = document.querySelector("[data-count]");
  const updateCount = () => {
    if (notes && countEl) countEl.textContent = String(notes.value.length);
  };
  if (notes) notes.addEventListener("input", updateCount);
  updateCount();

  document.querySelectorAll("form[data-lead]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const lead = form.getAttribute("data-lead") || "enquiry";
      const lines = [`AquaLuSan ${lead}`];
      data.forEach((value, key) => {
        if (value !== "") lines.push(`${key}: ${value}`);
      });
      const body = lines.join("\n");
      const alertBox = form.querySelector(".alert");
      const subject = encodeURIComponent(`AquaLuSan ${lead}`);
      window.location.href = `mailto:${contact.email}?subject=${subject}&body=${encodeURIComponent(body)}`;
      if (alertBox) {
        alertBox.classList.add("show");
        alertBox.textContent = `Your email app should open with this message for ${contact.email}.`;
      }
    });
  });

  const albums = {
    tropical: [
      { src: "images/section-bg.jpg", alt: "Tropical community aquarium with angelfish and tetras" },
      { src: "images/tropical-2.jpg", alt: "Tropical aquarium with angelfish, tetras and driftwood" }
    ]
  };

  const albumRoot = document.createElement("div");
  albumRoot.className = "album";
  albumRoot.hidden = true;
  albumRoot.setAttribute("role", "dialog");
  albumRoot.setAttribute("aria-modal", "true");
  albumRoot.setAttribute("aria-label", "Tank photos");
  albumRoot.innerHTML = `
    <div class="album-toolbar">
      <p class="album-count" data-album-count></p>
      <button class="btn btn-secondary" type="button" data-album-close>Close</button>
    </div>
    <div class="album-stage">
      <img data-album-image alt="">
    </div>
    <div class="album-nav">
      <button class="btn btn-secondary" type="button" data-album-prev>Previous</button>
      <button class="btn btn-secondary" type="button" data-album-next>Next</button>
    </div>`;
  document.body.appendChild(albumRoot);

  const albumImage = albumRoot.querySelector("[data-album-image]");
  const albumCount = albumRoot.querySelector("[data-album-count]");
  let albumPhotos = [];
  let albumIndex = 0;

  const showAlbumPhoto = () => {
    const photo = albumPhotos[albumIndex];
    if (!photo) return;
    albumImage.src = photo.src;
    albumImage.alt = photo.alt;
    albumCount.textContent = `${albumIndex + 1} / ${albumPhotos.length}`;
  };

  const closeAlbum = () => {
    albumRoot.hidden = true;
    document.body.style.overflow = "";
  };

  const openAlbum = (name) => {
    albumPhotos = albums[name] || [];
    if (!albumPhotos.length) return;
    albumIndex = 0;
    showAlbumPhoto();
    albumRoot.hidden = false;
    document.body.style.overflow = "hidden";
  };

  document.querySelectorAll("[data-album]").forEach((el) => {
    el.addEventListener("click", (event) => {
      event.preventDefault();
      openAlbum(el.getAttribute("data-album"));
    });
  });
  albumRoot.querySelector("[data-album-close]").addEventListener("click", closeAlbum);
  albumRoot.querySelector("[data-album-prev]").addEventListener("click", () => {
    albumIndex = (albumIndex - 1 + albumPhotos.length) % albumPhotos.length;
    showAlbumPhoto();
  });
  albumRoot.querySelector("[data-album-next]").addEventListener("click", () => {
    albumIndex = (albumIndex + 1) % albumPhotos.length;
    showAlbumPhoto();
  });
  albumRoot.addEventListener("click", (event) => {
    if (event.target === albumRoot) closeAlbum();
  });
  document.addEventListener("keydown", (event) => {
    if (albumRoot.hidden) return;
    if (event.key === "Escape") closeAlbum();
    if (event.key === "ArrowLeft") albumRoot.querySelector("[data-album-prev]").click();
    if (event.key === "ArrowRight") albumRoot.querySelector("[data-album-next]").click();
  });

  const adTrigger = document.querySelector(".ad-trigger");
  const adDetails = document.getElementById("ad-details");
  if (adTrigger && adDetails) {
    const openAd = (open) => {
      adTrigger.setAttribute("aria-expanded", String(open));
      adDetails.hidden = !open;
      if (open) adDetails.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    adTrigger.addEventListener("click", () => {
      openAd(adTrigger.getAttribute("aria-expanded") !== "true");
    });
    if (window.location.hash === "#ad-details" || window.location.hash === "#ad") {
      openAd(true);
    }
  }
})();
