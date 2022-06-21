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


function openpass(){
    document.getElementById('password').type = "text";
    document.getElementById('open').style.display = "none";
    document.getElementById('close').style.display = "block";
}

function closepass(){
    document.getElementById('password').type = "password";
    document.getElementById('open').style.display = "block";
    document.getElementById('close').style.display = "none";
}



function openpass1(){
    document.getElementById('password1').type = "text";
    document.getElementById('open1').style.display = "none";
    document.getElementById('close1').style.display = "block";
}

function closepass1(){
    document.getElementById('password1').type = "password";

    document.getElementById('open1').style.display = "block";
    document.getElementById('close1').style.display = "none";
}