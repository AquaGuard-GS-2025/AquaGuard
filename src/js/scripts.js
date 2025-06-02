document.addEventListener("DOMContentLoaded", function () {
  // --- Menu Hambúrguer ---
  const menuToggle = document.querySelector(".menu-toggle");
  const navList = document.querySelector(".nav-list");

  if (menuToggle && navList) {
    menuToggle.addEventListener("click", () => {
      navList.classList.toggle("active");
      const isExpanded = navList.classList.contains("active");
      menuToggle.setAttribute("aria-expanded", isExpanded);
    });
  }

  // --- Troca de Tema ---
  const themeIcons = document.querySelectorAll(".theme-icon");
  themeIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
      const theme = this.dataset.color;
      document.body.classList.remove("dark-theme", "contrast-theme");
      if (theme === "dark") {
        document.body.classList.add("dark-theme");
      } else if (theme === "contrast") {
        document.body.classList.add("contrast-theme");
      }
    });
  });
});
