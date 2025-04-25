// Mobile Menu Toggle
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

if (mobileMenu && navLinks) {
  mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// View More Clients Toggle
const toggleClientsBtn = document.getElementById("toggleClients");
const moreClientsSection = document.getElementById("moreClients");

if (toggleClientsBtn && moreClientsSection) {
  toggleClientsBtn.addEventListener("click", () => {
    const isVisible = moreClientsSection.style.display === "grid";

    moreClientsSection.style.display = isVisible ? "none" : "grid";
    toggleClientsBtn.textContent = isVisible ? "View More" : "View Less";
  });
}

// Contact Form Validation
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.querySelector('input[name="name"]').value.trim();
    const phone = document.querySelector('input[name="number"]').value.trim();
    const selectedSubject = document.querySelector(
      'select[name="subject"]'
    ).value;
    const message = document
      .querySelector('textarea[name="message"]')
      .value.trim();

    const phonePattern = /^\d{10}$/;

    if (!phonePattern.test(phone)) {
      alert("Please enter a valid 10-digit contact number.");
      return;
    }

    if (!name || !message) {
      alert("Please fill out all fields.");
      return;
    }

    const body = `
Name: ${name}
Contact Number: ${phone}

Message:
${message}
    `;

    const mailtoLink = `mailto:mauliops@hotmail.com?subject=${encodeURIComponent(
      selectedSubject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  });
}
