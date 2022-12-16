// Ler 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2 
// maiores. 

let valor1;
let valor2;
let valor3;
let soma;

valor1=parseFloat(prompt("Valor 1"))
valor2=parseFloat(prompt("Valor 2"))
valor3=parseFloat(prompt("Valor 3"))

if (valor1>valor2 & valor2>valor3) {
    soma=valor1+valor2
    document.write("A soma dos valores maiores é: "+soma)
} 
if (valor2>valor1 & valor1>valor3) {
    soma=valor2+valor1
    document.write("A soma dos valores maiores é: "+soma)
}
if (valor2>valor3 & valor3>valor1) {
    soma=valor2+valor3
    document.write("A soma dos valores maiores é: "+soma)
}
if (valor3>valor1 & valor1>valor2) {
    soma=valor3+valor1
    document.write("A soma dos valores maiores é: "+soma)
}
if (valor3>valor2 & valor2>valor1) {
    soma=valor3+valor2
    document.write("A soma dos valores maiores é: "+soma)
}
