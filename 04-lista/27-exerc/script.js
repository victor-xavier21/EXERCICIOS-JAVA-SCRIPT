// Ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.

let valor1;
let valor2;
let valor3;

valor1 = parseInt(prompt("Valor1: "));
valor2= parseInt(prompt("Valor2: "));
valor3= parseInt(prompt("Valor3: "));

if (valor1 > valor2 & valor1>valor3) {
    document.write("O maior valor informado é: "+valor1);
} 
else if (valor2>valor1 & valor2>valor3) {
    document.write("O maior valor informado é: "+valor2);
} 
else if (valor3>valor1 & valor3>valor2) {
    document.write("O maior valor informado é: "+valor3);
} 
    
