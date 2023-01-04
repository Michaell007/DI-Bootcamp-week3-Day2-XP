// Declare a global variable named
let allBoldItems = [];

// Create a function called getBold_items()
function getBold_items() {
    let all_bold = document.querySelectorAll("strong");
    all_bold.forEach(el => allBoldItems.push(el))
}

// Create a function called highlight()
function highlight() {
    let all_bold = document.querySelectorAll("strong");
    all_bold.forEach(el => el.classList.add("bold-text-red"));
}

// Create a function called return_normal()
function return_normal() {
    let all_bold = document.querySelectorAll("strong");
    all_bold.forEach(el => el.classList.remove("bold-text-red"));
}

// Call the function highlight() on mouseover and return_normal() on mouseout
let paragraph = document.querySelector("p");
paragraph.addEventListener("mouseover", highlight);
paragraph.addEventListener("mouseout", return_normal);




