$(window).scroll(() => {
    let wScroll = $(this).scrollTop();

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
        console.log('uwu');              // assuming the 'i' variable is already being used.
                                         // I mean, why else would you use 'index' instead
                                         // of 'i', you fucking monster.
        $('.info .content-container').each((j, ele) => {
            setTimeout(() => {
                $(ele).animate({
                    'opacity': 1
                }, 500);
            }, (j + 1) * 300);
        });
    }
});
