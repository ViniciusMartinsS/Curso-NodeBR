'use strict'

const { obterPessoas } = require('./service')

Array.prototype.meuFilter = function (callback){
  const lista = []
  for(const index in this) {
    const item = this[index]
    const result = callback(item, index, this)
    if(!result) continue;
    lista.push(item)
  }
  return lista
}

async function main () {
  try {
    const { results } = await obterPessoas('a')
    // const familiaLars = results.filter(result => {
    //   // Por padrão deve retornar um booleano para saber se deve manter ou remover da lista
    //   // False remove da lista | True mantém na lista
    //   // Não encontrou === -1 | Encontrou === posição do array
    //   const familiaresLars = result.name.toLowerCase().indexOf('lars') !== -1
    //   return familiaresLars
    // })
    const familiaLars = results.meuFilter((item, index, lista) => {
      return (item.name.toLowerCase().indexOf('lars')) !== -1
    })
    const nomes = familiaLars.map(element => {
      return element.name
    })
    console.log(nomes)
  } catch (error) {
      console.error('Deu ruim ', error)
  }
}

main()
