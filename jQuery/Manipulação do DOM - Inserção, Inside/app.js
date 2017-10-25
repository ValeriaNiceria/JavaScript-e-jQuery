$('p').append(' <span>Adiciona ao Final.</span>'); //.append() - Adiciona conteúdo ao final do item selecionado(dentro da tag)

$('ul').append($('p')); //Remove o elemento da posição original e move ele para os itens selecionados

$('<p>Adicionar P </p>').appendTo('ul'); //.appendTo() - O conteúdo do objeto jQuery que será adicionado ao parâmetro do appendTo

var conteudo = $('h2').html(); //.html() - Pega o conteúdo dentro do primeiro item selecionado e transforma em uma string
console.log(conteudo);
console.log(typeof conteudo);

//$('ul').html('Mudar todos os uls'); //Substitui o conteúdo de todos os itens selecionados pelo parãmetro.


//$('p').text('<p>Oi</p>'); //.text('<p>Oi</p>') - Adiciona o conteúdo, porém não renderiza o HTML dentro dele.


var conteudot = $('p').text(); //.text() - Pega o conteúdo de todos os itens que fizerem parte da seleção e junta em uma única string.
console.log(conteudot);


$('h2').prepend(' <span>Aula: </span>'); //.prepend() e .prependTo() - Mesma coisa que append, porém insere antes do conteúdo da seleção.




