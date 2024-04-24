
// 2) Faça um programa que receba N (quantidade de números) e seus respectivos valores.
// Imprima o maior número par e o menor número impar.

//     Exemplo:
//         Entrada:
//             5
//             3
//             4
//             1
//             10
//             8

//         Saída:
//             Maior número par: 10
//             Menor número impar: 1

const { gets, print } = require('./funcoes-auxiliares-ex2');

const num = gets();
let maiorNumeroPar = null;
let menorNumeroImpar = null;

for (let i = 0; i < num; i++) {
    const numero = gets();

    if (numero % 2 === 0) {
        if(maiorNumeroPar === null || numero > maiorNumeroPar){
            maiorNumeroPar = numero;
        }

    } else {
        if (menorNumeroImpar === null || numero < menorNumeroImpar) {
            menorNumeroImpar = numero;
        }
    }
}

print('Maior numero par: ' + maiorNumeroPar);
print('Menor numero impar: ' +menorNumeroImpar);
