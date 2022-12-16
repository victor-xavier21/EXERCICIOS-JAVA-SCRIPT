// Faça um algoritmo para ler: a descrição do produto (nome), a quantidade adquirida e o preço 
// unitário. Calcular e escrever o total (total = quantidade adquirida * preço unitário), o desconto e o total 
// a pagar (total a pagar = total - desconto), sabendo-se que: 
//  - Se quantidade <= 5 o desconto será de 2% 
//  - Se quantidade > 5 e quantidade <=10 o desconto será de 3% 
//  - Se quantidade > 10 o desconto será de 5%


let nome;
let qtd;
let preco;
let total;
let desconto;
let totalPagar;

nome=prompt("Nome do produto");
qtd=parseInt(prompt("Quantidade produto"));
preco=parseInt(prompt("Preço produto"));
total = qtd*preco;

if (qtd <= 5) {
    desconto = total * 0.02;
    totalPagar=total-desconto;
    document.write("TOTAL = "+total+"<br>");
    document.write("DESCONTO = "+desconto+"<br>");
    document.write("TOTAL A PAGAR = "+totalPagar+"<br>");
}
if (qtd > 5 & qtd<=10) {
    desconto = total * 0.03;
    totalPagar=total-desconto;
    document.write("TOTAL = "+total+"<br>");
    document.write("DESCONTO = "+desconto+"<br>");
    document.write("TOTAL A PAGAR = "+totalPagar+"<br>");
}
if (qtd > 10) {
    desconto = total * 0.05;
    totalPagar=total-desconto;
    document.write("TOTAL = "+total+"<br>");
    document.write("DESCONTO = "+desconto+"<br>");
    document.write("TOTAL A PAGAR = "+totalPagar+"<br>");
}


