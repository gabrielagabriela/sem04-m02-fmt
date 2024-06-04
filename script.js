// Exercicio 01 Semana 04
let arrayNumeros = [10,10,3,3,20,6];
let somaNumeros = arrayNumeros.reduce((ant, atual) => {
  let soma = ant + atual;
  return soma
}, 0)

console.log(somaNumeros)

// Exercicio 02 Semana 04
let pares = arrayNumeros.filter((x) => {
  return x % 2 == 0
})

console.log(pares)