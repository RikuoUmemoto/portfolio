document.addEventListener("DOMContentLoaded", () => {
  const topButton = document.querySelector(".top-button");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      topButton.classList.add("is-visible");
    } else {
      topButton.classList.remove("is-visible");
    }
  });
});