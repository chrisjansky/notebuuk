function chjParallax(config) {

  var defaults = {
    selector: "[data-parallax]",
    scrollSpeed: .25,
    triggerOffset: .05
  };

  config = $.extend({}, defaults, config);

  var
    viewHeight,

    elements = document.querySelectorAll(config.selector),
    elAmount = elements.length,
    elMatrix = [];

  // Detect CSS Transform
  var cssTransform = (function() {
    var
      prefixes = "transform webkitTransform mozTransform oTransform msTransform".split(" "),
      el = document.createElement("div"),
      cssTransform,
      i = 0

    while (cssTransform === undefined) { 
      cssTransform = document.createElement("div").style[prefixes[i]] != undefined ? prefixes[i] : undefined
      i++
    }
    return cssTransform
   })();

  // Pre calculate sizes to get better perfs
  this.getParams = function() {
    viewHeight = window.innerHeight

    var trigger = Math.round(viewHeight * config.triggerOffset)

    var i = 0
    for (i = 0; i < elAmount; i++) {
      elMatrix[i] = elMatrix[i] || { el: elements[i] }

      // Start at 0 if it's the first in array
      elMatrix[i].start = elMatrix[i-1] ? $(elMatrix[i].el).parent().offset().top - trigger : 0
      elMatrix[i].stop = elMatrix[i].start + elMatrix[i].el.parentNode.offsetHeight + trigger
    }
  }
  // Execute on init
  this.getParams();

  function setTop(m, t) {
    if (cssTransform) 
      m.el.style[cssTransform] = "translate3d(0, "+ t +"px,0)"
    else
      m.el.style["top"] = t
  }

  this.iterate = function(position) {
    var i = 0
    for (i = 0; i < elAmount; i++) {
      // Check if visible
      if (position >= elMatrix[i].start - viewHeight && position <= elMatrix[i].stop) {
        elMatrix[i].el.style.opacity = "1"

        setTop(elMatrix[i], (elMatrix[i].start - position) * config.scrollSpeed)
      } else {
        elMatrix[i].el.style.opacity = "0"
      }
    }
  }

}