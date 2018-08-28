$(window).scroll(() => {
    let wScroll = $(this).scrollTop();

    if (wScroll <= $(window).height() / 1.5) {
        $('.logo svg').css({
            'transform': `rotate(${wScroll / 200}deg) translateX(${wScroll / 7}px)`
        });

        $('.logo h1').css({
            'transform': `rotate(-${wScroll / 200}deg) translateX(-${wScroll / 7}px)`
        });
    }
                                                         // assuming the 'i' variable is already being used.
    if (wScroll >= $(window).height() / 4) {             // I mean, why else would you use 'index' instead
        $('.info .content-container').each((j, ele) => { // of 'i', you fucking monster.
            setTimeout(() => {
                $(ele).animate({
                    'opacity': 1
                }, 500);
            }, (j + 1) * 300);
        });
    }
});
