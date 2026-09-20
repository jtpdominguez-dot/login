const loginForm = document.getElementById("loginForm");

const username = document.getElementById("username");

const password = document.getElementById("password");

const togglePassword =
    document.getElementById("togglePassword");

const message =
    document.getElementById("message");



/* =========================
   SHOW / HIDE PASSWORD
========================= */

togglePassword.addEventListener(
    "click",
    function () {

        if (password.type === "password") {

            password.type = "text";

            togglePassword.textContent = "◉";

        } else {

            password.type = "password";

            togglePassword.textContent = "◌";

        }

    }
);



/* =========================
   LOGIN
========================= */

loginForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        if (
            username.value.trim() === "" ||
            password.value.trim() === ""
        ) {

            message.textContent =
                "Please enter your username and password.";

            message.style.color = "red";

            return;
        }


        message.textContent =
            "Login successful!";

        message.style.color =
            "#063875";

    }
);