const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))



$('#enviarCorreo').click(function () {
    alert('El correo fue enviado correctamente..')
})

$('#u-ingredientes').on("dblclick", function () {
    $(this).css({
        "color": "red",
    });
})

$('#u-preparacion').on("dblclick", function () {
    $(this).css({
        "color": "red",
    });
})

$('.card-img-top').click(function(){
    $('.card-title').toggle(function () {
        $(this).addClass("hidden");
    }, function () {
        $(this).removeClass("hidden");
    })
    $(' .card-text').toggle(function () {
        $(this).addClass("hidden");
    }, function () {
        $(this).removeClass("hidden");
    })
})




