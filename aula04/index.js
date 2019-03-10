'use strict'

const { promisify } = require('util')
const obterVeiculoPromise = promisify(obterVeiculo)

function obterUsuario () {
  return new Promise(function resolvePromise (resolve, reject) {
    setTimeout(() => {
      return resolve({
        id: 1,
        nome: 'Vinicius Martins',
        dataNascimento: '1996-11-18'
      })
    }, 1000);
  })
 }

 function obterTelefone (idUsuario) {
   return new Promise(function resolvePromise (resolve, reject) {
     setTimeout(() => {
       return resolve({
         numero: '973978143',
         ddd: 11
       })
     }, 2000);
   })
 }

 function obterEndereco (idUsuario) {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(() => {
      return resolve({
        rua: 'Rua Caiubi',
        numero: 946
      })
    }, 2000);
  })
 }

 function obterVeiculo(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      marca: 'Nissan',
      modelo: 'March',
      versao: '1.0 SV'
    })
  }, 2000);
 }

 async function main () {
  try {
    /*Capturar tempo de execução*/
    console.time('medida-promise')
    const usuario = await obterUsuario()
    /* Promise.all é pra quando eu só preciso esperar resultado de um */
    const resultado = await Promise.all([
      obterTelefone(usuario.id),
      obterEndereco(usuario.id),
      obterVeiculoPromise(usuario.id)
    ])
    const telefone = resultado[0]
    const endereco = resultado[1]
    const veiculo = resultado[2]

    console.log(`
    Nome Usuário: ${usuario.nome},
    Data de Nascimento: ${usuario.dataNascimento}
    Telefone do Usuário: ${telefone.ddd} ${telefone.numero}
    Endereço do Usuário: ${endereco.rua} ${endereco.numero}
    Veículo do Usuário: ${veiculo.marca} ${veiculo.modelo}
    `)
    console.timeEnd('medida-promise')
  } catch (error) {
    console.error('Deu Ruim, Irmão! ', error);

  }
 }

 main()
