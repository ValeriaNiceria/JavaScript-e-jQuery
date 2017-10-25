//Operadores Aritméticos
var adicao = 2 + 5;
var subtracao = 5 - 3;
var multiplicacao = 20 * 5;
var divisao = 40 / 10;
console.log(adicao, subtracao, multiplicacao, divisao);


//Ordem de importa (matemática básica)
var total1 = 20 + 5 * 2; //30
var total2 = (20 + 5) * 2; //50
var total3 = 20 / 2 * 5; //50
var total4 = 10 + 10 * 2 + 20 / 2; //40
console.log(total1, total2,total3, total4);


//Adiciona e atribui o valor
var y = 10;
	y = y + 20;
var x = 10;
	x += 20;
console.log(y, x);


//Incremento
var x = 10;
x++;
console.log(x);


//Operadores de Comparação
var teste1 = 20 == '20'; //true
var teste2 = 20 === '20'; //false
var teste3 = 20 != 20; //false
var teste4 = 20 !== '20'; //true
console.log(teste1, teste2, teste3, teste4);

var teste1 = 30 > 10; //true
var teste2 = 30 >=30; //true
var teste3 = 30 < 10; //false
var teste4 = 30 <= 30; //true
console.log(teste1, teste2, teste3, teste4);


//Operadores Lógicos
var a1 = true && true; //t && t retorna true
var a2 = true && false; //t && f retorna false
var a3 = false && true; //f && t retorna false
var a4 = false && (3 == 4); //f && f retorna false
var a5 = "Cão" && "Gato"; //t && t retorna true "Gato"
var a6 = false && "Gato"; //f  && t retorna false
console.log(a1, a2, a3, a4, a5, a6);

var b1 = true || true; //t || t retorna true
var b2 = true || false; //t || f retorna true
var b3 = false || true; //f || t retorna true
var b4 = false || (3 == 4); //f || f retorna false
var b5 = "Cão" || "Gato"; //t || t retorna true "Gato"
var b6 = false || "Gato"; //f || t retorna true "Gato"
console.log(b1, b2, b3, b4, b5, b6);



