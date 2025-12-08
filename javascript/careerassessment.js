
$(document).ready(function(){

  $("#submitQuiz").click(function(){
    let tech = 0;
    let creative = 0;
    let business = 0;

    $("input:checked").each(function(){
      if($(this).val() === "tech") tech++;
      if($(this).val() === "creative") creative++;
      if($(this).val() === "business") business++;
    });

    let finalResult = "";

    if(tech > creative && tech > business){
      finalResult = "IT & Technology (Web Developer, Software Engineer)";
    }
    else if(creative > tech && creative > business){
      finalResult = "Creative Field (Graphic Designer, UI/UX Designer)";
    }
    else{
      finalResult = "Business & Management (Marketing, Entrepreneurship)";
    }

    localStorage.setItem("careerResult", finalResult);

    window.location.href = "result.html";
  });

});
