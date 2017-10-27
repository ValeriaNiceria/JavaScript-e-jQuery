/*Animação com Scroll
Dica: Quebre em pequenas partes, procure código semelhante e teste
1 => Distância entre o scroll e o topo
2 => Distância entre o elemento e o topo
3 => Verificar essas duas variáveis sempre que o scroll for ativado
4 => Se a distância entre o elemento e o topo for maior que do scroll, adiciona classe
5 => A classe deve mostrar e animar o elemento 
*/

//1 - Distância entre o scroll e o topo
$(window).scroll(function(){
    var windowTop = $(this).scrollTop();
    //2 - Distância entre o elemento e o topo
    $('.anime').each(function(){
        if(windowTop > $(this).offset().top - 430){
            $(this).addClass('anime-init');
        }else{
            $(this).removeClass('anime-init');
        }
    });
});

