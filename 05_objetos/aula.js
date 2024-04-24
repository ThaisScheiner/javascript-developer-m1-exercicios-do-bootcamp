
class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    //o que acontece qdo uma pessoa é instanciada e sempre passa pelo construtor
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);  
    }
}

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const vitor = new Pessoa('Vitor', 25);
const renan = new Pessoa('Renan', 30);

compararPessoas(vitor, renan);

/*
funcao escreve o nome

function escrevaMeuNome(nome){
    console.log('Meu nome é: ' + nome);
}

escrevaMeuNome('Thais');

----------------------------------------------
function verificaIdade(idade){
    
    if(idade >= 18){
        console.log('Maior');
    } else{
        console.log('Menor');
    }
}

verificaIdade(18);

-------------------------------------------------
function escrevaMeuNome(nome){
    return 'Meu nome é: ' + nome;
}

function verificaIdade(idade){
    
    if(idade >= 18){
        console.log(escrevaMeuNome('Thais ') + 'é Maior');
    } else{
        console.log('Menor');
    }
}

verificaIdade(18);

-um objeto no javascript é uma coleção dinamica de chave/valor
-classe é a definição do que deve ser aquele objeto
-instancia uma ocorrencia daquele objeto
*/