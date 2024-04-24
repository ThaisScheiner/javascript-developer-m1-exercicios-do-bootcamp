/*
    tem uma conversão dinamica 
    dos tipos dos dados


    -primitivos
    boolean
    null
    undefined
    number
    string
    Symbol

*/

//object

//variavel nao fica restrita a um determinado tipo
//let x = 10;
//x = 'texto';

//nao consegue mudar a referencia
//o endereço de memoria
//imutavel nao consegue mudar 
//substituiu por valor novo
//let x = 10;
//x = 20;

//mutavel consegue mudar
let y = { numero: 10 };
y.numero = 20;

//----------------------------------------------
//wrappers = classes que representam
//o mesmo tipo de dado

//ex
//tipo primitivo imutavel
true, false 

//wrappers de boolean uso raro
//objeto
new Boolean(true)

//comparação despresando o tipo
console.log(10 == '10');

//comparação considerando o tipo
console.log(10 === '10');

//converte para booleano
//resultado false
console.log(!'');

//converte para booleano
//resultado true
console.log(!!'');

//no vazio é convertido para false
const nome = '';

if(nome){
    console.log('preenchido');
}

//se tiver preenchido a string
//resultado true
console.log(!!'0');

//null = ausencia de valor
const b = null;
console.log(b);

//undefined = como se a variavel nao existisse
//ausencia de declaração
//inexistncia de definição
let y;
console.log(y);

const z = { nome: null };

console.log(z.nome); //null

console.log(z.idade); //undefined

//------------------------------------------------------------

//+Infinity, -Infinity e NaN(not a number)
//formato de represetacao numerica = Double Precision 64-bit binary format IEEE 754

//site decimal js ex 
//para resolver contas precisas 
//por conter falhas de arredondamento
0.1 - 0.3
//resultado -0.199999999998

//----------------------------------
//declarar strings
"texto"
'texto' //declara texto
`texto` //concatena

//resultado dos 2 abaixo <div id="10">teste</div>
console.log("<div id=\"10\">teste</div>");
//recomendado com ''
console.log('<div id="10">teste</div>'); 

//const id = 20;
//console.log('<div id="'+ id +'">teste</div>'); 
//resultado= <div id="20">teste</div>

//recomendado
//pode quebrar linha
const id = 20;
console.log(`<div id="${id}">teste</div>`); 
//resultado= <div id="20">teste</div>

//-------------------------------------------------------------
//Symbol = objeto imutavel unico
//usado em identificadores de objetos

//const x = Symbol('10');
//console.log(x);

//resultado = Symbol(10)

//-----------------------------------------------------------
//objeto = coleção dinanica(pode atribuir + chaves) de chave/valor
const x = {
    nome: 'Thais',
    idade: 35,
    //"teste teste": 10 //se tiver atributo composto
}

x.sobrenome = 'Scheiner' //dinamicamente +elemento

//ou
x['nome'] = 'Renan'

console.log(x);
console.log(x.nome);

//acessando um indice
console.log(x['nome']);

//

const pessoa = {
    nome: 'Thais',
    idade: 35,
    falar: function(){
        console.log(`Meu nome é ${this.nome}`);
    }  
}

pessoa.falar();