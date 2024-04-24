//orientação a prototipo
//base para o objeto

/*
//herança no js é atraves dos prototipos
const pessoa = {
    genero: 'masculino'
}

const renan = {
   nome: 'renan',
    idade: 30,
   __proto__: pessoa
}

console.log(renan.genero);
*/
//------------------------------------------------------
/*
//funcao
function Pessoa(nome, idade){
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.falar = function(){
    console.log(`Meu nome é:  ${this.nome}`);
}

const renan = new Pessoa('renan', 30);

renan.falar()

//equivalente ao de cima
class Pessoa{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }

    falar(){
        console.log(`Meu nome é:  ${this.nome}`);
    }
}
*/
//------------------------------------------------------------------
//objetos literais com prototipos
const pessoa = {
    genero: 'masculino'
}

const renan = Object.create(pessoa)

renan.nome = 'Renan';

console.log(renan.genero);