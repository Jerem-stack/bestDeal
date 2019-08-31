$(document).ready(function(){
  $(".change-color").on('click',function(){
    $(this).parent().parent().toggleClass("card-header-bkgd")
  });
});
