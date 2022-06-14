// Navbar Scrolled overlay
$(function () {
  $(document).scroll(function () {
    var nav = $("#mainNavbar");
    nav.toggleClass("scrolled", $(this).scrollTop() > nav.height());
  });
});

// Caret Rotation on Click and Exit
$(".dropdown-toggle").on("click", ".caret", function () {
  $(this).toggleClass("cara");
});

// Carousel
$(document).ready(function () {
  $("#carouselExampleIndicators2").carousel({
    pause: true,
    interval: false,
  });
});



$(".fa-shopping-cart").on("click", function () {
  console.log("Hello the button has been clicked");
});


