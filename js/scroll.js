$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    console.log(wScroll);

    if (wScroll <= $(window).height() / 1.5) {

        $('.logo svg').css({
            'transform': `rotate(${wScroll / 200}deg) translateX(${wScroll / 7}px)`
        });

        $('.logo h1').css({
            'transform': `rotate(-${wScroll / 200}deg) translateX(-${wScroll / 7}px)`
        });
    }

    if (wScroll >= $(window).height() / 4) {
        console.log('uwu');
        $('.info .content-container').each((index, ele) => {
            setTimeout(() => {
                $(ele).animate({
                    'opacity': 1
                }, 500);
            }, (index + 1) * 300);
        });
    }
});