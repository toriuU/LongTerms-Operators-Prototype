let numberString = "2";
let numberString2 = "2"; 

let lengthString = "";
let result = "";
//fazendo a function de reverter usada no somar no final
function reverter(x) {
    return x.split("").reverse().join("");
}
//

// ajustar o lenghtstring
//MISSÂO: fazer o ajuste aqui de x e y para o que faltar ter igualmente o valor do maior, adicionando 0s o ínicio daquele com falta
function larguraSomarEAjustar(x, y) {
    if (Number(x.length) == Number(y.length)) {
        lengthString = x.length;
    } else if (x.length > y.length) {
        lengthString = x.length;
        numberString2 = "0".repeat(lengthString - numberString2.length) + numberString2;
    } else if (y.length > x.length) {
        lengthString = y.length;
        numberString = "0".repeat(lengthString - numberString.length) + numberString;
    }
}

larguraSomarEAjustar(numberString, numberString2);
//

function somar(x, y) {
    //declarando variaveis locais
    let sum = "";
    let sumTwoDigitRest = 0; 
    let xn;
    let yn;
    for (i = lengthString; i > 0; i--) {
        xn = Number(x[i-1]);
        yn = Number(y[i-1]);
        if (String(xn + yn + sumTwoDigitRest).length == "1") {
            //somara normalmente se for 1 de largura o numero junto com  o resto da dezena do outro calculo
            sum += String(xn + yn + sumTwoDigitRest);
            //reiniciara a contagem do resto porque não tem resto, definindo-o para zero
            sumTwoDigitRest = 0;

        } else if (String(xn + yn + sumTwoDigitRest).length == "2") {
            if (i == 1) {
                //nessa condição verifica se for a ultima unidade (ouseja a primeira, tipo 1 em 1234), apra assim não ter que colcocar o negocio novamente  
                sum += reverter(String(xn + yn + sumTwoDigitRest));
   
                //reverter pois é um resultado ordenado, pois aqui a ordem vai da unidade ate a ultima casa, aqui ja segue a ultima casa (dezena) até a unidade, o que faz que termos que reverter o resultado
                sumTwoDigitRest = 0;
            } else {
                //ele somara o resto com as unidades feitas e reconhecerá somente a unidade do novo numero já que o numero tem 2 unidades de largura
                sum += String(xn + yn + sumTwoDigitRest)[1];
                //em qualquer soma de de duas unidades de uma largura será menos de 20 então passara 1 para a proxima conta
                sumTwoDigitRest = 1;
            };
        };
    };
    result = reverter(sum);
};

somar(numberString, numberString2);

console.log(`With Function: ${numberString} + ${numberString2} = ${result}`, "\n",  `Without Function: ${numberString} + ${numberString2} = ${Number(numberString) + Number(numberString2)}`);