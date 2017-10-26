//.attr() - Pega ou define o valor de um atributo específico.
var attr = $('.primeiro').attr('href');
console.log(attr);

$('.segundo').attr('href', 'https://www.github.com/ValeriaNiceria');


//.removeAttr() - Remove o atributo
$('.terceiro').removeAttr('href');


//.val() - Pega ou define o valor de um elemento. 
//Utilizado em input, select e textarea
$('.botao').click(function(){  
    var nome = $('input').val();
    console.log(nome);
});


//.remove() - Remove um elemento do DOM
$('img').remove();


//.empty() - Remove os filhos do elemento do DOM
$('.btn').on('click', function(){
    $('ul').empty();
});
