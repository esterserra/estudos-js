// console.log(Date.now ()); // milisegundos desde o dia 1 de janeiro de 1970

const futuro = Date.now() + 2000; // dois segundos
let quantidade = 0;

while (Date.now() < futuro) {
    quantidade++;
}

console.log('Qtde: ' + quantidade);