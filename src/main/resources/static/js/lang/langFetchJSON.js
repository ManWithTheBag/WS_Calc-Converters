let langPersonalJSON;
let langFragmentJSON;

//
// Get personal JSON
let jsonPath = document.getElementById("langJSONPath").value;
fetch(jsonPath).
then(function (response){
    return response.json();
})
    .then(function (data){
        langPersonalJSON = data;
        langChange(localStorage.getItem("preferLang"));
    })


//
// Get common fragments JSON
fetch('/json/lang/langFragment.json').
then(function (response){
    return response.json();
})
    .then(function (data){
        langFragmentJSON = data;
        langChange(localStorage.getItem("preferLang"));
    })

