$(document).ready(function(){

  $("#cvbutton").click(function(){showCV()})
  $("#homebutton").click(function(){gohome()})
  $("#links").click(function(){showlinks()})


});

function showCV(){
  $(".block4").show(); // show cv iframe
  $(".block2").hide(); // hide bio
  $(".block5").hide(); // hide links

}

function gohome(){
  $(".block2").show(); // show bio
  $(".block4").hide(); // hide cv frame
  $(".block5").hide(); // hide links

}

function showlinks(){
  $(".block5").show(); // hide links
  $(".block2").hide(); // show bio
  $(".block4").hide(); // hide cv frame

}
