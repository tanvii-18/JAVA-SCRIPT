
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const value = document.getElementById("value");

let count = 0;

btn1.addEventListener("click" , () =>{
    count ++;
    value.innerHTML = count;
})


btn2.addEventListener("click" , () =>{
    if(count>0)
    {
        count --
    }
    value.innerHTML = count;
})


btn3.addEventListener("click" , () =>{
        if(count>0)
        {
            count *=2;
        }
        else
        {
            document.writeln("you can't multiply with 0 !")
        }
        value.innerHTML = count;
})


btn4.addEventListener("click" , () =>{
    if(count>1)
        {
            count /=2;
        }
        else
        {
            document.writeln("you can't divided this value!")
        }
        value.innerHTML = count;
})