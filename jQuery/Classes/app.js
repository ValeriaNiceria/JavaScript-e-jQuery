//.addClass() - Adiciona uma ou mais classes ao elemento.
/*
$('.abrir-modal').click(function(){
	$('.modal').addClass('active');
});
*/


//.removeClass() - Remove uma ou mais classes do elemento.
/*
$('.btn').on('click', function(){
	$('.modal').removeClass('active');
});
*/


//.toggleClass() - Adiciona a classe ao elemento caso ela não exista ou remove caso ela exista.
$('.abrir-modal').click(function(){
	$('.modal').toggleClass('active');
});


//.hasClass() - Verifica se a classe existe e retorna falso ou verdadeiro
$('.abrir-modal').click(function(){
	var condition = $('.modal').hasClass('active');
	if(condition){
		$(this).html('Fechar Modal');
		console.log('Possui a classe!');
	}else{
		$(this).html('Abrir Modal');
		console.log('Não possui a classe!');
	}
});