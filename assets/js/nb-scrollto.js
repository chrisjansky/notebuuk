// Scroll to anchor.
$("[data-scrollto]").click(function() {
  $("html, body").animate({
    scrollTop: $($(this).attr("href")).offset().top
  }, durBasic, transFastOut);
  return false
});