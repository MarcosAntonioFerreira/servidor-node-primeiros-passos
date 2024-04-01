import http from 'http'

//CommonJS => require
//ESModules => import/export  "type": "module",
// GET => BUSCAR UM RECURSO DOBACK
// POST => CRIAR UM RECURSO NO BACK
// PUT => ATUALIZAR UM RECURSO NO BACK
// PATCH => ATUALIZAR UMA INFORMAÇÃO ESPECIFICA 
// DELETE => DELETANDO RECURSO

//stateful: salvo em memoria até desligar != stateless: salva em banco de dados ou texto, tem um save.

//JSON - Javascript Object Notation
// Cabeçalhos (requisicao/resposta) => metadados

//HTTP Status Code

const users = [];

const server = http.createServer((req, res) => {
    const { method, url } = req

    if( method === 'GET' && url ==='/users' ){
        return res
        .setHeader('Content-type','application/json')
        .end(JSON.stringify(users))
    }

    if(method ===  'POST' && url === '/users'){
        users.push({
            id: 1,
            name: 'John Doe',
            email: 'johndoe@example.com',
        })

        return res.writeHead(201).end()
    }

    return res.writeHead(404).end();
})

server.listen(3333)