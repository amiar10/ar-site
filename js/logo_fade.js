$(window).scroll(function(){
    $(".top").css("opacity", 1 - $(window).scrollTop() / 250);
    $(".bottom").css("opacity", $(window).scrollTop() * 250);
   /*
      $(".top").fadeOut(500, function(){});
      $( ".bottom" ).fadeTo( "slow" , 0.5, function() {
    // Animation complete.
  });*/
  });
  /*
  $(window).scroll(function() {
  var scrollTop = $(this).scrollTop();

  $('.top').css({
    opacity: function() {
      var elementHeight = $(this).height();
      return 1 - (elementHeight - scrollTop) / elementHeight;
    }
  });
});*/

css

.bottom {
  filter: invert(1);
  opacity: 0;
}

.img-container { position: relative; }

.img-container .top {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

