let liElements = document.getElementsByTagName("li");

for( let i = 0 ; i < liElements.length ;i++){
    console.log(liElements[i].textContent);
}

function onFilterInput(){
    let getValues = document.getElementById("inputFilterId");
    // let filter = getValues.value.toUpperCase();
    console.log(getValues);
}

document.addEventListener('keypress',onFilterInput)

