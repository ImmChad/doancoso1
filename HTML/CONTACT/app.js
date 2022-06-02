


// header

const btnHam = document.querySelector('.ham-btn');
const btnTimes = document.querySelector('.times-btn');
const navBar = document.getElementById('nav-bar');
btnHam.addEventListener('click', function(){
    if(btnHam.className !== ""){
        btnHam.style.display = "none";
        btnTimes.style.display = "block";
        navBar.classList.add("show-nav");
    }
})

btnTimes.addEventListener('click', function(){
    if(btnHam.className !== ""){
        this.style.display = "none";
        btnHam.style.display = "block";
        navBar.classList.remove("show-nav");
    }
})



// login 
function opensignin(){
    document.getElementById('content').style.display = 'flex';
    document.getElementById('container').style.display = 'block';
};
function exit(){
 document.getElementById('content').style.display = 'none';
};

function opensignoutclosesignin(){
     document.getElementById('signup').style.display = 'block';
     document.getElementById('signin').style.display = 'none';
 };
 function opensigninclosesignout(){
     document.getElementById('signin').style.display = 'block';
     document.getElementById('signup').style.display = 'none';
 };


























