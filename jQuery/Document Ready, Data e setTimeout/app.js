//$(document).ready(function(){})  - Verifica se o documento está pronto 

$(document).ready(function(){ //Carrega o documento primeiro antes de executar o jQuery (Quando se coloca o script no inicio do código da página)
    
    //data() - Pega o valor dentro de um atributo que comece com data-
    let aEstilo = $('.abrir-modal').data('height');
    console.log(aEstilo);


    var velocidade = $('.abrir-modal').data('velocidade');
    if(velocidade == 'slow'){
        $('a').slideUp(3000);  //slideUp - Esconde o elemento com animação de slide
    }else if(velocidade == 'fast'){
        $('a').slideUp(300);
    }


    var velocidadeteste = $('.abrir-modal').data('velocidade','fast');
    var velocidadeteste = $('.abrir-modal').data('velocidade');
    console.log(velocidadeteste);

    
    //setTimeout() - Adiciona um tempo de espera antes de executar a função
    setTimeout(function(){
        $('.abrir-modal').slideUp();
    },2000);

    setTimeout(function(){
        $('.modal').slideUp();
    },4000);

    setTimeout(function(){
        $('h2').css('background','pink');
    },3500);
});

