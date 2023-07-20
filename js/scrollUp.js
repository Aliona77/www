
document.addEventListener("DOMContentLoaded", function () {
  const footer = document.getElementById("footer");
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  scrollToTopBtn.style.display = "none";

  function isFooterInView() {
    const footerOffset = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    return footerOffset < windowHeight;
  }

  function toggleScrollToTopButton() {
    scrollToTopBtn.style.display = isFooterInView() ? "flex" : "none";
  }

  toggleScrollToTopButton();
  window.addEventListener("scroll", toggleScrollToTopButton);
});
