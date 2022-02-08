 let temDinheiro = false;
 let estaEnsolarado = true;
 let carroEstaNaGaragem = true;

 let resultadoE = '#1 (AND) - Vai para o shopping? ';
 resultadoE += temDinheiro && estaEnsolarado;
 console.log(resultadoE);

 let resultadoOU = '#2 (OR) - Vai para o shopping? ';
 resultadoOU += estaEnsolarado || carroEstaNaGaragem;
 console.log(resultadoOU);

 console.log(true !== false); // ou exclusivo
 console.log(true != true); 
 console.log(false ^ false); 

 console.log('Não verdadeiro: ' + !true); // not (unário)
 console.log('Não falso: ' + !false);