$(document).ready(function () {



    $('.btn').click(function (e) {
    e.preventDefault();
    if($.trim($('input').val()) == '') {
        $('input').val();
    } else {
        let k = v => {
            for (i = 0; i < v; i++) {$('#answer').append(`<div class="minibox"><div class="btn"><h5>${v}</h5></div></div>`)};
        }
        let z = e => Number(e) ? k(e) : $('#answer').append(`<div class="minibox"><div class="btn"><h5>${e}</h5></div></div>`);
        z($('input').val());
    }
    $('input').val('')
});








});
