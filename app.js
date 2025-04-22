"use strict";
$(document).ready(function () {
    
});

$('.btn').click(function (e) {
    e.preventDefault();

    let a = (a) => {
        if (a < 0) {
            console.log(a($('input').val()))
        } else{
            for (let i = 1; i <=a; i++) {
                $('.col-md-12').append(`<h1>${a}<h1>`);
            }
        }
        
    }
    a($('input').val())
});

