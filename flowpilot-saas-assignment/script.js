const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuToggle.textContent = isOpen ? "×" : "☰";
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    menuToggle.textContent = "☰";
  });
});

const form = document.getElementById("enquiryForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  message.classList.remove("error");

  if (!form.checkValidity()) {
    form.reportValidity();
    message.textContent = "Please complete all fields with valid information.";
    message.classList.add("error");
    return;
  }

  const name = document.getElementById("name").value.trim();
  message.textContent = `Thanks, ${name}! Your demo request has been recorded for this demo.`;
  form.reset();
});
