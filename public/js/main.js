const hamburger = document.querySelector('.hamburger');
const navElements = document.querySelector('.navElements');
const navLink = document.querySelector('.nav__link');

hamburger.addEventListener('click', () => {
    navLink.classList.toggle('hide');
});
navElements.addEventListener('click', () => {
    navLink.classList.toggle('hide');
    myFunction(hamburger);
});

function myFunction(x) {
    x.classList.toggle("change");
}


const nav = document.querySelector('#nav');
let navTop = nav.offsetTop;

function buttonPressFunction() {
    document.getElementById("button1").style.display = "none";
}


//Call and Calender Button
//Mobile Variable
const phoneCall = document.getElementById("phone");
const xPhone = document.getElementById("xPhone");
const callBackMobil = document.getElementById("callBackMobil");
const callNowMobil = document.getElementById("callNowMobil");
//Tablet + Desktop Variable
const calender = document.getElementById("calender");
const xDesktop = document.getElementById("xDesktop");
//const callBackDesktop = document.getElementById("callBackDesktop");

//Change Button Icon and remove Textfields
window.addEventListener('resize', function() {
    callBackMobil.style.display = 'none';
    callNowMobil.style.display = 'none';
    //callBackDesktop.style.display = 'none';

    if(xPhone.style.display === 'inline-block'){
        xPhone.style.display = 'none';
        phoneCall.style.display = 'inline-block';
    } else if(xDesktop.style.display === 'inline-block'){
        xDesktop.style.display = 'none';
        calender.style.display = 'inline-block';
    } else{
        return true;
    }
});

//Show and hide Textfields on Smartphone and change Button Icon
function phoneFunction(x) {
    if (phoneCall.style.display === 'none') {
        x.classList.toggle("change");
        xPhone.style.display = 'none';
        callBackMobil.style.display = 'none';
        callNowMobil.style.display = 'none';
        phoneCall.style.display = 'inline-block';
    } else {
        x.classList.toggle("change");
        xPhone.style.display = 'inline-block';
        callBackMobil.style.display = 'inline-block';
        callNowMobil.style.display = 'inline-block';
        phoneCall.style.display = 'none';
    }
}
