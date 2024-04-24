var var1 = 10;
//var1 = 'texto';
var var2 = ' teste';

//resultado 10 teste
console.log(var1 + var2);

//resultado -10  tenta converter a string em texto
//operador mennos so funciona com numeros
console.log(var1 - var2);

//-------------------------------------------------------------------
//hoisting = icamento, levantar
//ordem de declaracao da variavel importa
//

function teste(){
    console.log('teste');
}

teste();

//ou assim ira funcionar 
//pega o que for declarado, joga para o começo do arquivo
//pega 1° todas as declaraçoes, funcoes e executa
teste();

function teste(){
    console.log('teste');
}

//variavel var permite se vazar de escopos
//exceto escopo de função

if(true){
    var var1 = 10;
}

console.log(var1);

//o js ira rodar 1°
var var1

if(true){
    var1 = 10;
}

console.log(var1);

////exceto escopo de função
function teste(){
    var var1 = 10;
}

teste();

console.log(var1);

//-----------------------------------------------------------------
//let se restringe a qualquer tipo de bloco
//sofre o hoisting ate o escopo do bloco
//let mantem so ao escopo do bloco
if(true){
    let var1 = 10;
}

console.log(var1);

//---------------------------------------------------------

//const se comporta igual ao let so que é uma constante

//var e let pode fazer reatribuiçoes
var x = 10;
x = 11;
console.log(x);

//const nao recebe reatribuicoes
//constante nao muda, ex: pi 3,14
//const se restringe ao escopo de bloco

// _variavel restrita ao escopo
//variavel começa com letras minusculas
//classe ou construtor começa com letra maiuscula
//variavel constante declara tudo com letra maiuscula

//variavel de nome composto usa camel case 
//exemplo: var testeVariavel = 10;







