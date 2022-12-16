// Ler 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escrever se formam 
// ou não um triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma 
// dos outros 2 lados. 

let lado1;
let lado2;
let lado3;
let soma1;
let soma2;
let soma3;

lado1 = parseFloat(prompt("Lado 1 = "));
lado2 = parseFloat(prompt("Lado 2 = "));
lado3 = parseFloat(prompt("Laod 3 = "));
soma1 = lado1 + lado2;
soma2 = lado1 + lado3;
soma3 = lado2 + lado3;

if (lado1 & lado2 < soma1 & soma2 & soma3) {
    if (lado1 & lado3 < soma1 & soma2 & soma3) {
        if (lado2 & lado3 < soma1 & soma2 & soma3) {
            alert("Forma um Triangulo")
        }
    }
} 

else {
    alert("Não forma um Triangulo")
}

