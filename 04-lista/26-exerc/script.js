// Ler um valor e escrever se é positivo, negativo ou zero.



let valor;

valor = parseFloat(prompt("Digite um numero"));

if (valor>0) {
    document.write("Numero informado é possitivo");
}else if (valor<0) {
    document.write("Numero informado é negativo");
} else {
    document.write("Numero informado é zero");
}

