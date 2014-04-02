// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs


$(document).ready(function() {

  var parallax = document.getElementsByClassName('background-image')[0];
  var foreground = document.getElementsByClassName('background-image-foreground')[0];
  var content = $('#header .row');

  window.onscroll = function(e) {
    if (window.scrollY < 700) {
      // note: most browsers presently use prefixes: webkitTransform, mozTransform etc.
      var translate3d = 'translate3d(0px,' + (window.scrollY/2) + 'px, 0px)';
      parallax.style.webkitTransform = translate3d;
      parallax.style.transform = translate3d;
      var opacity = 1-(window.scrollY*0.0009);
      if (opacity > 1) {
        foreground.style.opacity = 1-((opacity-1)*20);
      }

      // content.each(function(x,f){
      //   f.style.opacity = opacity;
      // });
    }
  };

  //$(".lettering p, .skills h3").lettering('words');
});