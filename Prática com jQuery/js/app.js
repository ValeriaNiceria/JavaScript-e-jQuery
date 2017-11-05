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