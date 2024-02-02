const bars = document.querySelector(".bars");
const navBar = document.querySelector(".nav-bar");

bars.onclick = function () {
    navBar.classList.toggle("active");
    bars.classList.toggle("cross");
};

// ocultar nav al hacer scroll
window.addEventListener("scroll", function () {
    // Verificar si el menú de navegación está activo 
    if (navBar.classList.contains("active")) {
        navBar.classList.remove("active");
        bars.classList.remove("cross");
    }
});

$(document).ready(function () {
    if ($(window).width() <= 900) {
      $('.cartas').slick({
        infinite: true,
        swipe: true,
        autoplay: true,
        autoplaySpeed: 10000,  
      });
    }
  
    $(window).resize(function () {
      if ($(window).width() <= 900) {

        if (!$('.cartas').hasClass('slick-initialized')) {
          $('.cartas').slick({
            infinite: true,
            swipe: true,
            autoplay: true,
            autoplaySpeed: 10000,  
          });
        }
      } else {
  
        if ($('.cartas').hasClass('slick-initialized')) {
          $('.cartas').slick('unslick');
        }
      }
    });
  });
  