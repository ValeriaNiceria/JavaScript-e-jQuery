$('<span>.</span>').insertAfter('p'); // .after() e .insertAfter() - Adiciona conteudo apos o item selecionado
$('p').after('<span>Valeria</span>');


$('p').before('<span>#</span>'); //.before() e .insertBefore() - Adiciona conteudo antes do item selecionado
$('<span>@</span>').insertBefore('p');


$('p').wrap('<div class="azul"></div>'); //.wrap() - Envolve o conteudo selecionado nas tags especificadas


$('ul li a').unwrap(); //.unwrap() - Remove o elemento pai do item selecionado

