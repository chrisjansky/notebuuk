function chjChangeBg(config) {

  var defaults = {
    selector: "[data-stopmotion]"
  };

  var
    elBg1 = document.getElementById("js-bg1"),
    elBg2 = document.getElementById("js-bg2"),
    elBg3 = document.getElementById("js-bg3");
    // test4 = document.getElementById("test4");

  config = $.extend({}, defaults, config);

  var
    viewHeight = [],
    bgTrigger = [],
    // Get first in query, for now
    element = document.querySelectorAll(config.selector)[0],
    elProperties = [];

  this.getParams = function() {
    viewHeight.full = window.innerHeight
    viewHeight.third = viewHeight.full / 3

    elProperties.top = $(element).offset().top
    elProperties.half = element.offsetHeight / 2

    bgTrigger.first = elProperties.top + elProperties.half - viewHeight.full + viewHeight.third
    bgTrigger.second = bgTrigger.first + viewHeight.third
  }
  // Execute on init
  this.getParams();

  this.check = function(position) {
    // test1.innerHTML = window.pageYOffset;
    // test2.innerHTML = "start: " + bgTrigger.first;
    // test3.innerHTML = "mid: " + bgTrigger.second;

    if (position < bgTrigger.first) {
      // test4.innerHTML = "1";
      elBg1.style.opacity = "1";
      elBg2.style.opacity = "0";
      elBg3.style.opacity = "0";
    } else if (position > bgTrigger.second) {
      // test4.innerHTML = "3";
      elBg1.style.opacity = "0";
      elBg2.style.opacity = "0";
      elBg3.style.opacity = "1";
    } else {
      // test4.innerHTML = "2";
      elBg1.style.opacity = "0";
      elBg2.style.opacity = "1";
      elBg3.style.opacity = "0";
    }
  }
}

