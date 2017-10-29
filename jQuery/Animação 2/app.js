//fadeOut() - Anima a opacidade do elemento até 0 e depois aplica display:none
$('.btn1').click(function(){
    $('.castelo').fadeOut(2000);
});

//.fadeIn() - Mostra o elemento que sumiu
$('.btn2').click(function(){
    $('.castelo').fadeIn(500);
});

//hide() - Esconde o elemento
$('.btn3').click(function(){
    $('.castelo').hide(1000);
});

//show() - Mostra o elemento
$('.btn4').click(function(){
    $('.castelo').show(500);
});

//slideUp() - Esconde o elemento com a animação de slide
$('.btn5').click(function(){
    $('.castelo').slideUp(500);
});

//slideDown() - Aparece o elemento
$('.btn6').click(function(){
    $('.castelo').slideDown(200);
});

//slideToggle() - Se o elemento está na tela ele dá slideUp e se o elemento não estiver na tela ele dá slideDown
$('.btn7').click(function(){
    $('.castelo').slideToggle(500);
});

//Função após a animação
$('.btn8').click(function(){
    $('.castelo').slideToggle(function(){
        $('.btn8').css('color','blue');
        //$('.btn8').click(); - Animação infinita
    });
});