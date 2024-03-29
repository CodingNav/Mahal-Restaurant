//MENU
$(document).ready(function () {

  function toggleSidebar() {
    $(".button").toggleClass("active");
    $(".sidebar, .nav-right").toggleClass("move-to-left");
    $(".sidebar-item").toggleClass("active");
  }

  $(".button").on("click tap", function () {
    toggleSidebar();
  });

  $(document).keyup(function (e) {
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
        grid: {
          rows: 1,
        }
      },
      768: {
        slidesPerView: 2,
        grid: {
          rows: 2,
        }
      },
      1024: {
        slidesPerView: 3,
        grid: {
          rows: 2,
        }
      },
    },
  });
}


if (window.location.pathname.indexOf("/contact.html") > -1) {
  var contactForm = document.querySelector("#contact-form");

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var nameInput = document.querySelector("#name-input");
    var emailInput = document.querySelector("#email-input");
    var numberInput = document.querySelector("#number-input");
    var subjectInput = document.querySelector("#subject-input");
    var messageInput = document.querySelector("#message-input");
    var submitButton = document.querySelector("#submit-button");

    submitButton.disabled = true;

    var emailData = {
      name: nameInput.value,
      email: emailInput.value,
      number: numberInput.value,
      subject: subjectInput.value,
      message: messageInput.value
    }

    fetch('https://mahal-email.herokuapp.com/api/send-email', {
      method: 'post',
      body: JSON.stringify(emailData),
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      contactForm.innerHTML = `<p class="text-center">Thank you for submitting.<br>We will be in contact with you soon.</p>`
    });
  });

  document.addEventListener('scroll', function () {

  });
}