'use strict'

/**
 * 0º Obter um usuário
 * 1º Preciso obter o número de telefone de um usuário a partir de seu ID
 * 2º Obter o enderço do usuário pelo ID
 */

 /* Recebendo uma função callback como parâmetro */
 function obterUsuario (callback) {
  // setTimeout irá retornar depois de um segundo as seguintes infos no json
  setTimeout(() => {
    // 1º Parâmetro é o erro & 2º Parâmetro é a solução/sucesso
    return callback(null, {
      id: 1,
      nome: 'Vinicius Martins',
      dataNascimento: '1996-11-18'
    })
  }, 1000);
 }

 function obterTelefone (idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      numero: '973978143',
      ddd: 11
    })
  }, 2000);
 }

 function obterEndereco (idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: 'Rua Caiubi',
      numero: 946
    })
  }, 2000);
 }

obterUsuario(function resolverUsuario (erro, usuario) {
   if (erro) {
     console.error('Problema c/ Usuário ', erro)
     return
   }
  obterTelefone(usuario.id, function resolverTelefone(erro1, telefone) {
    if (erro1) {
      console.error('Problema c/ Telefone do Usuário ', erro1)
      return
    }
    obterEndereco(usuario.id, function resolverEndereco(erro2, endereco) {
      if (erro2) {
        console.error('Problema c/ Telefone do Usuário ', erro2)
        return
      }
    console.log(`
    Nome Usuário: ${usuario.nome},
    Data de Nascimento: ${usuario.dataNascimento}
    Telefone do Usuário: ${telefone.ddd} ${telefone.numero}
    Endereço do Usuário: ${endereco.rua} ${endereco.numero}
    `)
    })
  })
})
