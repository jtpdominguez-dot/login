document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    // SAMPLE LOGIN
    const correctUsername = "admin";
    const correctPassword = "12345";

    if (username === correctUsername && password === correctPassword) {

        message.style.color = "green";
        message.textContent = "Login successful!";

        // Go to another page
        setTimeout(function() {
            window.location.href = "dashboard.html";
        }, 1000);

    } else {

        message.style.color = "red";
        message.textContent = "Invalid username or password.";

    }

});