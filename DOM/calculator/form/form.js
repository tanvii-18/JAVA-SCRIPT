
const uname = document.getElementById("user-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const co_pass = document.getElementById("co-password");
const sign_up = document.getElementById("btn");

let error = document.getElementById("error")

sign_up.addEventListener('click', () =>{
    form_validation()
})

function form_validation()
{
    const uname_arr = ['0','1','2','3','4','5','6','7','8','9','@','#','$','%','^','&','*','!','+'];
    const pass_arr = ['0','1','2','3','4','5','6','7','8','9','@']
    const uppercase = /[A-Z]/.test(password.value);
    const lowercase = /[a-z]/.test(password.value)

    if(uname.value == "" || email.value == "" || password.value == "" || co_pass.value == "")
    {
        error.style.color = "red";
        error.innerHTML = "* Please Enter All The Details !"
    }
    else
    {
        let invalid = false;
        uname.value.split('').forEach(e => {
            if(uname_arr.includes(e))
            {
                invalid = true ;
            }
               
        });

        if(invalid)
        {
            error.style.color = "red";
        error.innerHTML = "* Invalid input! Only letters are allowed in the name ! "
        }
        else{
           let pass_char = pass_arr.some(e => password.value.includes(e));

            if(password.value.length<8 || !pass_char || !uppercase || !lowercase)
            {
                error.style.color = "red";
                error.innerHTML = "* Password must be 8+ chars, with 1 uppercase, 1 lowercase, 1 number & special char";
            }
            else if (password.value !== co_pass.value)
            {
                error.style.color = "red";
                error.innerHTML = "* Your Password isn't Match !"
            }
            else
            {
                error.style.color = "green";
                error.innerHTML= "Successfully Sign Up !"
            }
        }
    }
}

// error.innerHTML = "Successfully Sign Up !"