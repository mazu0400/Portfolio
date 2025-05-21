const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const form = document.getElementById("contactForm");
const confirmation = document.getElementById("confirmationMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (form.checkValidity()) {
    form.reset();

    confirmation.classList.remove("hidden");

    setTimeout(() => {
      confirmation.classList.add("hidden");
    }, 4000);
  } else {
    form.reportValidity();
  }
});
