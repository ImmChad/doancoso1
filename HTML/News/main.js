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







function opensignin(){
    document.getElementById('content').style.display = 'flex';
    document.getElementById('container').style.display = 'block';
};
function exit(){
 document.getElementById('content').style.display = 'none';
}

function opensignoutclosesignin(){
     document.getElementById('signup').style.display = 'block';
     document.getElementById('signin').style.display = 'none';
 }
 function opensigninclosesignout(){
     document.getElementById('signin').style.display = 'block';
     document.getElementById('signup').style.display = 'none';
 }