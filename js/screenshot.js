function openDialog(dialog) {
    loadContent(dialog);
    $('#overlay-modal').css('transform', `scale(0.6)`);
    $('#overlay-backdraw').fadeIn(600);
    let animateIn = anime({
        targets: '#overlay-modal',
        scale: 1,
        easing: [.68, -0.55, .27, 1.55],
        delay: 200,
        duration: 400
    });
    $('#overlay-backdraw').css('display', 'flex');
}

function closeDialog() {
    $('#overlay-backdraw').delay(200).fadeOut(400);
    let animateOut = anime({
        targets: '#overlay-modal',
        scale: 0.6,
        easing: [.68, -0.55, .27, 1.55],
        duration: 400
    });

}

function loadContent(dialog) {
    let name, creator, code;
    $.getJSON("data/imageInfo.json", function (result) {
        $.each(result.images, function (i, field) {
            if (field.id === dialog) {
                name = field.name;
                creator = field.creator;
                code = field.code;
                return false;
            }
        });
        $('#insName').text(name);
        $('#insCreator').text(creator);
        $('#insCode').text(code);
        $('#insBackground').attr('src', `img/${dialog}.png`);

        $('pre.hl_js').each(function (i, block) {
            hljs.highlightBlock(block);
            console.log(name + "\n" + code + "\n" + creator);
        });
    });
}

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

let overlay_handler = function(e) {
    if (e.keyCode === 27) {
        closeDialog();
        return false;
    }
};

$(document).bind('keyup', overlay_handler);

