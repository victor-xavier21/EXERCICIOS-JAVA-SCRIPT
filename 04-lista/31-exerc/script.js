// Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome 
// do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE. 

let time1;
let time2;
let golTime1;
let golTime2;

    time1 = prompt("Nome do time")
    golTime1 = parseInt(prompt("Quantidade de gols ")) 
    time2 = prompt("Nome do time")
    golTime2 = parseInt(prompt("Quantidade de gols")) 

    if (golTime1>golTime2) {
        alert(time1+" VENCEU")
    } else if (golTime1<golTime2) {
        alert(time2+" VENCEU")
    } else {
        alert("EMPATE")
    }