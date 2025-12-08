
$(document).ready(function() {
    $('#signupBtn').click(function(e) {
        e.preventDefault(); 
        var username = $('#username').val().trim();
        var password = $('#password').val().trim();
        var confirmPassword = $('#confirmPassword').val().trim();
        
        if(username === "" || password === "" || confirmPassword === "") {
            $('.message').text("All fields are required.");
            return;
        }

        if(password !== confirmPassword) {
            $('.message').text("Passwords do not match!");
            return;
        }

        $('.message').css('color', 'green').text("Signup successful!");
        
    });
});
