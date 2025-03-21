
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
    const uname_arr = ['0','1','2','3','4','5','6','7','8','9','@','#','$','%','^','&','*','!','+']

    if(uname.value == "" || email.value == "" || password.value == "" || co_pass.value == "")
    {
        error.innerHTML = "Please Enter All The Details !"
    }
    else
    {
        if(uname.value == uname_arr)
        {
            error.innerHTML = "Invalid input! Only letters are allowed in the name ! "
        }
        else{
            error.innerHTML = "Successfully Sign Up !"
        }
    }
}

// for (let i = 0; i < uname.value.length; i++) {
//     if (uname_arr.includes(uname.value[i])) {
//         invalid = true;
//         break;
//     }
// }
