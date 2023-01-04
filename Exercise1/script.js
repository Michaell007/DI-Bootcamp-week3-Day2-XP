// retrieve the h1 and console.log it
let elH1 = document.getElementsByTagName("h1")[0];
console.log( elH1 );

// remove the last paragraph in the <article> tag
let myArticle = document.querySelector("article");
let lastParagraph = myArticle.querySelector("p:last-of-type");
lastParagraph.remove();

// Add a event listener which will change the background color of the h2 to red
let elH2 = document.getElementsByTagName("h2")[0];
elH2.addEventListener("click", () => {
    elH2.style.background = "blue";
});

// Add an event listener which will hide the h3 when it’s clicked on
let elH3 = document.getElementsByTagName("h3")[0];
elH3.addEventListener("click", () => {
    elH3.style.display = "none";
});

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold
function changeFont() {
    let allParagraphs = document.querySelectorAll("p");
    allParagraphs.forEach(el => {
        el.classList.add("bold-paragraph");
    })
}

// BONUS : When you hover on the 2nd paragraph
let secondParagraph = myArticle.querySelector("p:nth-of-type(2)");
secondParagraph.addEventListener("mouseover", () => secondParagraph.classList.add("fade-in-text"));