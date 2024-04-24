//First Class Functions
//Higher Order functions
/*
    uma funcao pode ser atribuida na variavel,
    pode ser passada como parametro e tambem 
    retornada como resposta

    para invocar uma funcao so precisa da referencia e nao 
    necessariamente dar um nome para ela

    exemplo:

    function falarMeuNome(){
        console.log('Meu nome é Thais');
    }

    const referenciaNova = falarMeuNome

    referenciaNova()
*/

/*
//passar uma funcao para outra funcao
function falarMeuNome(){
    console.log('Meu nome é Thais');
}

function falarMeuNomeCompleto(){
    falarMeuNome()
    console.log('Scheiner')
}

falarMeuNomeCompleto(falarMeuNome)

*/

//function express e function declaretion

//function declaretion
//qdo executar este script sofre o hoisting
//que qdo executa as declaracoes sao lidas 1°
function nomeDaFuncao() {
    console.log('nomeDaFuncao')
}

//function expression
//nao sofre o hoisting
const nomedeOutraFuncao = function () {
    console.log('nomedeOutraFuncao')
}

nomeDaFuncao()
nomedeOutraFuncao()

//---------------------------------------------
/*
//declaracao explicita
//cria um contexto novo e isola o que esta dentro dela
//ja no arrow function nao acontece isso
function funcao1(){
    console.log(this);
}

//function expression
//arrow function
const funcao2 = () => {
    console.log(this);
}



const renan = {
    nome: 'Renan',
    funcao1,
    funcao2
}

renan.funcao1()
renan.funcao2()

*/


/*
//Closures ou Fechamentos
-qdo declara uma funcao, ela se lembra do
contexto onde ela foi declarada, onde foi criada
a funcao



function soma(x){
    return function(y){
        return x + y;
    }
}
//ou
function soma(x){
    return (y) => {
        return x + y;
    }
}
///////////////////////////////

const somaParcial = soma(10)

console.log(soma(10)(20))
//resultado 30


console.log(somaParcial(20))
console.log(somaParcial(30))
console.log(somaParcial(40))
//resultado 30  40  50

*/



/*
//functions
//Invocação Direta, Call, Apply e Operador New

function teste(){
    console.log('teste')
}
//Invocação Direta
teste()


//////////////////////////////


const pessoa = {
    nome: 'Thais',
    idade: 35
}

function gritar(prefixo){
    console.log(prefixo, this.nome);
}

//apply
//passa o contexto e os atributos
//aplica no objeto pessoa
gritar.apply(pessoa, ['Olaaaaa'])

//call
//recebe o contexto e os argumentos
gritar.call(pessoa, 'Olaaaaaa')

//new
//passando o contexto pra funcao
//e retornando esse contexto
//new

*/

//------------------------------------------------------------

/*
//Menção Honrosa aos Callbacks
//funcao com parametro
function adicao(x, y) {
    return x + y
}

function multiplicacao(x, y) {
    return x * y
}

function calcular(x, operacao, y) {
    console.log(operacao(x, y))
}

calcular(10, adicao, 20)
calcular(10, multiplicacao, 20)


    -funcao que segue uma certa assinatura como 
    parametro e essa funcao sera executada num
    momento oportuno 

document.getElementById('btn1').addEventListener('click', () => {
    console.log('clicou!')
})



a influencia da hoisting onde na function declaration a declaracao
da funcao sera içada e na function expression a declaracao 
da variavel sera içada

diferenca de arrow function das funcoes convencionais
é a sintaxe reduzida e a inexistncia do this nas arrow functions 
*/