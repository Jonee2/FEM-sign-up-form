$('button').click(function () {
    if ($('input').text('')) {
    $('input')[2].attr('placeholder', 'email@example.com')
    $('input').addClass('inputmissing')
    $('.missing').css('display', 'initial')
    }
    else {
        return;
   }
})