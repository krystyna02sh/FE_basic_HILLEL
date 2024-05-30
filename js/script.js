

$('.burger-container').click(function () {
    $('.burger-container').toggleClass('active');
    $('.burger').addClass('active');
    $('.wrapper-nav').addClass('active');
    $('.flex-nav').addClass('active');
    const target = $(this).data('target');
    $('target').addClass('active');
});

$('.wrapper-nav, .flex-nav,.close').click(function (event) {
    if (this === event.target) {
        $('.wrapper-nav').removeClass('active');
        $('.flex-nav').removeClass('active');
        $('.burger').removeClass('active');
    }

});