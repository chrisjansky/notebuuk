document.onreadystatechange = function() {

  if (document.readyState === "complete" && isDesktop()) {

    var rAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function(callback){ window.setTimeout(callback, 1000/60) }

    var
      scrollPos = -1,
      nbParallax = new chjParallax(),
      nbChangeBg = new chjStopmotion();

    (function nbLoop() {
      if (scrollPos == window.pageYOffset) {
        // Exit and run again
        rAF(nbLoop);
        return false;
      } else {
        scrollPos = window.pageYOffset;
      }

      nbParallax.iterate(scrollPos);
      nbChangeBg.check(scrollPos);

      rAF(nbLoop);
    })();

    // Get parameters again on resize debounce
    $(window).on("resize orientationchange", function() {

      clearTimeout(this.id)
      
      this.id = setTimeout(function() {
        // Force recalculation
        scrollPos = -1

        nbParallax.getParams();
        nbChangeBg.getParams();
      }, durBasic)

    });

  }
  
}