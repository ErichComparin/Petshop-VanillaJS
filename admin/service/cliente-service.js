
const url = 'http://localhost:3000/profile'

const listaClientes = () => {

  return fetch(url)
    .then(resposta => {
      if(resposta.ok){
        return resposta.json()
      }
      throw new Error('Não foi possível listar os clientes')
    })

  /* PROMISE
    const promise = new Promise((resolve, reject) => {
    const http = new XMLHttpRequest()
    http.open('GET', 'http://localhost:3000/profile')

    http.onload = () => {
      if (http.status >= 400){
        reject(JSON.parse(http.response))
      }else{
        resolve(JSON.parse(http.response))
      }
    }

    http.send()
  })
  return promise
  */
}

const criaCliente = (nome, email) => {

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify({
      nome: nome,
      email: email
    })
  })
  .then(resposta => {
    if(resposta.ok){
      return resposta.body
    }
    throw new Error('Não foi possível criar o cliente')

  })

}

const removeCliente = (id) => {
 
  return fetch(`${url}/${id}`, {
    method: 'DELETE',
  }).then(resposta => {
    if(!resposta.ok){
      throw new Error('Não foi possível remover o cliente')
    }   
  })

}

const detalhaCliente = (id) => {

  return fetch(`${url}/${id}`)
    .then(resposta => {
      if(resposta.ok){
        return resposta.json()
      }
      throw new Error('Não foi possível detalhar o cliente')
    })

}

const atualizaCliente = (id, nome, email) => {

  return fetch(`${url}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify({
      nome: nome,
      email: email
    })
  })
  .then(resposta => {
    if(resposta.ok){
      return resposta.json()
    }
    throw new Error('Não foi possível atualizar o cliente')
  })

}

export const clienteService = {
  listaClientes,
  criaCliente,
  removeCliente,
  detalhaCliente,
  atualizaCliente
}