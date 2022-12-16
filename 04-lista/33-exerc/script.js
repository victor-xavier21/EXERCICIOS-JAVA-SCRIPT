// Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado da 
//     seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se 
//     que o preço do litro da gasolina é R$ 3,30 e o preço do litro do álcool é R$ 2,90. 



let a;
let g;
let gasolina;
let litros;
let totalLitros;
let totalDesconto;

gasolina = prompt("Digite 1-Alcool ou 2-Gasolina");
litros = parseFloat(prompt("Litros vendidos"));
 
if (gasolina == 1) {
    if (litros <= 20) {
        totalLitros = 2.90 * litros;
        totalDesconto = totalLitros*0.03;
        totalLitros = totalLitros-totalDesconto;
        document.write("TOTAL = R$"+totalLitros)
    } else {
        totalLitros = 2.90 * litros;
        totalDesconto = totalLitros*0.05;
        totalLitros = totalLitros-totalDesconto;
        document.write("TOTAL = R$"+totalLitros)
    }
}

if (gasolina == 2) {
    if (litros <= 20) {
        totalLitros = 3.30 * litros;
        totalDesconto = totalLitros*0.04;
        totalLitros = totalLitros-totalDesconto;
        document.write("TOTAL = R$"+totalLitros)
    } else {
        totalLitros = 3.30 * litros;
        totalDesconto = totalLitros*0.06;
        totalLitros = totalLitros-totalDesconto;
        document.write("TOTAL = R$"+totalLitros)
    }
} 