setTimeout(slideshow1, 0000);



// Icon More Head

var click = 0;
function click_more() {
    click += 1;

    if(click % 2 != 0){
        let aftermore = document.getElementById('aftermore');

        aftermore.style.opacity = 1;
        aftermore.style.transform = 'translate(0%, 0%)';
        

        let aftermore2 = document.getElementById('aftermore2');

        aftermore2.style.opacity = 1;
        aftermore2.style.transform = 'translate(0%, 0%)';
    } else {
        let aftermore = document.getElementById('aftermore');

        aftermore.style.transform = 'translate(250%, 0%)';
        aftermore.style.opacity = 0;

        let aftermore2 = document.getElementById('aftermore2');

        aftermore2.style.transform = 'translate(280%, 0%)';
        aftermore2.style.opacity = 0;
    }
}

var slideshow1 = slideshow1();
var slideshow2 = slideshow2();
var slideshow3 = slideshow3();
var slideshow4 = slideshow4();
var slideshow5 = slideshow4();
var slideshow6 = slideshow4();


function slideshow1() {

    let change_dots1 = document.getElementById('change_dots1');
    change_dots1.style.color = 'red';
    
    let change_dots2 = document.getElementById('change_dots2');
    change_dots2.style.color = 'black';
    
    let change_dots3 = document.getElementById('change_dots3');
    change_dots3.style.color = 'black';

    let change_dots4 = document.getElementById('change_dots4');
    change_dots4.style.color = 'black';

    let change_dots5 = document.getElementById('change_dots5');
    change_dots5.style.color = 'black';

    let change_dots6 = document.getElementById('change_dots6');
    change_dots6.style.color = 'black';

    let banerimg = document.getElementById('banerimg');
    banerimg.innerHTML = '<img src="../../Banner/banner1.png" >'

    setTimeout(slideshow2, 2000);

}
function slideshow2() {

    let change_dots1 = document.getElementById('change_dots1');
    change_dots1.style.color = 'black';
    
    let change_dots2 = document.getElementById('change_dots2');
    change_dots2.style.color = 'red';
    
    let change_dots3 = document.getElementById('change_dots3');
    change_dots3.style.color = 'black';

    let change_dots4 = document.getElementById('change_dots4');
    change_dots4.style.color = 'black';

    let change_dots5 = document.getElementById('change_dots5');
    change_dots5.style.color = 'black';

    let change_dots6 = document.getElementById('change_dots6');
    change_dots6.style.color = 'black';

    let banerimg = document.getElementById('banerimg');
    banerimg.innerHTML = '<img src="../../Banner/banner2.jpg" >'
    setTimeout(slideshow3, 2000);

}
function slideshow3() {

    let change_dots1 = document.getElementById('change_dots1');
    change_dots1.style.color = 'black';
    
    let change_dots2 = document.getElementById('change_dots2');
    change_dots2.style.color = 'black';
    
    let change_dots3 = document.getElementById('change_dots3');
    change_dots3.style.color = 'red';

    let change_dots4 = document.getElementById('change_dots4');
    change_dots4.style.color = 'black';

    let change_dots5 = document.getElementById('change_dots5');
    change_dots5.style.color = 'black';

    let change_dots6 = document.getElementById('change_dots6');
    change_dots6.style.color = 'black';

    let banerimg = document.getElementById('banerimg');
    banerimg.innerHTML = '<img src="../../Banner/banner3.jpg" >'
    setTimeout(slideshow4, 2000);

}
function slideshow4() {

    let change_dots1 = document.getElementById('change_dots1');
    change_dots1.style.color = 'black';
    
    let change_dots2 = document.getElementById('change_dots2');
    change_dots2.style.color = 'black';
    
    let change_dots3 = document.getElementById('change_dots3');
    change_dots3.style.color = 'black';

    let change_dots4 = document.getElementById('change_dots4');
    change_dots4.style.color = 'red';

    let change_dots5 = document.getElementById('change_dots5');
    change_dots5.style.color = 'black';

    let change_dots6 = document.getElementById('change_dots6');
    change_dots6.style.color = 'black';

    let banerimg = document.getElementById('banerimg');
    banerimg.innerHTML = '<img src="../../Banner/banner4.jpg" >'
    setTimeout(slideshow5, 2000);

}

function slideshow5() {

    let change_dots1 = document.getElementById('change_dots1');
    change_dots1.style.color = 'black';
    
    let change_dots2 = document.getElementById('change_dots2');
    change_dots2.style.color = 'black';
    
    let change_dots3 = document.getElementById('change_dots3');
    change_dots3.style.color = 'black';

    let change_dots4 = document.getElementById('change_dots4');
    change_dots4.style.color = 'black';

    let change_dots5 = document.getElementById('change_dots5');
    change_dots5.style.color = 'red';

    let change_dots6 = document.getElementById('change_dots6');
    change_dots6.style.color = 'black';


    let banerimg = document.getElementById('banerimg');
    banerimg.innerHTML = '<img src="../../Banner/banner5.jpg" >'
    setTimeout(slideshow6, 2000);

}

function slideshow6() {
    let change_dots1 = document.getElementById('change_dots1');
    change_dots1.style.color = 'black';
    
    let change_dots2 = document.getElementById('change_dots2');
    change_dots2.style.color = 'black';
    
    let change_dots3 = document.getElementById('change_dots3');
    change_dots3.style.color = 'black';

    let change_dots4 = document.getElementById('change_dots4');
    change_dots4.style.color = 'black';

    let change_dots5 = document.getElementById('change_dots5');
    change_dots5.style.color = 'black';

    let change_dots6 = document.getElementById('change_dots6');
    change_dots6.style.color = 'red';


    let banerimg = document.getElementById('banerimg');
    banerimg.innerHTML = '<img src="../../Banner/banner6.jpg" >'

    setTimeout(slideshow1, 2000);
}



















