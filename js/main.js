$(document).ready(function () {

    $('.btn').click(function() {
        $('.btn').each(function() {
            var t = Number($(this).text());

            if ((t + 1) > $('.btn').length) {
                $(this).text('1');
            } else {
                $(this).text(t + 1);
            }
        });
    });

});