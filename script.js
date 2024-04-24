const wrapper = document.querySelector(".wrapper");
const right = document.querySelector(".right");

wrapper.addEventListener("dragstart", (e) => {
    e.target.classList.add("drag");
});

wrapper.addEventListener("dragend", (e) => {
    e.target.classList.remove("drag");
});

right.addEventListener("dragover", (e) => {
    e.preventDefault();
});

right.addEventListener("drop", (e) => {
    e.preventDefault();
    const dropBox = wrapper.querySelector(".drag");
    if (dropBox.parentElement  !== right) {
        right.appendChild(dropBox);
    
        dropBox.classList.add("item-right");
    }
});


