//Function declaration
function areaQuadrado(lado){
	var area = lado * lado;
	return area;
}
console.log(areaQuadrado(4));


//Pode-se passar quantos parâmetros quiser
function imc(peso, altura){
	var imc = peso / (altura * altura);
	return imc;
}
console.log(imc(80, 1.8));

//Evoque uma função com ();
function corPreferida(cor) {
	if(cor == "azul"){
		console.log("Você gosta do céu!");
	}else if(cor == "amarelo"){
		console.log("Você gosta de ouro!");
	}else if(cor == "verde"){
		console.log("Você gosta de mato!");
	}else{
		console.log("Você não gosta de nada!");
	}
}
corPreferida();
corPreferida("verde");


//Escopo. Variáveis detro de funções não são acessadas fora delas.
function precisoVisitar(paisesVisitados){
	var totalPaises = 200;
	var faltam = totalPaises - paisesVisitados;
	console.log("Faltam " + faltam + " para você visitar!");
}
precisoVisitar(5);



//Anonymous Function Expression
var custoDoCarro = function(portas){
	var precoInicial = 10000;
	if(portas){
		return portas * precoInicial;
	}else{
		return 2 * precoInicial;
	}
}
console.log(custoDoCarro());