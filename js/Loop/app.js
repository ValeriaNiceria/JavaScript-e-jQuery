//Loop
//For Loop
for(var i = 0; i < 10; i++){
	console.log(i);
}

var clientes = ["André", "Maria", "Pedro", "José"];
for(var i = 0; i < clientes.length; i++){
	console.log(clientes[i]);
}


//Break
var clientes = ['João', 'Maria', 'Pedro', 'Gabriel', 'Catarina'];
for(var i = 0; i < clientes.length; i++){
	console.log(clientes[i]);
	if(clientes[i] == 'Pedro'){
		break; //Quebra o loop
	}
}


//While
var i = 0;
while(i <= 5){
	console.log(i);
	i++;
}


//A síntaxe do for pode mudar
var numero = 0, maximo = 50;
for(;numero <= maximo;){
	console.log(numero);
	numero += 10;
}