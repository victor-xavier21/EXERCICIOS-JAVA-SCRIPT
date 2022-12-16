// Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 
// 1 até 500. 



let par;
let cont;
let soma;


while (cont<500) {
    par=cont%2
    if (par == 0) {
        soma = cont + soma
    }
    cont++
}
alert(cont)