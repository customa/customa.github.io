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

    $('.more-info-arrow').on('click', function () {
        if ($(this).hasClass('opened')) {
            let box = this;
            let parent = this.parentElement;
            let openOverBox = anime({
                targets: parent,
                height: 200,
                elasticity: 0,
                easing: 'easeInOutCubic',
                duration: 400,
                complete: function () {
                    $(box).removeClass('opened');
                }
            });
            $(box).parent().find('.code').slideToggle(200);
        } else {
            let box = this;
            let parent = this.parentElement;
            let height = parent.parentElement.clientHeight;
            let openOverBox = anime({
                targets: parent,
                height: height,
                elasticity: 0,
                easing: 'easeInOutCubic',
                duration: 400,
                complete: function () {
                    $(box).addClass('opened');
                }
            });
            $(box).parent().find('.code').slideToggle(200);
        }
    });
});