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

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();
    const phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {
      alert("Please enter a valid 10-digit contact number.");
      return;
    }

    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

    const subject = `Message from ${name}`;
    const body = `
Name: ${name}
Email: ${email}
Contact Number: ${phone}

Message:
${message}
    `;

    const mailtoLink = `mailto:ashwamedh.pappu@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  });
}
