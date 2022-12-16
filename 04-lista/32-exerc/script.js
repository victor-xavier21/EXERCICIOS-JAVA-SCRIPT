// Ler dois valores e imprimir uma das três mensagens a seguir: 
// ‘Números iguais’, caso os números sejam iguais 
// ‘Primeiro é maior’, caso o primeiro seja maior que o segundo; 
// ‘Segundo maior’, caso o segundo seja maior que o primeiro. 


let valor1;
let valor2;

valor1 = parseFloat(prompt("Valor 1 = "));
valor2 = parseFloat(prompt("Valor 2 = "));

if (valor1 == valor2) {
    alert("Os valores são iguais")
}

if (valor1 > valor2) {
    alert("Valor 1 é maior")
} 

if (valor2>valor1){
    alert("Valor 2 é maior")
}
