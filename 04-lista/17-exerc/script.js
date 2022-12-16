// Ler  as  notas  da  1a.  e  2a.  avaliações  de  um  aluno.  Calcular  a  média aritmética  simples  e  escrever uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o aluno é aprovado). Escrever também a média calculada. 

function valor(){
    var n1=parseFloat(prompt("Nota 1 = "))
    var n2=parseFloat(prompt("Nota 2 = "))
    var media= (n1+n2)/2
    if(media>=6){
        alert("Aprovado")
    }else{
        alert("Reprovado")
    }
}