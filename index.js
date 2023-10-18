const input = document.querySelector(".text-box");
const list = document.querySelector(".list");
const para = document.querySelector(".defaultText");
const clear = document.querySelector(".clear");
let allListItems = document.querySelectorAll("li");
let body = document.querySelector("body");

input.addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        para.remove();
        const inputValue = input.value.toUpperCase()
        input.value = ""
        
        const listItem = document.createElement("li")
        listItem.textContent = inputValue;

        list.appendChild(listItem);

    }
})

clear.addEventListener("click", () => {
    const allListItems = document.querySelectorAll("li");
    allListItems.forEach(item => {
        item.remove();
    });
    body.appendChild(para);
});

