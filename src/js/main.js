const $jq = jQuery.noConflict();

$jq(document).ready(function () {
  $jq(".slider-freelance").slick({
    // mobileFirst: true,
    variableWidth: true,
    centerMode: true,
    arrows: true,
    dots: false,
    slidesToShow: 3,
    autoplay: false,
    infinite: true,
    speed: 1800,
    adaptiveHeight: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    easing: "ease",
    draggable: true,
    // swipe: true,
    touchTreshold: 20,
    touchMove: false,
    prevArrow: document.querySelector("#prevArrow"),
    nextArrow: document.querySelector("#nextArrow"),
  });
});
