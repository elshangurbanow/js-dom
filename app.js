"use strict";
$(document).ready(function () {
    
});

$('h2').click(function (e) {
    e.preventDefault();
    $('h2').html(1234);
});

$('.btn').click(function (e) {
    e.preventDefault();
    $('input').html(e * 5);
});