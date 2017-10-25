var nome = "Valéria"; //String
var idade = 24; //Number
var faculdade = false; //Boolean
var emprego; //Undefined

console.log(typeof nome); //Verifica o tipo de valor com a palavra chave typeof


//String
var nome = "Valéria";
var sobrenome = "Nicéria";
var nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto);


//Aspas duplas vs simples
var empresa1 = "Google";
var empresa2 = "Apple";
var frase = empresa1 + ' é mais "valiosa" que ' + empresa2; //Não se pode usar simples dentro de simples e duplas dentros de duplas
console.log(frase);


//Usa-se a barra inversa \ para ignorar a função de certos caracteres
var empresa1 = "Google";
var empresa2 = "Apple";
var frase = empresa1 + ' é mais \'valiosa\' que ' + empresa2; //Não se pode usar simples dentro de simples e duplas dentros de duplas
console.log(frase);


//Number
var gols = 1000;
var anos = 16;
var golsPorAno = gols / anos;
console.log(golsPorAno);


//Decimal
var pi = 3.14;
var raio = 5;
var area = pi * raio * raio;
console.log(area);


//NaN = Not a Number
var numero = 80;
var unidade = "Kg";
var peso = numero + unidade; //Number + String, vira String no final
console.log(peso);
var pesoPorDois = peso / 2; //Não se pode fazer uma operação matemática em algo que não é um número
console.log(pesoPorDois);


//Boolean: true ou false
var faculdade = true;
var dinheiro = false;
if(faculdade){
	console.log("Possui faculdade!");
}
if(dinheiro){
	console.log("Possui dinheiro!");
}