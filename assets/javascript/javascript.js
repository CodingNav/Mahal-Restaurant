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

  // Home Page Image Carousel Initializer
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: 15,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });