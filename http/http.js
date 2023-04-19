const http = require('http')

const server = http.createServer((request,response) => {
    const url = request.url
    console.log('URL: ', url)

    const method = request.method
    console.log('Method: ', method)

    if (url === '/koders') {
        if (method === 'GET') {
            response.write('Aquí estarán todos los koders')
        } else if (method === 'POST') {
            response.write('Aquí puedes crear un koder')
        } else {
            response.write('No conozco la solicitud')
        }
    } else {
        response.write('No conozco la solicitud')
    }

    //response.write("Hola desde mi servidor ")
    response.end()
})

server.listen(8080,() => {
    console.log('server listening on port 8080')
})

//ctrl + C parar el servidor 
