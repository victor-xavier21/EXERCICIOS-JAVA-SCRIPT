// Escreva um algoritmo que leia as idades de 2 homens e de 2 mulheres (considere que as idades 
//     dos homens serão sempre diferentes entre si, bem como as das mulheres). Calcule e escreva a soma 
//     das idades do homem mais velho com a mulher mais nova, e o produto das idades do homem mais 
//     novo com a mulher mais velha. 


let homem1;
let homem2;
let mulher1;
let mulher2;
let soma;

homem1 = parseInt(prompt("Idade homem 1 "));
homem2 = parseInt(prompt("Idade homem 2"));
mulher1 = parseInt(prompt("Idade mulher 1"));
mulher2 = parseInt(prompt("Idade mulher 2"));

if (homem1>homem2 & mulher1>mulher2) {
    soma = homem1 + mulher2;
    alert(soma);
} 

if (homem2>homem1 & mulher2>mulher1) {
    soma = homem2 + mulher1; 
    alert(soma);
}

if (homem1>homem2 & mulher2>mulher1) {
    soma = homem1 + mulher1; 
    alert(soma);
}

if (homem2>homem1 & mulher1>mulher2) {
    soma = homem2 + mulher2; 
    alert(soma);
}



