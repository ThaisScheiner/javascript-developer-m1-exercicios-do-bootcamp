
function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Acima do peso';
    } else if (imc >= 30 && imc < 40) {
        return 'Obeso';
    } else {
        return 'Obsedidade Grave';
    }
}

// Main
(function () {
    const peso = 75;
    const altura = 1.75;
    
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})();

/*
    function teste(){
        console.log('teste');
    }

   //chamando função
    teste(); 


--------------------------------------------------------------

    function sayMyName(name){
        console.log('Your name is:' + name);
    }

   //chamando função
    sayMyName('Thais'); 

----------------------------------------------------------------
 function quadrado(valor){
        return valor * valor;
    }

    const quadradoDeDez = quadrado(10);
    console.log(quadradoDeDez);

------------------------------------------------------------------
function incrementarJuros(valor, percentualJuros){
        const valorAcrescimo = (percentualJuros /100) * valor;
        return valor + valorAcrescimo;
    }

    console.log(incrementarJuros(100, 10));


*/