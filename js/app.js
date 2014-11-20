// SVG 1
///////////////////////////////////////////////////////////////////
var firstCanvas = Snap.select('#gpsvg1');
var object1 = firstCanvas.rect(10, 10, 300, 300);

object1.hover (function () {
  this.animate({
    fill: '#000',
    transform: 'r360t360'
  }, 500)
}, function() {
      this.animate({
      fill: '#eee',
      transform: 'r180t180'
  }, 500);
});


// SVG 2
///////////////////////////////////////////////////////////////////
var secondCanvas = Snap.select('#gpsvg2');

$(document).scroll(function() {

   var top = $(document).scrollTop();
     if (top > 600) {
       var object1 = secondCanvas.rect(10, 10, 300, 300);
       object1.animate({
  //       r: 50,
         fill: '#eee',
         transform: 'r360t360'
       }, 10000);
        
    $('body').css('background','pink');
   }
   else {
     $('body').css('background','yellow');
   }   
 });
