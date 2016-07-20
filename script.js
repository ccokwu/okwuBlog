
$(document).ready(function() {
  $("#nav").hide()
    .slideDown(2000)
   .delay(5000)
    // .slideUp(2000)
    .mouseenter(function() {
      $(this).css("display", "inline")
     });
  // $(".toggle").mouseenter(function() {
  //   $("#nav").slideDown(1000).delay(5000);
  // }).mouseleave(function() {
  //   $("#nav").slideUp(2000);
  // })

  // $("#map").googleMap();
  // $("#map").addMarker({
  //   zoom: 10,
  //   coords: [48.895651, 2.290569],
  //   url:"index.html",
  //   type: "ROADMAP"
  // });

  $(".contactHeader").on("click", function(){
    $(this).next().toggle();
  });
});
