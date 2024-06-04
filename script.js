// Exercicio 01 Semana 04
let arrayNumeros = [10,10,3,3,20,6];
let somaNumeros = arrayNumeros.reduce((ant, atual) => {
  let soma = ant + atual;
  return soma
}, 0)

console.log(somaNumeros)

// Exercicio 02 Semana 04
let numerosPares = arrayNumeros.filter((x) => {
  return x % 2 == 0
})

console.log(numerosPares)

// Exercicio 03 Semana 04
let quadrados = arrayNumeros.map((numero) => {
  return numero*numero;
})

console.log(quadrados)

// Exercicio 04, 05, 06, 07 e 08 Semana 04
class Produto {
  constructor(nome, preco, quantidade) {
      this.nome = nome;
      this.preco = preco;
      this.quantidade = quantidade;
  }

  vender(quantidadeVendida){
    if(quantidadeVendida <= this.quantidade){
      this.quantidade -= quantidadeVendida;
      return `Quantidade atualizada: ${this.quantidade}`
    } else {
      return `Estoque insuficiente`
    }
  }

  repor(quantidadeReposta){
    this.quantidade += quantidadeReposta
    return `Quantidade atualizada: ${this.quantidade}`
  }

  mostrarEstoque(){
    return `O produto ${this.nome} possuí ${this.quantidade} unidades disponíveis`
  }

  atualizarPreco(novoValor){
    this.preco = novoValor;
    return `Preço atualizado: R$ ${this.preco}`
  }
}