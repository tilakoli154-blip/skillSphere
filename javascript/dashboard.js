
$(document).ready(function(){

  let user = localStorage.getItem("loggedInUser");

 
  if(!user){
    window.location.href = "signin.html";
  }


  $("#displayUser").text(user);
  $("#userName").text(user);


  $("#logoutBtn").click(function(){
    localStorage.clear();
    window.location.href = "signin.html";
  });

});
