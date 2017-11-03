$(document).ready(function(){
    var classActive = 'active';
    
    $('.animais .tab-menu a').first().addClass(classActive);
    $('.animais .item').first().addClass(classActive);
    
    
    //Identificar se o usuário clicou em algum botão
    $('.animais .tab-menu a').click(function(e){
        e.preventDefault(); 
        var itemId = $(this).attr('href'); //Pegando o valor do atributo
        
        $('.animais .tab-menu a').removeClass(classActive); //Remove todos os actives
        $('.animais .item').removeClass(classActive);
        
        $(this).addClass(classActive); //Mas rapidamente ele vai adicionar o active
        $(itemId).addClass(classActive);
    });
    
    //Floresta
    
    $('.florestas .tab-menu a').first().addClass(classActive);
    $('.florestas .item').first().addClass(classActive);
    
    
    //Identificar se o usuário clicou em algum botão
    $('.florestas .tab-menu a').click(function(e){
        e.preventDefault(); 
        var itemId = $(this).attr('href'); //Pegando o valor do atributo
        
        $('.florestas .tab-menu a').removeClass(classActive); //Remove todos os actives
        $('.florestas .item').removeClass(classActive);
        
        $(this).addClass(classActive); //Mas rapidamente ele vai adicionar o active
        $(itemId).addClass(classActive);
    });
});
