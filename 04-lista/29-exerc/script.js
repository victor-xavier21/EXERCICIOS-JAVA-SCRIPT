// Ler 3 valores (considere que não serão informados valores iguais) e escrevê-los em ordem 
// crescente. 



let valor1;
let valor2;
let valor3;

valor1 = parseFloat(prompt("Valor 1"))
valor2 = parseFloat(prompt("Valor 2"))
valor3 = parseFloat(prompt("Valor 3"))

if (valor1>valor2 & valor2>valor3) {
    document.write("Ordem crescente"+"<br>")
    document.write(valor3+"<br>"+valor2+"<br>"+valor1)
}

if (valor2>valor3 & valor3>valor1) {
    document.write("Ordem crescente"+"<br>")
    document.write(valor1+"<br>"+valor3+"<br>"+valor2)
}

if (valor2>valor1 & valor1>valor3) {
    document.write("Ordem crescente"+"<br>")
    document.write(valor3+"<br>"+valor1+"<br>"+valor2)
}

if (valor3>valor2 & valor2>valor1) {
    document.write("Ordem crescente"+"<br>")
    document.write(valor1+"<br>"+valor2+"<br>"+valor3)
}

if (valor3>valor1 & valor1>valor2) {
    document.write("Ordem crescente"+"<br>")
    document.write(valor2+"<br>"+valor1+"<br>"+valor3)
}
