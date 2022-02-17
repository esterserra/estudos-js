let nota = 11;

switch (Math.ceil(nota)) { //arredondar p cima
    default: // pode usar em qualquer lugar
        console.log('Nota Inválida!');
        break;
    case 10: case 9: case 8: case 7:
        console.log('Parabéns!');
        break;
    case 6: case 5: 
        console.log('Recuperação!');
        break;
    case 4: case 3: case 2: case 1:
        console.log('Reprovado!');
}

console.log('Fim!');