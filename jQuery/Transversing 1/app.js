//each() - Seleciona cada elemento isoladamente
$('a').each(function(){
    $(this).click(function(e){
        e.preventDefault(); //previne o comportamento default do objeto
        $(this).css('background','blue');
    });
});

//O 'each' funciona como loop
var i = 0;
$('a').each(function(){
    console.log(i++);
});

//closest() - Seleciona o parent mais próximo do elemento.
$('h2').click(function(){
    $(this).closest('div').css('background','blue');
});

//parent() - Seleciona o pai do elemento
//Pode subir quantos níveis quiser
$('h2').click(function(){
    $(this).parent().parent().css('background','yellow');
});

//parents() - Seleciona todos os parentes que existem
$('h2').click(function(){
    let h2parents = $(this).parents();
    console.log(h2parents[2]);
});

//find() - Procura o elemento dentro dos filhos
$('div').click(function(){
    console.log($(this).find('span').text());
});