function isnumberkey(e){
    var charcode = (e.which) ? e.which : e.keycode;
    if(charcode>31 && (charcode < 48 || charcode >57)){
        alert("Does not enter the char!!!")
        return false
    }
    return true
}


function ischarkey(e){
    var charcode = (e.which) ? e.which : e.keycode;
    if(charcode >= 48 && charcode <= 57 ){
        alert("Does not enter the number!!!")
        return false
    }
        // return false
    return true
}


