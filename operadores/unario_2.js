let a = 1;
let b = 2;

console.log(++a === b++); // durante a comparação o ++a tem preferência. cógigo confuso
console.log(a === b);
console.log(a++ === ++b);

// prioridade da execução. o operador na frente do operando tem preferência

// simplificando

a++;
console.log(a === b);
b++;