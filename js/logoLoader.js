$(document).ready(function () {
    let logoNum = getRandomInt(5);
    let colCombinations = [['#FFFFFF', '#D81B60', '#FFFFFF'],
                           ['#FFFFFF', '#000000', '#FFFFFF'],
                           ['#000000', '#FFFFFF', '#000000'],
                           ['#D81B60', '#FFFFFF', '#D81B60'],
                           ['#161616', '#EEEEEE', '#161616']];
    let combNum = getRandomInt(colCombinations.length + 1);
    let selComb = colCombinations[combNum];

    $('.logoContainer').each(function () {
        $(this).svg({
            onLoad: function () {
                let svg = $(this).svg('get');
                svg.load(`svg/logo/CL${logoNum}.svg`, { addTo: true, changeSize: true });
            },
            settings: {}
        });
    });

    setTimeout(function () {
        $('.logoContainer').find('.outline').css({ 'stroke': selComb[0] });

        if ($('.logoContainer svg').hasClass('polyback')) {
            $('.logoContainer').find('.background').css({ 'fill': selComb[1] });
        } else {
            $('.logoContainer').find('pattern').find('.background').css({ 'fill': selComb[1] });
        }

        if ($('.logoContainer').find('pattern').find('.fill').hasClass('circle')) {
            $('.logoContainer').find('pattern').find('.fill').css({ 'fill': selComb[2] });
        } else {
            $('.logoContainer').find('pattern').find('.fill').css({ 'stroke': selComb[2] });
        }
    }, 50);
});
