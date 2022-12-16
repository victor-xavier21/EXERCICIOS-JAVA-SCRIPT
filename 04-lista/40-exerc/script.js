// Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer. 

let cont=1;
let numero;
let mult;

numero = parseInt(prompt("Digite um numero"));

while (cont <= 10) {
    mult = cont * numero 
    document.write(numero+"x"+cont+"="+mult+"<br>")
    cont++
}