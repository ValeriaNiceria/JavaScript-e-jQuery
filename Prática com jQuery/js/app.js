//data() - Pega o valor dentro de um atributo que comece com 'data-'
//each - Seleciona cada elemento isoladamente
//find - Procura o elemento dentro dos filhos
//first - Seleciona apenas o primeiro elemento
//addClass - Adiciona uma ou mais classes ao elemento
//removeClass - Remove uma ou mais classes do elemento

$('[data-group]').each(function(){
    var $allTarget = $(this).find('[data-target]'),
        $allClick = $(this).find('[data-click]'),
        activeClass = 'active';
    
    $allTarget.first().addClass(activeClass);
    $allClick.first().addClass(activeClass);

    $allClick.click(function(e){
        e.preventDefault();

        var id = $(this).data('click'),
            $target = $('[data-target="' + id +'"]');

        $allClick.removeClass(activeClass);
        $allTarget.removeClass(activeClass);
        
        $target.addClass(activeClass);
        $(this).addClass(activeClass);
    });
}); 


//Scroll Suave

//attr() - Pega ou define o valor de um atributo específico
//offset() - Retorna um objeto com as distãncias de top e left do elemento em relação ao documento
//animate() - Anima propriedades CSS para o valor que você definir
//innerHeight() - Pega ou define o calor de height(mesma coisa para o width)

$('.menu-nav a[href^="#"]').click(function(e){ //Quando se tem o '^⁼' - quer dizer para selecionar todos com itens que comecem com o que for selecionado
    e.preventDefault();
    var id = $(this).attr('href'),
        menuHeight = $('.menu').innerHeight(),
        targetOffset = $(id).offset().top;
    
    $('html, body').animate({
        scrollTop: targetOffset - menuHeight
    },1000);
});

//Ir para o topo da página
$('.logo').click(function(e){
    e.preventDefault();
    
    $('html, body').animate({
        scrollTop: 0
    },800);
});



//Scroll Suave link Ativo
$('section').each(function(){
    var height = $(this).height(),
        offsetTop = $(this).offset().top,
        menuHeight = $('.menu').innerHeight(),
        id = $(this).attr('id'),
        $itemMenu = $('a[href="#' + id + '"]');

    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        if(((offsetTop - menuHeight) < scrollTop)&&((offsetTop - menuHeight) + height > scrollTop)){
            $itemMenu.addClass('active');
        }else{
            $itemMenu.removeClass('active');
        }
    });

});