//Objetos
//Objetos são coleções de propriedades.
//Estas compostas pela chave e valor.
var andre = {
	nome: "André",
	profissao: "Designer",
	empresa: "Origamid",
	idade: 27
};
console.log(andre.profissao);


//Valores podem ser funções, isso transforma a propriedade em um método
var quadrado = {
	totalDeLados : 4,
	area: function (lado){
		return lado * lado;
	},
	perimetro: function (lado){
		return lado * this.totalDeLados;
	}
};
console.log(quadrado.perimetro(20));
console.log(quadrado.area(4));


/*Objetos servem para partir o código em pequenas partes,
que podem ser utilizadas quando necessárias.*/
var pi = Math.PI;
console.log(pi);
console.log(typeof Math);


//dot notation get
var carro = {
	modelo: "Audi",
	portas: 4
}
var modeloCarro = carro.modelo;
console.log(modeloCarro);


//dot notation set
var carro = {
	modelo: "Audi",
	portas: 4
}
carro.modelo = "Mercedes";
console.log(carro.modelo);


//É possível adicionar propriedades e métodos
var carro = {
	modelo: "Audi",
	portas: 4
}
carro.cor = "Branco";
console.log(carro.cor);


//this.objeto
var carro = {
	modelo: "Audi",
	portas: 4,
	anuncio: function(){
		return "Este " + this.modelo + " possui " + this.portas + " portas";
	}
}
console.log(carro.anuncio());
