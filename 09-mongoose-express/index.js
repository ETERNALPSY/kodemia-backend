import mongoose from "mongoose"
import express, { request, response } from "express"
import * as dotenv from "dotenv"
import kodersRouter from "./routers/koders.router.js"

dotenv.config()

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, SERVER_PORT } = process.env
const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`

//crear el server
const server = express()

//Middleware
server.use(express.json())//convierte el request a JSON = JSON.parse()
server.use('/koders', kodersRouter)


//server.use((request, response, next) => {
//    const koderName = request.body.name
//    console.log(`Hola ${koderName}`)
//    next()
//})

//server.use((request, response, next) => {
//    console.log(`Fin de la petición`)
//})


mongoose.connect(URL)
    .then((connection) => {
        console.log('database Connected')
        server.listen(SERVER_PORT,() => {
            console.log(`Server listening on port ${SERVER_PORT}`)
        })
    })
    .catch((error) => {
        console.log("Error", error)
    })