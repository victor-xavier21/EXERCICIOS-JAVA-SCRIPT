// Faça um algoritmo para ler: quantidade atual em estoque, quantidade máxima em estoque e 
// quantidade mínima em estoque de um produto. Calcular e escrever a quantidade média ((quantidade 
// média = quantidade máxima + quantidade mínima)/2). Se a quantidade em estoque for maior ou igual 
// a quantidade média escrever a mensagem 'Não efetuar compra', senão escrever a mensagem 'Efetuar 
// compra'. 


let qtdAtual;
let qtdMax;
let qtdMin;
let media;

qtdAtual = parseInt(prompt("Informe quantidade atual em estoque"))
qtdMin = parseInt(prompt("Informe quantidade mínima do estoque"))
qtdMax = parseInt(prompt("Informe quantidade máxima em estoque"))
media = qtdMax+qtdMin/2
if (qtdAtual>=media) {
    document.write("Não efetuar a compra")
} else {
    document.write("Efetuar compra")
}