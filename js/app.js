// SVG 1
///////////////////////////////////////////////////////////////////
var firstCanvas = Snap.select('#info');
var object1 = Snap.select('#block-1');
var object2 = Snap.select('#block-2');
var object3 = Snap.select('#block-3');

// object1.hover (function () {
//   this.animate({
//     fill: '#000',
//     transform: 'r360t360'
//   }, 500)
// }, function() {
//       this.animate({
//       fill: '#eee',
//       transform: 'r180t180'
//   }, 500);
// });

$(document).scroll(function() {
  object1.attr({transform: 't0,-200', opacity: 0});
  object2.attr({transform: 't0,200', opacity: 0});
  object3.attr({transform: 't200,0', opacity: 0});

   var top = $(document).scrollTop();
     if (top > 200) {
       object1.animate({
         fill: '#eee',
         transform: 't0,0',
         opacity: 1
       }, 500, mina.bounce);

       object2.animate({
         fill: '#eee',
         transform: 't0,0',
         opacity: 1
       }, 500, mina.bounce);

       object3.animate({
         fill: '#eee',
         transform: 't0,0',
         opacity: 1
       }, 1000, mina.bounce);
        
    $('body').css('background','pink');
   }

   else {
     $('body').css('background','yellow');
   }   
 });


// SVG 2
///////////////////////////////////////////////////////////////////
var secondCanvas = Snap.select('#info2');