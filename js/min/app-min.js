function startApp(){smoothScroll(),progressBar(10),scrollTop(),graphs("PopShackTV")}function vidplay(){var a=document.getElementById("blame");a.paused?a.play():a.pause()}$(function(){startApp(),$("header nav").meanmenu()}),Pace.on("hide",function(){vidplay(),$(".songtitle").toggleClass("out"),$(".overlay").fadeOut(1e3)});