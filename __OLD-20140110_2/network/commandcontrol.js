// http://css-tricks.com/thinking-async/

var scripts =   ["config.js", "boilerplate.js"];

scripts.forEach(function(src) { 
  var resource = document.createElement('script'); 
  resource.src = src;
  var script = document.getElementsByTagName('script')[0];
  script.parentNode.insertBefore(resource, script);
});