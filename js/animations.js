// PopShack Animation Handler

$( ".animation-list a" ).click(function( event ) {
  event.preventDefault();
  var x = $(event.target).text();
  console.log(this);
  $('#ball').removeClass();
  $('#ball').addClass('animated ' + x); 
});