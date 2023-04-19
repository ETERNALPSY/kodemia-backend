import express from "express"
import fs from "fs"

const router = express.Router() //crea el router

router.get('/', async (request, response) => {
    const dataFile = await fs.promises.readFile("./kodemia.json", "utf-8")
    const json = JSON.parse(dataFile)
    const mentors = json.mentors

    const { id, name, module, age, generations } = request.query
    let filteredMentors = mentors

    if (id) {
        filteredMentors = mentors.filter(mentor => mentor.id === parseInt(id))
    }
    if (name) {
        filteredMentors = mentors.filter(mentor => mentor.name.toLowerCase().includes(name.toLowerCase()))
    }
    if (module) {
        filteredMentors = mentors.filter(mentor => mentor.module.toLowerCase().includes(module.toLowerCase()))
    }
    if (age) {
        filteredMentors = mentors.filter(mentor => mentor.age === parseInt(age))
    }
    if (generations) {
        filteredMentors = mentors.filter(mentor => mentor.generations.includes(generations))
    }R

    response.json({
        success: true,
        data: {
            mentors: filteredMentors
        }
    })
})

router.post('/', async (request, response) => {

    const dataFile = await fs.promises.readFile("./kodemia.json", "utf-8")
    const json = JSON.parse(dataFile)
    const mentors = json.mentors

    const newMentor = request.body

    json.mentors.push(newMentor)

    await fs.promises.writeFile('./kodemia.json', JSON.stringify(json, null, 4), "utf-8")
    const message = {
        success: true,
        message: "se agrego un nuevo mentor"
    }
    response.json(message)
})


router.patch('/', async (request, response) => {
    
    const dataFile = await fs.promises.readFile("./kodemia.json", "utf-8")
    const json = JSON.parse(dataFile)
    const mentors = json.mentors

    const patchMentor = request.body

    let mentorsMap = mentors.map(mentor => {
        mentor.id === patchMentor.id 
        ? mentor = patchMentor
        : null
        return mentor
    })

    json.mentors = mentorsMap

    await fs.promises.writeFile('./kodemia.json', JSON.stringify(json, null, 4), "utf-8")
    const message = {
        success: true,
        message: `se actualizo ${patchMentor.name}`
        }
    response.json(message)
})

router.delete('/', async (request, response) => {

    const dataFile = await fs.promises.readFile("./kodemia.json", "utf-8")
    const json = JSON.parse(dataFile)
    const mentors = json.mentors

    const mentorToDelete = request.body

    let deleteMentor = mentors.filter(mentor => mentor.id != mentorToDelete.id)

    json.mentors = deleteMentor

    await fs.promises.writeFile('./kodemia.json', JSON.stringify(json, null, 4), "utf-8")
    const message = {
        success: true,
        message: `Se elimino el mentor`
        }
    response.json(message)
})

export default router