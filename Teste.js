// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.


const fib = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233]
const num = 00   // Número usado para o teste
let res = 0

for(i = 0; res <= num; i++){
    res = fib[i] + fib[i + 1];
    if (res === num)break;
}

if ( res === num) {
    console.log(`${num} é um número da sequência de Fibonacci.`)
} else {
    console.log(`${num} não é número da sequência de Fibonacci.`)
}

// 5) Escreva um programa que inverta os caracteres de um string.
let str = 'Guilherme'

    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }

console.log(newString)