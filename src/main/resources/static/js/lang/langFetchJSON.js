let langPersonalJSON;
let langFragmentJSON;

//
// Get personal JSON
getPersonalJSON();
function getPersonalJSON(){
    let jsonPath = document.getElementById("langJSONPath").value;
    fetch(jsonPath).
    then(function (response){
        return response.json();
    })
        .then(function (data){
            langPersonalJSON = data;

            getCommonFragmentJSON();
        })
}


//
// Get common fragments JSON
function getCommonFragmentJSON(){
    fetch('/json/lang/langFragment.json').
    then(function (response){
        return response.json();
    })
        .then(function (data){
            langFragmentJSON = data;

            langChange(localStorage.getItem("preferLang"));
        })
}

