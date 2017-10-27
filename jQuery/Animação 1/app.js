//.animate() - Anima propriedades CSS para o valor que você definir.
//Pode-se animar mais de uma propriedade ao mesmo tempo.
$('.btn').click(function(){
    $('.castelo').animate({
        height: 300,
        width: 480
    });
});

//Ajuste a velocidade da animação.
$('.btn2').click(function(){
    $('.castelo').animate({
        height: 200,
        width:300
    },1000);
});

//Palavras especiais,adição e unidades.
$('.btn3').on('click', function(){
    $('.castelo').animate({
        opacity: 'toggle',
        height: '+=150',
        width: '+=150'
    },1500);
});

//Os nomes das propriedades mudam
$('.btn4').click(function(){
    $('.castelo').animate({
        borderTopWidth: '+=20',
        borderBottomWidth: '+=20',
        marginTop:'-=20'
    },500);
});

$('.btn5').click(function(){
    $('.castelo').animate({
        borderTopWidth: '-=20',
        borderBottomWidth: '-=20',
        marginTop:'+=20'
    },500);
});


//Easing - Curva de aceleração da velocidade da animação(swing,linear)
$('.btn6').click(function(){
    $('.castelo').animate({
        height: '-30%',
        width: '-40%',
        opacity: 'toggle'
    },2000, 'swing');
});


//Uma animação atrás da outra
$('.btn7').click(function(){
    $('.castelo')
        .animate({
            height: '+=100',
        },500)
        .animate({
            width: '+=170'
        },1000);
});