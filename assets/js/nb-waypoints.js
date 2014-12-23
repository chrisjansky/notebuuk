$(document).on("ready", function() {

  var
    $body = $("body");

  if (isDesktop()) {
    $body.addClass("body--is-desktop");

    // Add passive class on init.
    // Fucking hard to manipulate classes on SVG. Using: https://github.com/JeremiePat/SVG-DOM-helpers/
    var jsShapes = document.getElementsByClassName("js-shape");
    Array.prototype.forEach.call(jsShapes, function(shape) {
      shape.addClass("shape--is-passive");
    });

    var
      shapeWaypointDown = $(".js-shape").waypoint({
        handler: function(direction) {
          var thisElement = this.element;

          if (direction === "down") {
            thisElement.addClass("shape--is-active");
          } else {
            thisElement.removeClass("shape--is-active");
          }

        },
        // Top hit 75% of the screen
        offset: "75%"
      });

    var
      shapeWaypointUp = $(".js-shape").waypoint({
        handler: function(direction) {
          var thisElement = this.element;

          if (direction === "up") {
            thisElement.addClass("shape--is-active");
          } else {
            thisElement.removeClass("shape--is-active");
          }

        },
        // Middle of element hit 25% of the screen
        offset: function() {
          return (Waypoint.viewportHeight() * .25) - (this.element.clientHeight * .5)
        }
      });

  } else {
    $body.addClass("body--not-desktop");
  }

});