(function(window, $) {

var noop = function(){};
  
$.fn.extend({
  playAnim: function(x, delay, fn) {
    delay = delay || 1300;
    fn = fn || noop;
    this.removeClass().addClass(x + ' animated');
    var wait = window.setTimeout(fn, delay);
  }
});
  
$(document).ready(function(){
  var $logo = $('#logo-animation');
  $logo.playAnim("bounceIn", 1300, function(){
    $logo.removeClass();
    $logo.playAnim("bounceOutUp");
  });
});

})(window, jQuery);
