//Condicionais
//If e Else
var idade = 12;
if (idade >= 18) {
	console.log('Você pode dirigir!');
} else {
	console.log('Você não pode dirigir!');
}

//Condicionais else if
var faculdade = false;
var ensinomedio = true;
if (faculdade) {
	console.log ('Adiciona R$1000,00');
} else if (ensinomedio) {
	console.log('Adiciona R$800,00');
} else {
	console.log('Adiciona R$600,00');
}


//O valor de () é transformado em Boolean
var teste = Boolean("Valéria");
console.log(teste);
//Undefined, null, 0, NaN, string vazia("") retorna false
