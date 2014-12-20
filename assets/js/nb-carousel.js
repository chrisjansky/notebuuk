var
  carouselStartClass = "carousel--start",
  carouselEndClass = "carousel--end"

$("[data-carousel]").each(function(index, instance) {
  var carouselSwiper = new Swiper(instance, {
    slidesPerView: "auto",
    calculateHeight: true,
    keyboardControl: true,
    centeredSlides: true,
    loop: true,
    loopedSlides: 2
  });

  $(instance).find("[data-swiper--prev]").on("click", function(event) {
    event.preventDefault();
    carouselSwiper.swipePrev();
  });
  $(instance).find("[data-swiper--next]").on("click", function(event) {
    event.preventDefault();
    carouselSwiper.swipeNext();
  });

});