// jQuery Plugin Functions

(function ( $ ) {
 
 	// Use to set toggle open and closed classes
 	// $(' element ').toggler();  // Toggle Class
 	// See open in _helpers.scss file
	$.fn.toggler = function() {
		this.toggleClass('open');
	};
 
}( jQuery ));


// App Object
var app = new Object();


	// Use to set toggle open and closed classes
function progressBar(p) {
  $( ".progress" ).progressbar({
    value: p
	});
};

function smoothScroll() {
  // Smooth Scroll for all internal links
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
};

function scrollTop() {
  //Check to see if the window is top if not then display button
  $(window).scroll(function(){
    if ($(this).scrollTop() > 300) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
  });  
  //Click event to scroll to top
  $('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });
};

function graphs(channelname){

$.getJSON( "http://gdata.youtube.com/feeds/api/users/" + channelname + "?alt=json", function( data ) {
  var items = [];
  console.log(data);

  items.push( "<div id='ytsubs' data-dimension='250' data-text='" + data.entry.yt$statistics.subscriberCount + "' data-width='20' data-fontsize='50' data-fgcolor='#62E0D4' data-bgcolor='#eee' data-total='50000' data-part='" + data.entry.yt$statistics.subscriberCount + "'></div>" );
  items.push( "<div id='ytviews' data-dimension='250' data-text='" + data.entry.yt$statistics.totalUploadViews + "' data-width='20' data-fontsize='40' data-fgcolor='#EA4C70' data-bgcolor='#eee' data-total='10000000' data-part='" + data.entry.yt$statistics.totalUploadViews + "'></div>" );


  $( "<ul/>", {
    "class": "stats",
    html: items.join( "" )
  }).appendTo( ".graphs" );

  $('#ytsubs').circliful();
  $('#ytviews').circliful();

});

}