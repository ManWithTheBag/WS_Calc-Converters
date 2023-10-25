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
    })


//
// Get common fragments JSON
fetch('/json/lang/langFragment.json').
then(function (response){
    return response.json();
})
    .then(function (data){
        langFragmentJSON = data;
    })

// for (let key in langCalculationList) {
//     console.log(key);
//     for (let key1 in langCalculationList[key]) {
//         console.log(key1)
//         console.log(langCalculationList[key][key1])
//     }
// }