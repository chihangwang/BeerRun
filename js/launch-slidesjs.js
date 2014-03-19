$(document).ready(function(){
  $("#slides").slidesjs({
    width: 849,
    height: 313,
    navigation: false,

    play: {
      active: true,
      // [boolean] Generate the play and stop buttons.
      // You cannot use your own buttons. Sorry.
      effect: "slide",
      // [string] Can be either "slide" or "fade".
      interval: 5000,
      // [number] Time spent on each slide in milliseconds.
      auto: false,
      // [boolean] Start playing the slideshow on load.
      swap: false,
      // [boolean] show/hide stop and play buttons
      pauseOnHover: true,
      // [boolean] pause a playing slideshow on hover
      restartDelay: 3000
      // [number] restart delay on inactive slideshow
    }
  });
});
