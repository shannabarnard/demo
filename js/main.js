// jQuery Ajax call to load additional events
$(document).ready(function(){
  $("#moreLink").click(function(){
    $('.loader').show(); //show loader
    $("#moreEvents").load("events.html"); //more events loaded on to page
    $("#moreLink").remove(); //remove the view more events button
    $('.loader').hide(); //remove loader after ajax call
  });
});
