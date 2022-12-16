// A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais de  40  horas  receberá  hora  extra,  
// cujo  cálculo  é  o  valor  da  hora  regular  com  um  acréscimo  de  50%. Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas (considere que o mês possua 4 semanas exatas). 


let horasTrabalho;
let salario;
let totalSalario;
let totalExtra;
let totalHoraExtra
function valor(){
    horasTrabalho=parseInt(prompt("Horas trabalhadas em um mês: "));
    salario=parseFloat(prompt("Salario por hora: "));
    totalSalario = horasTrabalho*salario;

    if (horasTrabalho>160) {
        totalHoraExtra = horasTrabalho - 160
        totalExtra = totalHoraExtra*salario*0.5;
        totalSalario=totalSalario+totalExtra
        document.write("Salario total = "+ totalSalario + "</br>");
        document.write("Total extra = "+ totalExtra + "</br>");
    } 
    
    else {
        document.write("Salario total = "+ totalSalario + "</br>");
    }
}