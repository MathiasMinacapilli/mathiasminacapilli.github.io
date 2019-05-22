/* ========================= */
/* ========Functions======== */
/* ========================= */

/* Animate a number giving to the function the number of child
you want to animeta and the final number of the animation. */
function animateNumber(child, numberp) {
    // how many decimal places allows
    var decimal_places = 1;
    var decimal_factor = decimal_places === 0 ? 1 : Math.pow(10, decimal_places);
    $('#knowledge li:nth-child('+child+') p').animateNumber({number: numberp * decimal_factor,
        numberStep: function(now, tween) {
            var floored_number = Math.floor(now) / decimal_factor,
                target = $(tween.elem);
            if (decimal_places > 0) {
                // force decimal places even if they are 0
                floored_number = floored_number.toFixed(decimal_places);
                // replace '.' separator with ','
                floored_number = floored_number.toString();
            }
            target.text(floored_number);
        }
    }, 2200
    );
}

/* 
------------------------------------------
---------------Cash the DOM---------------
------------------------------------------
*/
const contact_btn = document.querySelector('#contact-btn');
const contact_form_wrapper = document.querySelector('#contact-form-wrapper');
const contact_form_btn_close = document.querySelector('#close-contact-form');

/* 

*/
$(document).ready(function(){

    /* Aside Control */
    let navigation_state = 0;
    var aside = document.getElementById('aside'); //Icono de flecha
    aside.addEventListener('click', function(e) {
        let list = document.getElementById('navigation-list');
        if(navigation_state == 0) {
            list.style.left = '0';
            aside.style.left = '30vw';
            navigation_state = 1;
        }
        else { //state = 1
            list.style.left = '-30vw';
            aside.style.left = '0';
            navigation_state = 0;
        }
    });
  
    /* Animate Numbers of Knowledge Control */
    animateNumber(1, 9.0);
    animateNumber(2, 8.4);
    animateNumber(3, 5.0);
    animateNumber(4, 7.5);
    animateNumber(5, 6.0);
    animateNumber(6, 4.6);
    animateNumber(7, 8.0);
    animateNumber(8, 1.0);

    /* 
    -------------------------------------------------
    ---------------Auxiliary Functions---------------
    -------------------------------------------------
    */
    function showContactForm() {
        contact_btn.style.display = "none";
        contact_form_wrapper.style.display = "flex";
    }
    function closeContactForm() {
        contact_btn.style.display = "flex";
        contact_form_wrapper.style.display = "none";
    }

    /* 
    ---------------------------------------------
    ---------------Event listeners---------------
    ---------------------------------------------
    */
   contact_btn.addEventListener('click', showContactForm);
   contact_form_btn_close.addEventListener('click', closeContactForm);

});



