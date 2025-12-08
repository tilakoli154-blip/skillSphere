
$(document).ready(function() {
    if(localStorage.getItem("loggedInUser")){
        window.location.href = "dashboard.html";
    }

    const users = [
        { username: "Tilak", password: "Tilak123", role: "admin" },
        { username: "Manisha", password: "Manisha123", role: "admin" },
        { username: "Aarav", password: "Aarav123", role: "admin" }
    ];


    $("#togglePass").click(function() {
        let passField = $("#password");
        if(passField.attr("type") === "password"){
            passField.attr("type", "text");
            $(this).text("Hide Password");
        } else {
            passField.attr("type", "password");
            $(this).text("Show Password");
        }
    });

    
    function login() {
        let user = $("#username").val().trim();
        let pass = $("#password").val().trim();

        if(user === "" || pass === "") {
            $("#msg").text("Please enter username and password").css("color", "red");
            return;
        }

        let foundUser = users.find(u => u.username === user && u.password === pass);
        if(foundUser){
            localStorage.setItem("loggedInUser", foundUser.username);
            localStorage.setItem("loggedInRole", foundUser.role);
            window.location.href = "index.html";
        } else {
            $("#msg").text("Invalid Credentials").css("color", "red");
        }
    }

  
    $("#login").click(login);

   
    $("#username, #password").keypress(function(e){
        if(e.which === 13){
            login();
        }
    });
});
