// Uma empresa quer verificar se um empregado está qualificado para a aposentadoria ou não. Para 
// estar em condições, um dos seguintes requisitos deve ser satisfeito: 
//  - Ter no mínimo 65 anos de idade. 
//  - Ter trabalhado no mínimo 30 anos. 
//  - Ter no mínimo 60 anos e ter trabalhado no mínimo 25 anos. 
// Com base nas informações acima, faça um algoritmo que leia: o número do empregado (código), o ano 
// de seu nascimento e o ano de seu ingresso na empresa. O programa deverá escrever a idade e o tempo 
// de trabalho do empregado e a mensagem 'Requerer aposentadoria' ou 'Não requerer'


let cod;
let anoNascimento;
let anoAtual;
let anoIngresso;
let idade;
let tempoTrabalho;

cod = parseInt(prompt("Codigo"));
anoNascimento = parseInt(prompt("Ano de nascimento"));
anoAtual = parseInt(prompt("Ano atual"));
anoIngresso = parseInt(prompt("Ano de ingresso na empresa"));

idade = anoAtual-anoNascimento;
tempoTrabalho = anoAtual-anoIngresso;

if (idade >= 65 || tempoTrabalho>=30) {
    document.write("Código: "+cod+"<br>");
    document.write("Idade: "+idade +"<br>");
    document.write("Tempo de trabalho: "+tempoTrabalho +"<br>");
    document.write("Requer aposentadoria");
} else if (idade >= 60 & tempoTrabalho >= 25) {
    document.write("Código: "+cod+"<br>");
    document.write("Idade: "+idade +"<br>");
    document.write("Tempo de trabalho: "+tempoTrabalho +"<br>");
    document.write("Requer aposentadoria");
} else {
    document.write("Código: "+cod+"<br>");
    document.write("Idade: "+idade +"<br>");
    document.write("Tempo de trabalho: "+tempoTrabalho +"<br>");
    document.write("Não requer aposentadoria");
}

