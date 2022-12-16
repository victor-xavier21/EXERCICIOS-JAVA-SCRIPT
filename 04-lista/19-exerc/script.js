// Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles. 

function valor(){
    var n1=parseFloat(prompt("Valor 1 = "));
    var n2=parseFloat(prompt("Valor 2 = "));
    if(n1==n2){
        alert("Os valores são iguais");
    }else if(n1>n2){
        alert("O valor 1 é maior");
    }else{
        alert("O valor 2 é maior");
    }
}