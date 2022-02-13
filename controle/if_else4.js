const hora = 22;
let saudacao;

if (hora < 12) {
    saudacao = 'Bom dia';
} else  if (hora < 18){
    saudacao = 'Boa tarde!';
} else if (hora < 22){
    saudacao = 'Boa tarde!';
} else{
    saudacao = 'Muito tarde!'
}

// pode agrupar

console.log(saudacao);