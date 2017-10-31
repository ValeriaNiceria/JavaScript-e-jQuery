//first() - Seleciona apenas o primeiro elemento.
$('.btn').first().css('background','green');

//last() - Seleciona o último
$('.btn').last().css({
    background: 'white',
    color:'black'
});

//prev() - Selecioa o elemento anterior
$('p').prev().css({
    background:'orange',
    textShadow: '0 0 7px black'
});

//next() - Seleciona o próximo elemento
$('h1').next().css('background','purple');

//eq() - Seleciona o elemento pelo index dele
$('h2').eq(0).css('background','gray');

//not() - Remove da seleção
$('a').not('.btn').css('background','gray');