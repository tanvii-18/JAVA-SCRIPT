const getcolor = document.getElementById("btn");
const code = document.getElementById("code");
const icon = document.getElementById("icon");

getcolor.addEventListener('click',()=>{
    color_code()
})

function color_code()
{
    const code_num = Math.floor(Math.random() * 16777215).toString(16);
    const color = "#" + code_num;
    document.body.style.backgroundColor = color;
    code.innerText = color;
    console.log(color)
}

icon.addEventListener('click',() =>{
        navigator.clipboard.writeText(code.innerText)
})

color_code();
code();
