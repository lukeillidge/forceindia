// jQuery Functions

$(function() {

  // Start All Important Functions
  startApp();

});


function startApp() {
  // Do Nothing  
};

Pace.on('hide', function(){
  setTimeout(function(){
    $("#lights").addClass( "hide" );
  }, 3000);  
  setTimeout(function(){
    $(".overlay").fadeOut(1000);
    lights();
  }, 4000);  
});

function lights() {
  audplay();
  vidplay();
  launch();
}

function vidplay() {
   var video = document.getElementById("force");
   if (video.paused) {
      video.play();
   } else {
      video.pause();
   }
}

function audplay() {
   var audio = document.getElementById("underdog");
   if (audio.paused) {
      audio.play();
   } else {
      audio.pause();
   }
}

function launch() {
  $( ".overlay2" ).addClass( "overlayborder visible" );
  setTimeout(function(){
      $( ".forcelogo" ).addClass( "visible" );
  }, 2000); 
  setTimeout(function(){
      $( ".forcebtn" ).addClass( "visible fadeUp" );
  }, 3000);   
}