//MENU
$(document).ready(function() {

    function toggleSidebar() {
      $(".button").toggleClass("active");
      $(".sidebar, .nav-right").toggleClass("move-to-left");
      $(".sidebar-item").toggleClass("active");
    }
  
    $(".button").on("click tap", function() {
      toggleSidebar();
    });
  
    $(document).keyup(function(e) {
      if (e.keyCode === 27) {
        toggleSidebar();
      }
    });
  
  });

if (document.querySelector(".mySwiper")) {
   // Home Page Image Carousel Initializer
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    slidesPerColumn: 1,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // Media Query Breakpoints
    breakpoints: {
      640: {
        slidesPerView: 1,
        slidesPerColumn: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 0,
      },
    },
  });
}
 
