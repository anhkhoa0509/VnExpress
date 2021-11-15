let today = new Date();
let date =
  today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
let day_name = "";
let current_day = today.getDay();
switch (current_day) {
  case 0:
    day_name = "Chủ nhật";
    break;
  case 1:
    day_name = "Thứ hai";
    break;
  case 2:
    day_name = "Thứ ba";
    break;
  case 3:
    day_name = "Thứ tư";
    break;
  case 4:
    day_name = "Thứ năm";
    break;
  case 5:
    day_name = "Thứ sau";
    break;
  case 6:
    day_name = "Thứ bảy";
}

document.getElementById("today").innerHTML = day_name + ", " + date;

function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");
  const tamsu = document.getElementById("tamsu");
  const hai = document.getElementById("hai");

  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 52) {
    scrollTop.classList.add("show-scroll");
    tamsu.classList.add("d-none");
    hai.classList.add("d-none");
  } else {
    scrollTop.classList.remove("show-scroll");
    tamsu.classList.remove("d-none");
    hai.classList.remove("d-none");
  }
}
window.addEventListener("scroll", scrollTop);

$(document).ready(function () {
  $("#lightSlider").lightSlider({
    item: 1,
    autoWidth: false,
    slideMove: 0, // slidemove will be 1 if loop is true
    slideMargin: 5,

    addClass: "",
    mode: "slide",
    // useCSS: true,
    cssEasing: "ease", //'cubic-bezier(0.25, 0, 0.25, 1)',//
    easing: "linear", //'for jquery animation',////

    speed: 400, //ms'
    auto: true,
    loop: true,
    slideEndAnimation: true,
    pause: 4000,

    keyPress: false,

    rtl: false,
    adaptiveHeight: false,

    vertical: false,
    verticalHeight: 500,
    vThumbWidth: 100,

    thumbItem: 10,
    pager: true,
    gallery: false,
    galleryMargin: 5,
    thumbMargin: 5,
    currentPagerPosition: "middle",

    enableTouch: true,
    enableDrag: true,
    freeMove: true,
    swipeThreshold: 40,

    responsive: [],

    onBeforeStart: function (el) {},
    onSliderLoad: function (el) {},
    onBeforeSlide: function (el) {},
    onAfterSlide: function (el) {},
    onBeforeNextSlide: function (el) {},
    onBeforePrevSlide: function (el) {},
  });
});
