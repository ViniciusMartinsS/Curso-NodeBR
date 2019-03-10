'use strict'
const { obterPessoas } = require('./service')

async function main () {
  try {
      const { results } = await obterPessoas('a')
      const nomes = []
      /* Exemplo Realizado C/ For */
      console.time('for')
      for (let i = 0; i < results.length; i++) {
        nomes.push(results[i].name)
      }
      console.timeEnd('for')

      /* Exemplo Realizado C/ ForIn */
      console.time('forIn')
      for(const i in results) {
        nomes.push(results[i].name)
      }
      console.timeEnd('forIn')

      /* Exemplo Realizado C/ ForOf */
      console.time('forOf')
      for(const person of results){
        nomes.push(person.name)
      }
      console.timeEnd('forOf')

      console.log(nomes)
  } catch (error) {
      console.error('Deu Ruim ', error)
  }
}

main()
