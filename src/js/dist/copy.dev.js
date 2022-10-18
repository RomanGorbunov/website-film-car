"use strict";

$(".burger").click(function () {
  $(".burger, .nav__menu, .nav, .nav__menu-text, .nav__menu-item").toggleClass("power");
  $("body").toggleClass("lock");
});
$(document).click(function (event) {
  if ($(event.target).closest(".burger").length) return;
  $(".burger, .nav__menu, .nav, .nav__menu-text, .nav__menu-item").removeClass("power");
  $("body").removeClass("lock");
  event.stopPropagation();
});