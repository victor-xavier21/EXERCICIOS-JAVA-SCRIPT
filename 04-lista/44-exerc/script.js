// Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser 
// considerado que qualquer número elevado a zero é 1, e elevado a 1 é ele próprio. Observe que 
// neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^). 


let cont=1;
let valor;
let base;


valor = parseInt(prompt("Digite um numero"))

while (cont <= 15) {
    base = base * cont
    document.write(base)
    cont++
}