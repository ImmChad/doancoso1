const btnham = document.querySelector('.ham-btn');
const bttimes = document.querySelector('.times-btn');
const navbar = document.getElementById('nav-bar');
btnham.addEventListener('click', function(){
    if(btnham.className !== ""){
        btnham.style.display = "none";
        bttimes.style.display = "block";
        navbar.classList.add("show-nav");
    }
});

bttimes.addEventListener('click',function(){
    if(bttimes.className !== ""){

        bttimes.style.display = "none";
        btnham.style.display = "block";
 
        navbar.classList.remove("show-nav")
    }
});








/*       Sign in          */
function signupToggle(){
    // var conta = document.querySelector('.container');
    // conta.classList.add('.active');
    var popup = document.querySelector('.container');
    popup.classList.add('.active');  
}