//.offset() - Retorna um objeto com as distâncias de top e left do elemento em relação ao documento.
var imageOffset = $('.castelo').offset();
    imageTop = imageOffset.top;
    imageLeft = imageOffset.left;
console.log('Top: ' + imageTop);
console.log('Left: ' + imageLeft);


//Também é possível definir as coordenadas(não é a mesma coisa que definir top e left).
$('.castelo2').offset({
    top:80,
    left: 330
});


//.scrollTop() - Pega o topo do elemento em relação ao seu scroll (existe também o scrollLeft),
$(window).scroll(function(){
    var windowTop = $(this).scrollTop();
    console.log(windowTop);
});


//É possível definir um valor também
$('.topo').click(function(e){
    e.preventDefault();
    $(window).scrollTop(0);
});


