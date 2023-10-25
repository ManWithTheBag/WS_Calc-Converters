
let element;

function setNewLang(lang){
    localStorage.setItem("preferLang", lang);
    langChange(lang);
}

function langChange(lang){
    if(lang == null) return;

    // Personal JSON
    for (let key in langPersonalJSON) {
        element = document.querySelector("._lang-" + key);
        if(element != null){
             element.textContent = langPersonalJSON[key][lang];
        }
    }

    // Common fragments JSON
    for (let key in langFragmentJSON) {
        element = document.querySelector("._lang-" + key);
        if(element != null){
            element.textContent = langFragmentJSON[key][lang];
        }
    }

    // Function in main.js
    setUppercase();
}