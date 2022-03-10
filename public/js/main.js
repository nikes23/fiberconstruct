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

function closeNavLayer() {
    navLink.classList.toggle('hide');
    myFunction(hamburger);
}

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


(function ($) {

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *     the user visible viewport of a web browser.
     *     only accounts for vertical position, not horizontal.
     */

    $.fn.visible = function (partial) {

        var $t = $(this),
            $w = $(window),
            viewTop = $w.scrollTop(),
            viewBottom = viewTop + $w.height(),
            _top = $t.offset().top,
            _bottom = _top + $t.height(),
            compareTop = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };

})(jQuery);

var win = $(window);
var allMods = $(".module");

// Already visible modules
allMods.each(function (i, el) {
    var el = $(el);
    if (el.visible(true)) {
        el.addClass("already-visible");
    }
});

win.scroll(function (event) {

    allMods.each(function (i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("come-in");
        }
    });

});

//Kontaktformular für weiterleiten an Node.js
/**
const contactForm = document.querySelector('.contactForm');
let firstname = document.getElementById('firstname');
let lastname = document.getElementById('lastname');
let mail = document.getElementById('mail');
let subject = document.getElementById('subject');
let message = document.getElementById('message');
let dataprivacy = document.getElementById('datenschutzCheckBox');

contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    let formData = {
        firstname: firstname.value,
        lastname: lastname.value,
        mail: mail.value,
        subject: subject.value,
        message: message.value,
        dataprivacy: dataprivacy.value
    }
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/send');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function (){
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            alert('Die Nachricht wurde erfolgreich gesendet');
            firstname.value = '';
            lastname.value = '';
            mail.value = '';
            subject.value = '';
            message.value = '';
            dataprivacy.value = '';

        } else {
            alert('Etwas ist schief gegangen')
        }
    }

    xhr.send(JSON.stringify(formData));
})
*/

/*
* In this example we will only customize the document's scrolling,
* but the API fully support every custom scrollable container
*/
function init() {
    /*
     * We tell the API which element is the one that scrolls the document
     * (useful whenever it's something like the body element, a custom container,
     * a framework specific container, etc...)
     */
    uss.setPageScroller(window);

    /**
     * This API function, enables the anchors'
     * smooth-scrolling to the corresponding section
     */
    uss.hrefSetup();

    /**
     * This version would prevent the stop-and-go effect you have when
     * you click the same anchor more than one time.
     */
    //uss.hrefSetup(null, null, () => {return !uss.isScrolling();});

    /**
     * This API function, sets the easing of the pageScroller (that we set to window) to a
     * medium speed(the "QUART" part) ease-in-out function that last exactly 1 second.
     */
    uss.setStepLengthCalculator(EASE_IN_OUT_QUART(1000));

    /**
     * This API function allow us to stop the scrolling on a container.
     * In this case, we don't want any more scrolling
     * if the user scrolls the document with the mousewheel.
     */
    window.addEventListener(
        "wheel",
        () => uss.stopScrolling()
    );
}
