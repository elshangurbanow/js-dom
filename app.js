$(document).ready(function () {



    $('.btn').click(function (e) {
        e.preventDefault();
        if ($.trim($('input').val()) == '') {
            $('input').val();
        } else {
            let k = v => {
                for (i = 0; i < v; i++) { $('#answer').append(`<div class="minibox"><div class="btn"><h5>${v}</h5></div></div>`) };
            }
            let z = e => Number(e) ? k(e) : $('#answer').append(`<div class="minibox"><div class="btn"><h5>${e}</h5></div></div>`);
            z($('input').val());
        }
        $('input').val('')
    })





    $("#me").click(function (e) {
        e.preventDefault()
        function myel(myclass = "") {
            if (!$.trim($("#inputme").val()) == '') {
                let vall = $("#inputme").val()
                    , newH3 = $('<h3> </h3>')
                    , newDiv = $('<div class="line" > </div>')
                    , bigDiv = $(`<div class="text-end" ${myclass} > </div>`)
                $(newH3).append(vall)
                $(newDiv).append(newH3)
                $(bigDiv).append(newDiv)
                return bigDiv
            }
            else {
                return
            }
        }
        $("#messageyou").append(myel())
        $("#messageme").append(myel('class="end"'))
        $("#inputme").val("")
        document.querySelector("#messageme").scrollTo(0, document.querySelector("#messageme").scrollHeight)
        document.querySelector("#messageyou").scrollTo(0, document.querySelector("#messageyou").scrollHeight)
    })













});
