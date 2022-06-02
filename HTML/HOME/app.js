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




















// Ham de click anh 
function cvoneone() {
    let cvtwo = document.getElementById('cvone');

    cvtwo.innerHTML = '<img src="../../Product_Shoes/Converse/cv1.jpg">'
}
function cvonetwo() {
    let cvtwo = document.getElementById('cvone');

    cvtwo.innerHTML = '<img src="../../Product_Shoes/Converse/cv1-2.jpeg">'
}
function cvonethree() {
    let cvtwo = document.getElementById('cvone');

    cvtwo.innerHTML = '<img src="../../Product_Shoes/Converse/cv1-3.jpg">'
}


function cvtwotwo() {
    let cvtwo = document.getElementById('cvtwo');

    cvtwo.innerHTML = '<img src="../../Product_Shoes/Converse/cv2-2.jpg">'
}
function cvtwoone() {
    let cvtwo = document.getElementById('cvtwo');

    cvtwo.innerHTML = '<img src="../../Product_Shoes/Converse/cv2.jpg">'
}
function cvtwothree() {
    let cvtwo = document.getElementById('cvtwo');

    cvtwo.innerHTML = '<img src="../../Product_Shoes/Converse/cv2-3.jpg">'
}

function cvthreeone() {
    let cvtwo = document.getElementById('cvthree');

    cvtwo.innerHTML = '<img src="../../Product_Shoes/Converse/cv3.jpg">'
}
function cvthreetwo() {
    let cvtwo = document.getElementById('cvthree');

    cvtwo.innerHTML = '<img src="../../Product_Shoes/Converse/cv3-2.jpg">'
}
function cvthreethree() {
    let cvtwo = document.getElementById('cvthree');

    cvtwo.innerHTML = '<img src="../../Product_Shoes/Converse/cv3-3.jpg">'
}

function cvfourone() {
    let cvtwo = document.getElementById('cvfour');

    cvtwo.innerHTML = '<img src="../../Product_Shoes/Converse/cv4.jpg">'
}
function cvfourtwo() {
    let cvtwo = document.getElementById('cvfour');

    cvtwo.innerHTML = '<img src="../../Product_Shoes/Converse/cv4-2.jpg">'
}
function cvfourthree() {
    let cvtwo = document.getElementById('cvfour');

    cvtwo.innerHTML = '<img src="../../Product_Shoes/Converse/cv4-3.jpg">'
}


// ham Nike
function noneone() {
    let ntwo = document.getElementById('none');

    ntwo.innerHTML = '<img src="../../Product_Shoes/Nike/n1-1.jpg">'
}
function nonetwo() {
    let ntwo = document.getElementById('none');

    ntwo.innerHTML = '<img src="../../Product_Shoes/Nike/n1-2.jpg">'
}
function nonethree() {
    let ntwo = document.getElementById('none');

    ntwo.innerHTML = '<img src="../../Product_Shoes/Nike/n1-3.jpg">'
}

function ntwoone() {
    let ntwo = document.getElementById('ntwo');

    ntwo.innerHTML = '<img src="../../Product_Shoes/Nike/n2-1.jpg">'
}
function ntwotwo() {
    let ntwo = document.getElementById('ntwo');

    ntwo.innerHTML = '<img src="../../Product_Shoes/Nike/n2-2.jpg">'
}

function ntwothree() {
    let ntwo = document.getElementById('ntwo');

    ntwo.innerHTML = '<img src="../../Product_Shoes/Nike/n2-3.jpg">'
}

function nthreeone() {
    let ntwo = document.getElementById('nthree');

    ntwo.innerHTML = '<img src="../../Product_Shoes/Nike/n3-1.jpg">'
}
function nthreetwo() {
    let ntwo = document.getElementById('nthree');

    ntwo.innerHTML = '<img src="../../Product_Shoes/Nike/n3-2.jpg">'
}
function nthreethree() {
    let ntwo = document.getElementById('nthree');

    ntwo.innerHTML = '<img src="../../Product_Shoes/Nike/n3-3.jpg">'
}

function nfourone() {
    let ntwo = document.getElementById('nfour');

    ntwo.innerHTML = '<img src="../../Product_Shoes/Nike/n4-1.jpg">'
}
function nfourtwo() {
    let ntwo = document.getElementById('nfour');

    ntwo.innerHTML = '<img src="../../Product_Shoes/Nike/n4-2.jpg">'
}
function nfourthree() {
    let ntwo = document.getElementById('nfour');

    ntwo.innerHTML = '<img src="../../Product_Shoes/Nike/n4-3.jpg">'
}

// ham adidas 

function adoneone() {
    let adtwo = document.getElementById('adone');

    adtwo.innerHTML = '<img src="../../Product_Shoes/Adidas/ad1-1.jpg">'
}
function adonetwo() {
    let adtwo = document.getElementById('adone');

    adtwo.innerHTML = '<img src="../../Product_Shoes/Adidas/ad1-2.jpg">'
}
function adonethree() {
    let adtwo = document.getElementById('adone');

    adtwo.innerHTML = '<img src="../../Product_Shoes/Adidas/ad1-3.jpeg">'
}

function adtwoone() {
    let adtwo = document.getElementById('adtwo');

    adtwo.innerHTML = '<img src="../../Product_Shoes/Adidas/ad2-1.jpg">'
}
function adtwotwo() {
    let adtwo = document.getElementById('adtwo');

    adtwo.innerHTML = '<img src="../../Product_Shoes/Adidas/ad2-2.jpg">'
}

function adtwothree() {
    let adtwo = document.getElementById('adtwo');

    adtwo.innerHTML = '<img src="../../Product_Shoes/Adidas/ad2-3.jpg">'
}

function adthreeone() {
    let adtwo = document.getElementById('adthree');

    adtwo.innerHTML = '<img src="../../Product_Shoes/Adidas/ad3-1.jpg">'
}
function adthreetwo() {
    let adtwo = document.getElementById('adthree');

    adtwo.innerHTML = '<img src="../../Product_Shoes/Adidas/ad3-2.jpg">'
}
function adthreethree() {
    let adtwo = document.getElementById('adthree');

    adtwo.innerHTML = '<img src="../../Product_Shoes/Adidas/ad3-3.jpg">'
}

function adfourone() {
    let adtwo = document.getElementById('adfour');

    adtwo.innerHTML = '<img src="../../Product_Shoes/Adidas/ad4-1.jpg">'
}
function adfourtwo() {
    let adtwo = document.getElementById('adfour');

    adtwo.innerHTML = '<img src="../../Product_Shoes/Adidas/ad4-2.jpg">'
}
function adfourthree() {
    let adtwo = document.getElementById('adfour');

    adtwo.innerHTML = '<img src="../../Product_Shoes/Adidas/ad4-3.jpg">'
}























// Kiểm tra email hợp lệ 
const checkEmailValid = (e) => {
    let value = e.target.value
    let form = document.querySelector(
        'footer .container .footer-box:nth-child(3) ul li form',
    )

    const pattern = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/

    if(value.match(pattern)) {
        form.classList.add('success')
        form.classList.add('error')
    } else {
        form.classList.add('succes')
        form.classList.add('succes')
    }
}

const email = document.getElementById('email')
console.log(email)
email.addEventListener('keyup', checkEmailValid)