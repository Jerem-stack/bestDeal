$(document).ready(function(){

  console.log('Je marche bien');





  run(5000, 5);
  runIMG(1000)


});
var arrayImage = [
  "./src/img/Sweat.jpg",
  "./src/img/Shopping.jpg",
  "./src/img/Gant.jpg",
  "./src/img/AdultBlack.jpg"
]
// Pour faire avancer les images des cards
function runIMG(interval) {
    var int = 0;
    function func() {
        $('.card-swipe').attr('src',arrayImage[int]);
        int++;
        if(int === arrayImage.length) { int = 0; }
    }
    var swap = window.setInterval(func, interval);
}

//slider principal
function run(interval, frames) {
    var int = 1;
    function func() {
        $('.img-change-background').prop('id','background-'+int);
        int++;
        if(int === frames) { int = 1; }
    }

    var swap = window.setInterval(func, interval);
}
