// get form
let form = document.forms[0];

// calcul du volume
form.addEventListener("submit", (e) => {
    e.preventDefault(); 

    let valRadius = form.elements.radius.value;
    if (valRadius != "") {
        let volume = (4/3) * 3.14 * Math.pow(valRadius, 3);
        form.elements.volume.value = volume;
    }
})