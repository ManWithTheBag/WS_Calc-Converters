
let element;

function langChange(lang){

    // Personal JSON
    for (let key in langPersonalJSON) {
        element = document.querySelector("._lang-" + key);
        if(element != null){
             element.textContent = langPersonalJSON[key][lang];
        }
    }

    // Fragments JSON
    for (let key in langFragmentJSON) {
        element = document.querySelector("._lang-" + key);
        if(element != null){
            element.textContent = langFragmentJSON[key][lang];
        }
    }

    // Function in main.js
    setUppercase();
}