function opensignin1(){
    document.getElementById('content').style.display = 'flex';
    document.getElementById('container').style.display = 'block';
    document.querySelector('body').style.overflow = 'hidden';
};
function exit(){
 document.getElementById('content').style.display = 'none';
 document.querySelector('body').style.overflow = 'scroll';

};

function opensignoutclosesignin(){
     document.getElementById('signup').style.display = 'block';
     document.getElementById('signin').style.display = 'none';
 };
 function opensigninclosesignout(){
     document.getElementById('signin').style.display = 'block';
     document.getElementById('signup').style.display = 'none';
 };