'use strict'

function obterUsuario () {
  // Quando der algum pronlema -> reject(err)
  // Quando for sucesso -> resolve
  return new Promise(function resolvePromise (resolve, reject) {
    setTimeout(() => {
      // return reject(new Error('Deu Ruim Real No Usuário!'))
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
    //  return reject(new Error('Deu Ruim Real No Telefone!'))
     setTimeout(() => {
       return resolve({
         numero: '973978143',
         ddd: 11
       })
     }, 2000);
   })
 }

 function obterEndereco () {
  return new Promise(function resolvePromise(resolve, reject) {
    //  return reject(new Error('Deu Ruim Real No Endereço!'))
    setTimeout(() => {
      return resolve({
        rua: 'Rua Caiubi',
        numero: 946
      })
    }, 2000);
  })
 }

 // Ao invés de promissificar um callback na mão, podemos utilizar o utils promisify
 const { promisify } = require('util')
 const obterVeiculoPromise = promisify(obterVeiculo)

 function obterVeiculo(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      marca: 'Nissan',
      modelo: 'March',
      versao: '1.0 SV'
    })
  }, 2000);
 }

 obterUsuario()
  .then(usuario => {
    return obterTelefone(usuario.id)
        .then(telefone => {
          return {
            ...usuario,
            ...telefone
          }
        })
  })
  .then(usuarioEtelefone => {
    return obterEndereco(usuarioEtelefone.id)
        .then(endereco => {
          return {
            ...usuarioEtelefone,
            ...endereco
          }
        })
  })
  .then(usuarioEtelefoneEendereco => {
    return obterVeiculoPromise(usuarioEtelefoneEendereco.id)
        .then(veiculo => {
          console.log(`
          Nome Usuário: ${usuarioEtelefoneEendereco.nome},
          Data de Nascimento: ${usuarioEtelefoneEendereco.dataNascimento}
          Telefone do Usuário: ${usuarioEtelefoneEendereco.ddd} ${usuarioEtelefoneEendereco.numero}
          Endereço do Usuário: ${usuarioEtelefoneEendereco.rua} ${usuarioEtelefoneEendereco.numero}
          Veículo do Usuário: ${veiculo.marca} ${veiculo.modelo}
          `)
        })
  })
  .catch(err => console.error('Deu Ruim! ', err))
