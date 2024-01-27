// Разворачивает меню при нажатии
$(function () {
    $('.mini-menu').click(function () {
        if ($('.nav-list').css('display') == 'none') {
            $('.nav-list').slideDown()
        } else {
            $('.nav-list').slideUp()
        }    
    });

    // Slick слайдер

    $('.service-slider').slick({
       arrows: false,
       dots: true,
       responsive: [{
        breakpoint: 600,
        settings: {
            dots: false,
            centerMode: true,
            centerPadding: '50px'
        }
       }]
    })

});