(function () {
  const contact = {
    name: "Eric Liu",
    phoneDisplay: "0456 493 395",
    phoneTel: "+61456493395",
    whatsapp: "61456493395",
    websiteDisplay: "aqualusan.com.au",
    websiteUrl: "https://aqualusan.com.au"
  };

  const page = document.body.getAttribute("data-page") || "";
  const isCurrent = (key) => (page === key ? ' aria-current="page"' : "");
  const servicesOpen = ["services", "commercial", "rental", "packages", "maintenance"].includes(page);

  const logo = `
    <a class="logo" href="${contact.websiteUrl}" aria-label="AquaLuSan home">
      <img class="logo-img" src="images/logo.jpg?v=banner" alt="AquaLuSan">
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
          <a href="services.html"${isCurrent("services")}>All services</a>
          <a href="commercial.html"${isCurrent("commercial")}>Commercial aquarium services</a>
          <a href="rental.html"${isCurrent("rental")}>Aquarium rental</a>
          <a href="packages.html"${isCurrent("packages")}>All-in-one packages</a>
          <a href="maintenance.html"${isCurrent("maintenance")}>Aquarium maintenance</a>
        </div>
      </div>
      <a href="portfolio.html"${isCurrent("portfolio")}>Portfolio</a>
      <a href="contact.html"${isCurrent("contact")}>Contact</a>
      <div class="nav-cta">
        <a class="btn btn-secondary" href="request-a-quote.html"${isCurrent("quote")}>Request a Quote</a>
        <a class="btn btn-primary" href="book-a-consultation.html"${isCurrent("consult")}>Book a Consultation</a>
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
            <div class="btn-row">
              <a class="btn btn-call" href="tel:${contact.phoneTel}">Call AquaLuSan</a>
              <a class="btn btn-whatsapp" href="https://wa.me/${contact.whatsapp}" target="_blank" rel="noopener">WhatsApp Us</a>
            </div>
          </div>
          <div>
            <h4>Services</h4>
            <div class="footer-links">
              <a href="services.html">Professional aquarium design</a>
              <a href="services.html">Aquascaping</a>
              <a href="services.html">Aquarium installation</a>
              <a href="commercial.html">Commercial aquarium services</a>
              <a href="rental.html">Aquarium rental</a>
              <a href="packages.html">All-in-one aquarium packages</a>
              <a href="maintenance.html">Aquarium maintenance</a>
              <a href="about.html">Import &amp; wholesale</a>
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
              <span>${contact.name}</span>
              <a href="tel:${contact.phoneTel}">${contact.phoneDisplay}</a>
              <a href="${contact.websiteUrl}">${contact.websiteDisplay}</a>
            </div>
          </div>
        </div>
        <div class="legal">© AquaLuSan. Bringing the beauty of aquatic life closer to you.</div>
      </div>`;
  }

  const cta = document.createElement("div");
  cta.className = "mobile-cta";
  cta.innerHTML = `
    <a class="btn btn-primary" href="request-a-quote.html">Request a Quote</a>
    <a class="btn btn-call" href="tel:${contact.phoneTel}">Call AquaLuSan</a>`;
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
  const notes = document.getElementById("notes");
  if (notes && params.get("package")) {
    notes.value = `Interested in the ${params.get("package")} package. `;
  }

  document.querySelectorAll("form[data-lead]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const lines = [`AquaLuSan ${form.getAttribute("data-lead")} enquiry`];
      data.forEach((value, key) => lines.push(`${key}: ${value}`));
      const body = encodeURIComponent(lines.join("\n"));
      window.open(`https://wa.me/${contact.whatsapp}?text=${body}`, "_blank", "noopener");
      const alertBox = form.querySelector(".alert");
      if (alertBox) {
        alertBox.classList.add("show");
        alertBox.textContent = "WhatsApp should open with this enquiry for Eric Liu at AquaLuSan. If it does not, call 0456 493 395.";
      }
    });
  });
})();
