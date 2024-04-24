
const notas = [];

notas.push(5);
notas.push(7);
notas.push(5);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length;
console.log(media);
console.log(notas.length); //tamanho da lista

/*
const nome = 'Thais Scheiner';

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

----------------------------------------------
const nome = 'Thais Scheiner';

for (let i = 0; i < nome.length; i++) {
    const letra = nome[i];
    console.log(letra);
}
*/