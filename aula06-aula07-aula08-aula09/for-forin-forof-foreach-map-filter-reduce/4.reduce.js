'use strict'

const { obterPessoas } = require('./service')

Array.prototype.meuReduce = function (callback, valorInicial) {
  let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0]
  for (let index = 0; index < this.length; index++) {
    valorFinal = callback(valorFinal, this[index], this)
  }
  return valorFinal
}

async function main () {
  try {
    const { results } = await obterPessoas('a')
    // const altura = results.map(result => {
    //   return parseInt(result.height)
    // })
    // const totalAlturas = altura.reduce((anterior, proximo) => {
    //   return anterior + proximo
    // })
    // console.log(totalAlturas)
    // console.log(altura)
    const minhaLista = [
      ['Vinicius', 'Martins'],
      ['Sidney', 'Martins']
    ]
    const concatenar = minhaLista.meuReduce((anterior, proximo) => {
      return anterior.concat(proximo)
    }, [])
    .join(', ')
    console.log(concatenar)
  } catch (error) {
    console.error('Deu ruim ', error);
  }
}

main()
