// Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá 
// ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de 
// morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente

let maca;
let morango;
let precoMaca;
let precoMorango;
let totalKg;
let totalPreco;
let totalDesconto;

maca = parseFloat(prompt("Digite quantidade de maças em kg"));
morango = parseFloat(prompt("Digite quantidade de morango em kg"));

if (maca >= 5) {
    precoMaca = maca * 1.80;
    document.write("TOTAL MAÇA = R$" + precoMaca+"<br>");
} else {
    precoMaca = maca * 1.50;
    document.write("TOTAL MAÇA = R$" + precoMaca+"<br>");
}
if (morango >= 5) {
    precoMorango = morango * 2.50;
    document.write("TOTAL MORANGO = R$" + precoMorango+"<br>");
} else {
    precoMorango = morango * 2.20;
    document.write("TOTAL MORANGO = R$" + precoMorango+"<br>");
}

totalKg = morango+maca ;
totalPreco = precoMorango+precoMaca;

if (totalKg >= 8 || totalPreco >= 25) {
    totalDesconto = totalKg*0.1;
    totalKg = totalKg - totalDesconto;
    document.write("TOTAL COM DESCONTO DE 10% = R$" + totalKg);
}


