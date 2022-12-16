// Faça um algoritmo para ler as 3 notas obtidas por um aluno nas 3 verificações e a média dos 
// exercícios que fazem parte da avaliação. Calcular a média de aproveitamento, usando a fórmula abaixo 
// e escrever o conceito do aluno de acordo com a tabela de conceitos mais abaixo: 



let n1;
let n2;
let n3;
let mediaEx;
let mediaTotal;

n1 = parseFloat(prompt("Nota 1"))
n2 = parseFloat(prompt("Nota 2"))
n3 = parseFloat(prompt("Nota 3"))
mediaEx = parseFloat(prompt("Media exercicios"))

mediaTotal = (n1+ (n2*2) + (n3*3) + mediaEx) / 7

if (mediaTotal>=9) {
    alert("A")
}

if (mediaTotal >= 7.5 & mediaTotal < 9 ) {
    alert("B")
}

if (mediaTotal >= 6 & mediaTotal < 7.5 ) {
    alert("C")
}

if (mediaTotal<6) {
    alert("D")
}
