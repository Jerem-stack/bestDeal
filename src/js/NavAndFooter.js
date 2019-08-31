$(document).ready(function(){



  $(".dropdown").on('mouseover',function(){
    $(".test-drop").hide(300,'linear',function(){
      $(".test-drop").show(300, 'linear');
    });
  });

  $(".test-drop").on('mouseleave',function(){
    $(".test-drop").hide(100,'linear');
  });

  $(".header, .img-change-background").on('mouseover',function(){
    $(".test-drop").hide(100,'linear');
  });


});
function openNav() {
  $("#myNav").css('width',"100%");
  $("#myNav").css('z-index',"5000");
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  $("#myNav").css('width',"0%");
  $("#myNav").css('z-index',"0");
}
