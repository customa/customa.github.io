$(document).ready(function () {
    const logoNum = getRandomInt(5),
        colCombinations = [['#FFF', '#D81B60', '#FFF'], ['#FFF', '#000', '#FFF'], ['#000', '#FFF', '#000'], ['#D81B60', '#FFF', '#D81B60'], ['#161616', '#eee', '#161616']],
        combNum = getRandomInt(colCombinations.length + 1),
        selComb = colCombinations[combNum];

    $('.logoContainer').each(function () {
        $(this).svg({
            onLoad: function () {
                const svg = $(this).svg('get');
                svg.load(`svg/logo/CL${logoNum}.svg`, { addTo: true, changeSize: true });
            },
            settings: {}
        }
        );
    });

    setTimeout(function () {
        const logoContainer = $('.logoContainer');
        logoContainer.find('.outline').css({ 'stroke': selComb[0] });

        if ($('.logoContainer svg').hasClass('polyback')) {
            logoContainer.find('.background').css({ 'fill': selComb[1] });
        } else {
            logoContainer.find('pattern').find('.background').css({ 'fill': selComb[1] });
        }

        if (logoContainer.find('pattern').find('.fill').hasClass('circle')) {
            logoContainer.find('pattern').find('.fill').css({ 'fill': selComb[2] });
        } else {
            logoContainer.find('pattern').find('.fill').css({ 'stroke': selComb[2] });
        }

    }, 50);
});