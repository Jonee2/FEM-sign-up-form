$(document).ready(function () {
 
   
    $(".firstmissing").hide();
    let usernameError = true;
    $("#firstname").keyup(function () {
        validateFirstname();
    });
 
    function validateFirstname() {
        let usernameValue = $("#firstname").val();
        if (usernameValue.length == "") {
            $(".firstmissing").show();
            usernameError = false;
            return false;
        } else {
            $(".firstmissing").hide();
        }
    }
  $(".lastmissing").hide();
    let lastnameError = true;
    $("#lastname").keyup(function () {
        validateLastname();
    });
 
    function validateLastname() {
        let usernameValue = $("#lastname").val();
        if (usernameValue.length == "") {
            $(".lastmissing").show();
            lastnameError = false;
            return false;
        } else {
            $(".firstmissing").hide();
        }
    }
     $(".emailmissing").hide();
    let emailError = true;
    $("#email").keyup(function () {
        validateEmail();
    });
        const email = document.querySelector("#email");
        email.addEventListener("blur", () => {
            let regex =
                /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
            let s = email.value;
            if (regex.test(s)) {
                email.classList.remove(".emailmissing");
                emailError = true;
            } else {
                email.classList.add(".emailmissing");
                emailError = false;
            }
        });
    $(".passwordmissing").hide();
    let passwordError = true;
    $("#password").keyup(function () {
        validatePassword();
    });
    function validatePassword() {
        let passwordValue = $("#password").val();
        if (passwordValue.length == "") {
            $(".passwordmissing").show();
            passwordError = false;
            return false;
        } else {
            $(".passwordmissing").hide();
        }
    }
    $("button").click(function () {
        validateLastname();
        validateFirstname();
        validatePassword();
        validateEmail();
        if (
            usernameError == true &&
            passwordError == true &&
            confirmPasswordError == true &&
            emailError == true
        ) {
            return true;
        } else {
            return false;
        }
    });
    });
