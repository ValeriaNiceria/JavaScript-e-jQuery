//.css() - Pega ou define o valor de uma propriedade css.
$('.cor').on('click', function(){
    $('p').css('color','#138284');
});

$('.size').on('click', function(){
    $('p').css('font-size','20px');
});

var asize = $('p').css('font-size');
console.log(asize);


//É possível definir mais de uma propriedade
$('.cor, .size').css({
    'color':'#fff',
    'background-color':'#1c426b',
    'font-size':'23px'
});


//Não precisa definir valores fixos
/*$(document).on('scroll', function(){
    var distancia = $(this).scrollTop();
    $('.teste').css('font-size', distancia * 2 + 'px');
});
*/


//height(), innerHeight() e outerHeight - Pega ou define o valor de height(mesma coisa para o width)
var tamanho = $('img'),
    height = tamanho.height(), //Height
    innerHeight = tamanho.innerHeight(), // + Padding
    outerHeight = tamanho.outerHeight(), // + Border
    outerHeightMargin = tamanho.outerHeight(true); // + Margin
console.log('Height: '+ height,
            'Inner: ' + innerHeight,
            'Outer: ' + outerHeight,
            'Outer + Margin: ' + outerHeightMargin
);


//Valor de height da janela
var windowHeight = $(window).height();
$('img').height(windowHeight);
console.log(windowHeight);

