// Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente.
function valor(){
    var n1=parseInt(prompt("Valor 1:"));
    var n2=parseInt(prompt("Valor 2:"));
    if(n1==n2){
        alert("Os valores são iguais");
    }else if(n1>n2){
        alert("A ordem crescente é: "+n2+(" - ")+n1); 
    }else{
        alert("A ordem crescente é: "+n1+(" - ")+n2); 
    }
}