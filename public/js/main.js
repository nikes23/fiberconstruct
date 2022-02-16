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
