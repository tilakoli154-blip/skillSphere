
$(document).ready(function(){
  $("#contactForm").submit(function(e){
    e.preventDefault();
    $("#msg").text("Thank you! Your message has been sent.").css("color","green");
    $(this).trigger("reset");
  });
});