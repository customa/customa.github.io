function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

$(document).ready(function () {
    $('.screenshot-box').on('mouseover', function () {
        console.log($(this).find('.screenshot-box-inner').css('transform'));
        if ($(this).find('.screenshot-box-inner').css('transform')) {
            console.log("uwu");
        }
    });

    $('.screenshot-box .scroll.right').on('click', function () {
        let width = $(this).parent().css('width');
        console.log(width);
        console.log("click");
    });
});