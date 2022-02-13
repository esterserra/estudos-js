const nota = -3;

let resultado;

if (nota <= 10 && nota >= 9) {
    resultado = 'A';
} else if (nota < 9 && nota >= 7) {
    resultado = 'B';
}  else if (nota < 7 && nota >= 5){
    resultado = 'C';
} else if (nota < 5 && nota >= 4.5){
    resultado = 'D';
} else if (nota >= 0 && nota <= 4.5){
    resultado = 'F';
} else {
    resultado = 'Nota não identificada'
}

console.log(resultado);