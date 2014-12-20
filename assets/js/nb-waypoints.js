$(document).on("ready", function() {

  var
    $body = $("body");

  if (isDesktop()) {

    var
      waypointDown = $("[data-waypoint]").waypoint({
        handler: function(direction) {
          $(this.element).toggleClass("shapes--are-active", direction === "down")
        },
        offset: "50%"
      })

    var
      waypointUp = $("[data-waypoint]").waypoint({
        handler: function(direction) {
          $(this.element).toggleClass("shapes--are-active", direction === "up")
        },
        offset: function() {
          return (Waypoint.viewportHeight() * .5) - this.element.clientHeight
        }
      })

  }

});