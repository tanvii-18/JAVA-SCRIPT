
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");

const result = document.getElementById("result");

const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");


btn1.addEventListener("click" , () =>{
    let num1 = parseInt(n1.value)
    let num2 = parseInt(n2.value)
    let add = num1 + num2 ;
    result.innerHTML = "result : " + add;
})


btn2.addEventListener("click" , () =>{
    let num1 = parseInt(n1.value)
    let num2 = parseInt(n2.value)
    let sub = num1 - num2 ;
    result.innerHTML = "result : " + sub;
})


btn3.addEventListener("click" , () =>{
    let num1 = parseInt(n1.value)
    let num2 = parseInt(n2.value)
    let multiply = num1 * num2 ;
    result.innerHTML = "result : " + multiply;
})


btn4.addEventListener("click" , () =>{
    let num1 = parseInt(n1.value)
    let num2 = parseInt(n2.value)
    let divide = num1 / num2 ;
    result.innerHTML = "result : " + divide;
})
