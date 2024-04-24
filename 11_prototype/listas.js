/*
//Manipulação de Listas

//const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//forma de percorre a lista orientada a funcoes
lista.forEach((value, i, listRef) => {
    console.log(value, i, listRef)
})
//resultado: 
//value = elemento na posicao,
//o indice e lista

////////////////////////////////////////////////////////////////

//const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const cb = (value, i, listRef) => {
    console.log(value + i)
}

lista.forEach(cb)

//forEach = forma mais reduzida do for
//forEach mais lento que o for
for (let i = 0; i < lista.length; i++) {
    const element = lista[i];
    cb(element, i, lista)
    
}

////////////////////////////////////////////////////////////

//maneira mais usada
//const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

lista.forEach((value) => {
    console.log(value)
})

//----------------------------------------------------------------

//filter
//const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const listaDeNumerosPares = lista.filter((element) => {
    return (element % 2 === 0)
})

console.log(listaDeNumerosPares)
*/

//--------------------------------------------------------------------------

//map
//tranformar os elementos de uma lista
/*
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
}

const lista = [new Pessoa('Thais'), new Pessoa('Fulano'), new Pessoa('Cicrano'), new Pessoa('Beltrano')]

const listaNomes = []

for (let i = 0; i < lista.length; i++) {
    const element = lista [i];
    listaNomes.push(element.nome);
}

console.log(listaNomes)

*/


/*
//com o map 

class Pessoa {
    constructor(nome) {
        this.name = nome
    }
}

const lista = [new Pessoa('Thais'), new Pessoa('Fulano'), new Pessoa('Cicrano'), new Pessoa('Beltrano')]

const listaNomes = lista.map((element) => {
    //return element.name
    //ou
    return `${i} - ${element.name}`

})

console.log(listaNomes)



// ou 
class Pessoa {
    constructor(nome) {
        this.name = nome
    }
}

const lista = [new Pessoa('Thais'), new Pessoa('Fulano'), new Pessoa('Cicrano'), new Pessoa('Beltrano')]

const listaNomes = lista.map((element) => element.name)

console.log(listaNomes)

*/


/*
//Reduce = percorrendo toda a lista e 
//transformando(reduzindo) toda a lista em um unico valor
const somaDeTodosOsNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

lista.reduce((previus, current) => {
    return previus + current
}, 0) //valor inicial

console.log(somaDeTodosOsNumeros)

*/

/*
//join = juntar um separador com um string

const lista = [1, 2, 3]
console.log(lista.join(';'))
//resultado 1;2;3

*/
const lista = [{ nome: 'Thais' }, { nome: 'Fulano' }, { nome: 'Cicrano' }, { nome: 'Beltrano' }, { nome: 'Telma' }]

console.log(
    lista.map(e => e.nome)
        .filter((e) => e.startsWith('T')) //todo mundo que começa com a letra T
        .join('; ')
)



