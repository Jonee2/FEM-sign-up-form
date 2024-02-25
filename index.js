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
            $('#firstname').addClass("inputmissing");
            usernameError = false;
            return false;
        } else {
            $(".firstmissing").hide();
            $('#firstname').removeClass('inputmissing')
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
            $('#lastname').addClass('inputmissing')
            lastnameError = false;
            return false;
        } else {
            $(".lastmissing").hide();
            $('#lastname').removeClass('inputmissing')
        }
    }
    $(".emailmissing").hide();
    let emailError = true;
    $("#email").keyup(function () {
        validateEmail();
    });
    
    function validateEmail() {
        const email = document.querySelector("#email");
        let regex =
            /^[a-zA-Z0-9. _-]+@[a-zA-Z0-9. -]+\. [a-zA-Z]{2,4}$/;
        let s = email.value;
        if (regex.test(s)) {
            $(".emailmissing").hide();
            $('#email').removeClass(".inputmissing");
            emailError = true;
        } else {
            $(".emailmissing").show();
            $('#email').addClass("inputmissing");
            $('#email').addClass("emailplacemissing");
            $('#email').attr('placeholder', 'email@example.com')
            emailError = false;
        }
    }
    $(".passwordmissing").hide();
    let passwordError = true;
    $("#password").keyup(function () {
        validatePassword();
    });
    function validatePassword() {
        let passwordValue = $("#password").val();
        if (passwordValue.length == "") {
            $(".passwordmissing").show();
            $('#password').addClass('inputmissing')
            passwordError = false;
            return false;
        } else {
            $(".passwordmissing").hide();
            $('#password').removeClass('inputmissing')
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
})
