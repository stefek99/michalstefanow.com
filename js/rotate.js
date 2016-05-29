$(function() {
  var rotateInterval;

  var _startRotation = function() {
    var _rotate = function() {
      var newX = Math.random() * 360;
      var newY = Math.random() * 360;
      var newZ = Math.random() * 360;
      var newCSS = "rotateX(" + newX + "deg) rotateY(" + newY + "deg) rotateZ(" + newZ + "deg)";
      $("#cube").css({"transform": newCSS});
    };
    rotateInterval = setInterval(_rotate, 9000); // interval is less than transition time... (in that way it appears smoother)
    _rotate(); 
  }

  var _pauseRotation = function() {
    clearInterval(rotateInterval);
    var currentCSS = $("#cube").css("transform");
    $("#cube").attr("style", "");
    $("#cube").css("transform", currentCSS);
  }

  var cubeWrapperTransforms = [];
  var latestCubeWrapperTransform;

  var dragging = false;
  var initial;

  $("html")
    .on("mousedown touchstart", function(e) {
      initial = (e.type === "touchstart" ? e.originalEvent.touches[0] : e);
      dragging = true;
      _pauseRotation();
      // return false; --> we want to allow particles interaction
    })        
    .on("mouseup touchend", function(e) {
      cubeWrapperTransforms.push(latestCubeWrapperTransform);
      dragging = false;
      // _startRotation();
      // return false;
    })
    .on("mousemove touchmove", function(e) {
      if(dragging) {

        var yTotalDiff = (e.type === "touchmove" ? e.originalEvent.touches[0].pageY : e.pageY) - initial.pageY;
        var xTotalDiff = (e.type === "touchmove" ? e.originalEvent.touches[0].pageX : e.pageX) - initial.pageX;

        var yVal = ((window.innerHeight - yTotalDiff) / window.innerHeight) * 360;
        var xVal = ((window.innerWidth - xTotalDiff) / window.innerWidth) * 360;

        latestCubeWrapperTransform = "rotateY(-" + xVal + "deg) rotateX(" + yVal + "deg)";

        var transform = cubeWrapperTransforms.join(" ") + latestCubeWrapperTransform;

        $("#cube-wrapper").css({"transform": transform});
      }
      return false;
    });

  // _startRotation();

})