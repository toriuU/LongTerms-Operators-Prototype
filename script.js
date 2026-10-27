let number = "2342342342349999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991";
let number2 = "1"; 

function reverterString(x) {
    return x.split("").reverse().join("");
}

// medo de o (lenghtString - y/x.lenght) dar um valor alto demais e comprometer a precisão

function somar(x, y) {

    let lengthString = Math.max(x.lenght, y.length);
    //ajustando o lenghtstring
    x = x.padStart(lengthString, "0");
    y = y.padStart(lengthString, "0");

    //declarando variaveis locais
    let sum = ""; // o conjunto dos resultados
    let sumRest = 0; // o resto da operação das casas
    let sumXYRest;

    // conta de soma por casa
    for (i = lengthString; i > 0; i--) {
        sumXYRest = String(Number(x[i-1]) + Number(y[i-1]) + sumRest); // soma do resto das casas de unidades equivalentes
        if (sumXYRest.length == "1") { // se houver somente uma unidade resultante
            sum += sumXYRest;
            sumRest = 0;

        } else if (sumXYRest.length == "2") { // se houver uma dezena como resultante
            if (i == 1) { // último da contagem
                sum += reverterString(sumXYRest); 
                sumRest = 0;
            } else {
                sum += sumXYRest[1];
                sumRest = 1;
            };
        };
    };
    return reverterString(sum); // a soma é feita ao contrário como for. reverter para ver o resultado
};

console.log(`Wf: ${number} + ${number2} = ${somar(number, number2)}`,
 "\n",   
 `Wof: ${number} + ${number2} = ${Number(number) + Number(number2)}`);