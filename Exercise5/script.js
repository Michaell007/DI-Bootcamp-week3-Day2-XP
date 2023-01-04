// select element
let myElement = document.querySelector("#content");

// add events
myElement.addEventListener("click", (e) => e.target.style.background = "red");
myElement.addEventListener("mouseover", (e) => e.target.style.border = "5px solid blue");
myElement.addEventListener("mouseout", (e) => e.target.style.background = "orange");
myElement.addEventListener("dblclick", (e) => {
    e.target.style.background = "green";
    e.target.style.border = "none";
});

