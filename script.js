const contactLinks = document.querySelectorAll(".contact-link");

contactLinks.forEach((link) => {
  link.addEventListener("click", () => {
    console.log("Contact link clicked:", link.textContent.trim());
  });
});