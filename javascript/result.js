
$(document).ready(function(){
  let result = localStorage.getItem("careerResult");

  if(result){
    $("#finalResult").text(result);

    let courses = "";

    if(result.includes("IT")){
      courses = `
        <div class="course-box">
          <h5>Suggested Courses:</h5>
          <ul>
            <li>Web Development (HTML, CSS, JavaScript)</li>
            <li>Python Programming</li>
            <li>Database Management</li>
          </ul>
        </div>
      `;
    }
    else if(result.includes("Creative")){
      courses = `
        <div class="course-box">
          <h5>Suggested Courses:</h5>
          <ul>
            <li>Graphic Design</li>
            <li>UI/UX Design</li>
            <li>Digital Illustration</li>
          </ul>
        </div>
      `;
    }
    else{
      courses = `
        <div class="course-box">
          <h5>Suggested Courses:</h5>
          <ul>
            <li>Business Management</li>
            <li>Digital Marketing</li>
            <li>Entrepreneurship</li>
          </ul>
        </div>
      `;
    }

    $("#courseSuggestions").html(courses);
  }
  else{
    $("#finalResult").text("No result found. Please take the quiz first.");
  }
});
