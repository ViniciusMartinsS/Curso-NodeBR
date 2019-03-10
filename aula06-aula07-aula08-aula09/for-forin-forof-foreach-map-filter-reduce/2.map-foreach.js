'use strict'

const { obterPessoas } = require('./service')

/* Criando meu map */
Array.prototype.meuMap = function (callback) {
  const novoArrayMapeado = []
  for (let index = 0; index < this.length; index++) {
    const resultado = callback(this[index], index)
    novoArrayMapeado.push(resultado)
  }
  return novoArrayMapeado
}

async function main () {
 try {
  const { results } = await obterPessoas('a')
  // console.time('forE')
  // const nomesForEach = []
  // results.forEach(result => {
  //   nomesForEach.push(result.name)
  // });
  // console.log(nomesForEach)

  // const nomesMap = results.map(result => {
  //   return result.name
  // })
  // console.log(nomesMap)

  const nomesMeuMap = results.meuMap((result, index )=> {
    return `Meu índice: ${index} - Nome: ${result.name}`
  })
  console.log('meu map', nomesMeuMap)

 } catch (error) {
  console.error('Errou ', error)
 }
}

main()
