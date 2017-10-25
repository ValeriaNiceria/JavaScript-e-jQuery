$('body').css('font-family','sans-serif');
$('h1').css('color','green');
$("p").css("background-color", "lightblue");
$('.primeiro').css('color','red');
$('#segundo').css('color','blue');

$('ul li a').hide(); //Adicionou display:none ao 'a'

//Selecionar por atributo
$('a[href="#link"]').css('text-decoration','none');

//Salvar a seleção em uma variável
var $paragrafo = $('p');
$paragrafo.css('color','red');

//Verificar se o elemento existe
if($('#meuId').length){
	console.log('Meu Id existe!');
}else{
	console.log('Meu Id não existe!');
}

console.log($('p').text());