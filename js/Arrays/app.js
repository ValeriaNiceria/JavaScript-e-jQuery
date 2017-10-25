//Array
var videoGames = ['WiiU', 'PS4', 'XBox'];
console.log(videoGames);
console.log(videoGames[1]);//PS4

//Verificar o tamanho do Array
var tamanhoArray = videoGames.length;
console.log(tamanhoArray); //3

//Último item da Array
console.log(videoGames[tamanhoArray - 1]);//Xbox

//Adicionar um Item
var polystation = videoGames.push('PolyStation');
console.log(videoGames);

//Retornar o índice pelo nome
var ps4 = videoGames.indexOf('PS4');
console.log(ps4); //1

//Remover item da array
var remover = videoGames.splice(0,1);
console.log(videoGames);
