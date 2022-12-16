// Ler  o  ano  atual  e  o  ano  de  nascimento  de  uma  pessoa.  Escrever  uma mensagem  que  diga  se  ela poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu). 

function valor(){
    var anoAtual=parseInt(prompt("Digite o ano atual: "));
    var anoNascimento=parseInt(prompt("Digite o ano em que você nasceu"));
    var result= (anoAtual-anoNascimento);
    if (result>=18){
        alert(("Você tem ")+ result +(" anos. Poderá votar esse ano"));
    }else{
        alert(("Você tem ")+ result +(" anos. Não poderá votar esse ano"));
    }
}