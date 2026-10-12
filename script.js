const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

navLinks?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

// Add your authorized offer URL below before publishing.
// Example: const offerUrl = "https://your-approved-offer.example";
const offerUrl = "";
const offerButton = document.getElementById("offerButton");

if (offerUrl && offerButton) {
  offerButton.href = offerUrl;
  offerButton.target = "_blank";
  offerButton.rel = "noopener noreferrer";
} else if (offerButton) {
  offerButton.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Offers link is not set up yet. Add your authorized offer URL in script.js first.");
  });
}
