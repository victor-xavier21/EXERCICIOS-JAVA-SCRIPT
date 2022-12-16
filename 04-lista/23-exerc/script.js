// Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que 
// ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que 
// ultrapassar este valor, calcular e escrever o seu salário total. 

let salarioFixo;
let valorVendas;
let vendas1;
let vendas2;
let totalSario;
let totalVendas1;
let totalVendas2;

salarioFixo = parseFloat(prompt("Informe seu salario "))
valorVendas = parseInt(prompt("Iforme o total de vendas"))
vendas1 = parseInt(prompt("Informe o total de vendas até R$1500,00"))
vendas2 = parseInt(prompt("Informe o total de vendas acima de R$1500,00"))

totalVendas1 = vendas1*1500*0.03
totalVendas2 = vendas2*1500*0.05
totalSario = totalVendas1+totalVendas2+salarioFixo
document.write("TOTAL salario = "+totalSario)


