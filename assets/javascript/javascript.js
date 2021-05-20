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