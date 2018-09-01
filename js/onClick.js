$(document).ready(function () {
    $('.click-catcher').on('click', function () {
        $('.bubble').removeClass('selected');
        $('.bubble-content').removeClass('visible');
    });

    $('.bubble').on('click', function () {
        if (!$(this).hasClass('selected')) {
            $('.bubble').removeClass('selected');
            $('.bubble-content').removeClass('visible');

            $(this).addClass('selected');
            $(this).find('.bubble-content').addClass('visible');
        } else {
            $('.bubble').removeClass('selected');
            $('.bubble-content').removeClass('visible');
        }
    });
});