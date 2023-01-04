// Retrieve the form and console.log it.
let form = document.forms[0];

// Retrieve the inputs by their id and console.log them.
let inputIdFname = form.elements[0];
let inputIdLname = form.elements[1];
console.log(inputIdFname, inputIdLname);

// Retrieve the inputs by their name attribute and console.log them.
let inputFname = form.elements.fname;
let inputLname = form.elements.lname;
console.log(inputFname, inputLname);

// the user submits the form
form.addEventListener("submit", (e) => {
    // use preventDefault() to stop the page from loading
    e.preventDefault();

    // get the values of the input tags,
    let valFname = inputFname.value;
    let valLname = inputLname.value;

    // make sure that they are not empty
    if (valFname != "" && valLname != "") {
        // Get ul
        let myUl = document.querySelector(".usersAnswer");

        // add first li
        let oneLi = document.createElement("li");
        oneLi.textContent = valFname;
        myUl.appendChild(oneLi);

        // add second li
        let twoLi = document.createElement("li");
        twoLi.textContent = valLname;
        myUl.appendChild(twoLi);
    }
})