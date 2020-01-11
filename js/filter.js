

function onFilterInput(){
    var getValues = document.querySelector("#inputFilterId");
    var filter = getValues .value.toUpperCase();
    var liElements = document.getElementsByTagName("li");
    var texValues;
    for( let i = 0 ; i < liElements.length ;i++){
    texValues = liElements[i].textContent || liElements[i].innerText;
    console.log(texValues.indexOf(filter ));
    //use indexof(filter) because if return 0 it is true if return -1 it is false
    var  inFind = texValues.toUpperCase().indexOf(filter ) > -1;
    if(inFind ){
       liElements[i].style.display = 'block';
    }else{
        liElements[i].style.display = 'none';
    }   
}
}

document.addEventListener('keyup',onFilterInput);
