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

  // --- Slideshow ---
  let slideIndex = 1;
  // Chama showSlides APENAS se os elementos existirem.
  // É mais seguro chamar dentro de uma verificação ou após garantir que o HTML do slideshow está no DOM.
  // A função showSlides já tem uma verificação interna, o que é bom.
  showSlides(slideIndex);

  // Funções globais para os botões onclick no HTML
  window.plusSlides = function (n) {
    // Expor ao escopo global
    showSlides((slideIndex += n));
  };

  window.currentSlide = function (n) {
    // Expor ao escopo global
    showSlides((slideIndex = n));
  };

  function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    if (slides.length === 0 || dots.length === 0) {
      console.warn("Elementos do slideshow (slides ou dots) não encontrados.");
      return;
    }

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }
});
