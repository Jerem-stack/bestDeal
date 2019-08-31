$(document).ready(function(){

$(".card-header").on('click',function(){
  $(".card-header").each(function(){
    $(this).removeClass('card-background');
  });
  $(this).addClass('card-background')
});

});
