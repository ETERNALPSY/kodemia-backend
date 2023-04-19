import express from "express"
import fs from 'fs'

const server = express()
const port = 8080
server.use(express.json())

//server.get('/', (request, response) => {
//    response.writeHead('conten-type', 'application/json')
//    const message = {
//        message: 'Hola desde GET'
//    }
//    const messageString = JSON.stringify(message)
//    response.write(messageString)
//    response.write(messageString)
//    response.write(messageString)
//
//    response.end()
//})

server.get('/koders', async (request, response) => {
  const dataFile = await fs.promises.readFile("./kodemia.json", "utf-8")
  const json = JSON.parse(dataFile)
  const koders = json.koders

  response.json({
    success: true,
    data: {
      koders: koders
    }
  })
})

server.post('/koders', async (request, response) => {

  const dataFile = await fs.promises.readFile("./kodemia.json", "utf-8")
  const json = JSON.parse(dataFile)
  const koders = json.koders

  const newKoder = request.body

  json.koders.push(newKoder)

  await fs.promises.writeFile('./kodemia.json', JSON.stringify(json, null, 4), "utf-8")
  console.log(newKoder)
  const message = {
    success: true,
    message: "se agrego un nuevo koder "
  }
  response.json(message)
})

server.patch('/koders', (request, response) => {
  response.json({ message: "Aquí se actualizaran koders" })
})

server.delete('/koders', (request, response) => {
  response.json({ message: "Aquí se eliminaran koders" })
})

/*
    Practica:
    Generar las siguientes rutas:
        GET /koders -> Response json: { message: "Aqui estaran los koders" }
        POST /koders -> Response json: { message: "Aqui se crearan koders" }
        PATCH /koders -> Response json: { message: "Aqui se actualizaran koders"}
        DELETE /koders -> Response json: { message: "Aqui se eliminaran koders"}
*/
//server.post('/', (request, response) => {
//    response.write('POST /')
//    response.end()
//})Aqui se eliminaran koders
//
//server.patch('/', (request, response) => {
//    response.write('PATCH /')
//    response.end()
//})
//
//server.delete('/', (request, response) => {
//    response.write('DELETE /')
//    response.end()
//})
//

server.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})


// Endpoint
//
// conjunto de un metodo y una ruta (path)
// cadaenpoint  