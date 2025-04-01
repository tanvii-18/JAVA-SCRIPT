
$("btn").on("click",function(){

    let email = $("#email").val();
    let password = $("#password").val();
    let co_pass = $("#co-password").val();

    let isValid = true;

    const email_val = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const password_val = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}?$/;


    if (email == "" ||! email_val.test(email)) {
        isValid = false;
        $("#err1").text("Email is invalid!");
    }

    if (password == "" || co_pass == "" || !password_val.test(password)) {
        isValid = false;
        $("#err2").text("please create strong password !");
    }

    if (password !== co_pass) {
        isValid = false;
        $("#err2").text("Passwords doesn't matched !");
    }

    if (isValid) {
        $("#confirm").text("Sign up successfully !");
    }

})