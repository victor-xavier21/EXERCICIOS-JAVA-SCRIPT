// Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcular e 
// escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior 
// ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'


let conta;
let saldo;
let debito;
let credito;
let saldoAtual;

conta = parseInt(prompt("Numero da conta"));
saldo = parseFloat(prompt("Saldo"));
debito = parseFloat(prompt("Debito"));
credito= parseFloat(prompt("Credito"));
saldoAtual= saldo-debito+credito;
if (saldoAtual>=0) {
    document.write("conta:"+ conta+"<br>");
    document.write("Saldo atual: R$"+saldoAtual+"<br>");
    document.write("SALDO POSITIVO");
} else {
    document.write("conta:"+ conta+"<br>");
    document.write("Saldo atual: R$"+saldoAtual+"<br>");
    document.write("SALDO NEGATIVO");
}
