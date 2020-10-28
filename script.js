let x = parseInt(prompt('Digite um número inteiro:'))
let y = parseInt(prompt('Digite um segundo número inteiro:'))
let sinal = parseInt(prompt('Digite o sinal da operação ( 1 = soma, 2 = subtração, 3 = multiplicação, 4 = divisão):'))

if (sinal === 1) {
    let soma = x + y ;
    alert(`A soma resultou em ${soma}`);
}   else if (sinal === 2) {
    let subtracao = x - y ;
    alert(`A subtração resultou em ${subtracao}`);
}   else if (sinal === 3) {
    let multiplicacao = x * y ;
    alert(`A multiplicação resultou em ${multiplicacao}`);
}   else if (sinal === 4) {
    let divisao = x / y ;
    alert(`A divisão resultou em ${divisao}`);
} else {
    alert('Algo deu errado, digite números inteiros e os operadores corretos');
}


