/* Organize the many functions and variables in just a function
    1 - understand the code and what are its fails
    2 - simplify the code for readble
    3 - merging the functions and variables together in just a function Somar, but you can think in future separates the functions, but now mix them, organizing, not make all of it in just a function too
    4 - not forget to put notes and making commits in each development of mechanic in code
*/
let n = "2";
let n2 = "3489535"; 

let lengthString = "";
//fazendo a function de reverter usada no somar no final
function reverter(x) {
    return x.split("").reverse().join("");
}

function somar(x, y) {

    //largurasomareajustar
    if (x.length == y.length) {
        lengthString = x.length;
    } else if (x.length > y.length) {
        lengthString = x.length;
        y = "0".repeat(lengthString - y.length) + y;
    } else if (y.length > x.length) {
        lengthString = y.length;
        x = "0".repeat(lengthString - x.length) + x;
    };

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
    return reverter(sum);
};

console.log(`With Function: ${n} + ${n2} = ${somar(n, n2)}`, "\n",  `Without Function: ${n} + ${n2} = ${Number(n) + Number(n2)}`);