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

  // --- Aplicar Tema Salvo ao Carregar a Página ---
  const savedTheme = localStorage.getItem("selectedTheme");
  if (savedTheme) {
    // Remove temas que possam estar no body por padrão ou de um carregamento anterior sem JS
    document.body.classList.remove("dark-theme", "contrast-theme");

    if (savedTheme === "dark") {
      document.body.classList.add("dark-theme");
    } else if (savedTheme === "contrast") {
      document.body.classList.add("contrast-theme");
    }
  }

  // --- Troca de Tema ---
  const themeIcons = document.querySelectorAll(".theme-icon");
  themeIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
      const theme = this.dataset.color;

      document.body.classList.remove("dark-theme", "contrast-theme"); // Remove temas anteriores

      if (theme === "dark") {
        document.body.classList.add("dark-theme");
        localStorage.setItem("selectedTheme", "dark"); // Salva a escolha
      } else if (theme === "contrast") {
        document.body.classList.add("contrast-theme");
        localStorage.setItem("selectedTheme", "contrast"); // Salva a escolha
      } else {
        // Se o tema for 'default' ou qualquer outro valor não reconhecido,
        // consideramos como tema padrão
        localStorage.setItem("selectedTheme", "default"); // Salva a escolha 'default'
      }
    });
  });

  // --- Slideshow ---
  let slideIndex = 1;
  showSlides(slideIndex);

  // Funções globais para os botões onclick no HTML
  window.plusSlides = function (n) {
    showSlides((slideIndex += n));
  };

  window.currentSlide = function (n) {
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
