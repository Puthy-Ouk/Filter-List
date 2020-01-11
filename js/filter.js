function onFilterInput(){
    let getValues = document.querySelector("#inputFilterId");
    let filter = getValues .value.toUpperCase();
    let liElements = document.getElementsByTagName("li");
    let textValue;
    
    for( let i = 0 ; i < liElements.length ;i++){
        textValue = liElements[i].textContent || liElements[i].innerText;
        console.log(textValue.indexOf(filter));
    }
}

document.addEventListener('keyup',onFilterInput)

