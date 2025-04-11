const input = document.querySelector(".inputText");
const add_btn = document.querySelector("#addBtn");
let deleteBtn = document.querySelector("#delete");
let editBtn = document.querySelector("#edit")
let listEl = document.querySelector(".list")
let todo = [];

add_btn.addEventListener('click',function(){

    let inputValue = input.value;
    const getText = `<div>
                     <span class="text">${inputValue}</span>
                    </div>`

    listEl.innerHTML += getText;
    getText = todo;
    
});


deleteBtn.addEventListener("click", () => {
    listEl.removeChild(inputValue);
});

