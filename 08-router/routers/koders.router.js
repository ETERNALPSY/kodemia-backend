import express from "express"
import fs from "fs"

const router = express.Router() //crea el router

router.get('/', async (request, response) => {
    const dataFile = await fs.promises.readFile("./kodemia.json", "utf-8")
    const json = JSON.parse(dataFile)
    const koders = json.koders

    const {  id, name, age, generation, location } = request.query
    let filteredKoders = koders

    if (id) {
        filteredKoders = koders.filter(koder => koder.id === parseInt(id))
    }
    if (name) {
        filteredKoders = koders.filter(koder => koder.name.toLowerCase().includes(name.toLowerCase()))
    }
    if (age) {
        filteredKoders = koders.filter(koder => koder.age === parseInt(age))
    }
    if (generation) {
        filteredKoders = koders.filter(koder => koder.generation === generation)
    }
    if (location) {
        filteredKoders = koders.filter(koder => koder.location === location)
    }

    response.json({
        success: true,
        data: {
            koders: filteredKoders
        }
    })
})

router.post('/', async (request, response) => {

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

router.patch('/', async (request, response) => {
    
    const dataFile = await fs.promises.readFile("./kodemia.json", "utf-8")
    const json = JSON.parse(dataFile)
    const koders = json.koders

    const patchKoder = request.body

    let kodersMap = koders.map(koder => {
        koder.id === patchKoder.id 
        ? koder = patchKoder
        : null
        return koder
    })

    json.koders = kodersMap

    await fs.promises.writeFile('./kodemia.json', JSON.stringify(json, null, 4), "utf-8")
    const message = {
        success: true,
        message: `se actualizo ${patchKoder.name}`
        }
    response.json(message)
})

router.delete('/', async (request, response) => {

    const dataFile = await fs.promises.readFile("./kodemia.json", "utf-8")
    const json = JSON.parse(dataFile)
    const koders = json.koders

    const koderToDelete = request.body

    let deleteKoder = koders.filter(koder => koder.id != koderToDelete.id)

    json.koders = deleteKoder

    await fs.promises.writeFile('./kodemia.json', JSON.stringify(json, null, 4), "utf-8")
    const message = {
        success: true,
        message: `Se elimino el koder`
        }
    response.json(message)
})



export default router


//router subconjunto del servidor , lo agrupamos semanticamente (comparten características)