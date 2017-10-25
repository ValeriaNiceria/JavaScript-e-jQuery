//.click() - Aciona a função após o usuário clicar no target.
$('.primeiro').click(function(){
	$('.primeiro').text('Clicou!');
});


//Os eventos também podem ser escritos com a função .on
$('.segundo').on('click', function(){
	$('.segundo').text('Clicou!');
});


//Use o this para se referir ao objeto do evento
$('a').on('click',function(){
	var current = $(this);
	current.text('Clicou!');
});


//O event object
$('a').on('click', function(e){
	e.preventDefault(); //Vai prevenir o comportamento padrão
	//console.log(e);
	$(this).text('Clicou');
});


//mouseenter - primeira etapa do hover
$('a').on('mouseenter', function(event){
	event.preventDefault();
	$(this).text('Mouse Hover');
});

$('p').on('mouseenter', function(){
	$(this).text('Passou o mouse!');
});


//mouseleave - segunda etapa do houver
$('a').on('mouseleave', function(e){
	e.preventDefault();
	$(this).text('Mouse Fora!');
});

//scroll
$(document).scroll(function(){
	$('a').text($(this).scrollTop());//.scrollTop - Distância que o scroll está do topo
});

$(document).on('scroll', function(){
	$('.teste').append('Colocou o mouse');
});


//resize
$(window).resize(function(){
	$('a').text($('body').width());
});

