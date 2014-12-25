function chjStopmotion(config) {

  var defaults = {
    selector: "[data-stopmotion]",
    zoneArea: .5,
  };

  config = $.extend({}, defaults, config);

  var
    viewHeight,
    viewZone = [],
    triggerSteps = [],

    target = document.querySelector(config.selector),
    children = target.children,
    childCount = children.length,

    parent = target.parentNode;

  this.getParams = function() {
    viewHeight = window.innerHeight

    viewZone.active = viewHeight * config.zoneArea
    viewZone.passive = (viewHeight - viewZone.active) / 2
    viewZone.step = viewZone.active / childCount

    parentOffsetMid = $(parent).offset().top + parent.offsetHeight / 2

    for (var i = 0; i < childCount - 1; i++) {
      triggerSteps[i] = parentOffsetMid - viewHeight + viewZone.passive + (viewZone.step * (i + 1))
    }
  }
  // Execute on init
  this.getParams();

  this.check = function(position) {
    for (var i = triggerSteps.length; i > 0; i--) {
      if (position > triggerSteps[i - 1]) {
        children[i].style.opacity = "1";
      } else {
        children[i].style.opacity = "0";
      }
    }
  }

}

