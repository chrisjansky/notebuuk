$(document).on("ready", function() {

  var controller = new ScrollMagic({
    globalSceneOptions: {
      triggerHook: 0,
      duration: $(window).height()
    }
  });

  new ScrollScene({triggerElement: "#parallax-1"})
    .setTween(TweenMax.to("#parallax-1--child", 1, {
      css: {transform: "translate3d(0, -250px, 0)"}, ease: Linear.easeNone
    }))
    .addTo(controller)
    .addIndicators({zindex: 1, suffix: "1"});

});