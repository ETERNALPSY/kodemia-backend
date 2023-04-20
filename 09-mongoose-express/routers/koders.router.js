import express, { request, response } from "express"
import { Koder } from "../models/koders.model.js"
import { CustomError } from "../errorCustom.js"

const router = express.Router()

router.get('/', async (request, response) => {
    try {
        const allKoders = await Koder.find({})//koder es el modelo (interfaz) que nos permite conectarnos a la base de datos

        if (!allKoders) throw new CustomError('Koders no encontrados', 404)

        response.json({
            success: true,
            message: " Hola desde mi API mongoose express en router",
            data: {
                koders: allKoders
            }
        })

    } catch (error) {
        response
            .status(error.status || 400)
            .json({
                success: false,
                message: error.message
            })
    }
})

router.post("/", async (request, response) => {
    try {
        const koderData = request.body;
        console.log({ koderData })

        const koderCreated = await Koder.create(koderData)
        console.log({ koderCreated })

        if (!koderData) throw new CustomError('No se pudo crear el koder', 404)

        response
            .status(201)
            .json({
                success: true,
                data: {
                    koder: koderCreated
                }
            })

    } catch (error) {
        response
            .status(error.status || 400)
            .json({
                success: false,
                message: error.message
            })
    }
})

router.patch("/:id", async (request, response) => {
    try {
        const { id } = request.params
        const dataToPatch = request.body

        const koderToUpdate = await Koder.findByIdAndUpdate(id, dataToPatch, { new: true })
        console.log(koderToUpdate)

        if (!id) throw new CustomError("No se pudo actualizar el koder", 400)

        response
            .status(202)
            .json({
                success: true,
                data: {
                    koder: koderToUpdate
                }
            })

    } catch (error) {
        response
            .status(error.status || 400)
            .json({
                message: error.message
            })
    }
})

router.delete("/:id", async (request, response) => {
    try {
        const { id } = request.params

        const koderToDelete = await Koder.findByIdAndDelete(id)
        console.log(koderToDelete)

        if (!koderToDelete) throw new CustomError("No se pudo eliminar el Koder", 400)

        response
            .status(200)
            .json({
                success: true,
                data: {
                    koder: koderToDelete
                }
            })

    } catch (error) {
        response
            .status(error.status || 400)
            .json({
                success: true,
                data: {
                    koder: koderToDelete
                }
            })
    }
})

export default router