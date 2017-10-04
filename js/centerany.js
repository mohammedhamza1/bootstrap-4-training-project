$(document).ready(function () {
    $.fn.centerany = function () {
        $(this).css({
            'position': 'absolute',
            // 'left': ($(this).parent().width()-$(this).width())/2,
            'top': ($(this).parent().height() - $(this).height()) / 2
        })
    }
});
