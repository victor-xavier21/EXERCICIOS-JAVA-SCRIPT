// Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte. 

function valor(){
    var inicio=parseInt(prompt("Inicio de jogo: "));
    var fim=parseInt(prompt("Final do jogo: "));
    if (inicio<fim){
        var result=(fim-inicio);
        alert("O jogo durou: "+result+" horas.");
    }else{
        var result=24+fim-inicio;
        alert("O jogo durou: "+result+" horas.");
    }
}