const animItems = document.querySelectorAll("._anim-items");

if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("_anim");
      } else {
        if (!animItem.classList.contains("_anim-no-hide")) {
          animItem.classList.remove("_anim");
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }

  setTimeout(() => {
    animOnScroll();
  }, 300);
}

$(".slick__list").slick({
  arrow: true,
  infinite: true,
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1315,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 1180,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".benefits__slick").slick({
  fade: true,
  cssEase: "linear",
  arrow: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  dots: false,
  autoplay: true,
  autoplaySpeed: 2000,
});

var tabs = document.getElementById("main");
tabs.addEventListener("click", function (ev) {
  var hideElement = document.getElementsByClassName("tab");
  for (i = 0; i < hideElement.length; i++) {
    hideElement[i].classList.remove("active");
  }
  var showElemtn = document.querySelectorAll("ul#" + ev.target.id + "")[0];
  showElemtn.classList.toggle("active");
});

$(function () {
  $(".footer__telephone").mask("+7(000)000-00-00");
});

$(document).ready(function () {
  $(".works__link").fancybox({
    transitionIn: "elastic",
    transitionOut: "elastic",
    speedIn: 500,
    speedOut: 500,
    hideOnOverlayClick: false,
    titlePosition: "over",
  });
});

/*$(document).ready(function () {
  $(".burger").click(function () {
    $(
      ".burger, .nav__menu, .nav, .nav__menu-text, .nav__menu-item"
    ).toggleClass("power");
    $("body").toggleClass("lock");
  });
});*/
$(".burger").click(function () {
  $(".burger, .nav__menu, .nav, .nav__menu-text, .nav__menu-item").toggleClass(
    "power"
  );
  $("body").toggleClass("lock");
});

$(document).click(function (event) {
  if ($(event.target).closest(".burger").length) return;
  $(".burger, .nav__menu, .nav, .nav__menu-text, .nav__menu-item").removeClass(
    "power"
  );
  $("body").removeClass("lock");
  event.stopPropagation();
});
