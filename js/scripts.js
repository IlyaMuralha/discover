$(function () {
    $('.mini-menu').click(function () {
        if ($('.nav-list').css('display') == 'none') {
            $('.nav-list').slideDown()
        } else {
            $('.nav-list').slideUp()
        }
        
    });
});