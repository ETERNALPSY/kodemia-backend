import mongoose from "mongoose"
import dotenv from 'dotenv'

dotenv.config()
//const DB_USER = 'eternal'
//const DB_PASSWORD = 'apoc098'
//const DB_HOST = 'cluster0.wn7h3bd.mongodb.net'
//const DB_NAME = 'kodemia'
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env

const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`

const koderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 100,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 100,
        trim: true,
    },
    age: {
        type: Number,
        min: 1,
        max : 100,
        required: true
    },
    gender: {
        type: String,
        enum: ['m', 'h'],
        required: true
    },
    idGraduated: {
        type: Boolean,
        default: false
    }
})

const Koder = mongoose.model('koders', koderSchema)

mongoose.connect(URL)
    .then( async (connection) => {
        console.log('Database Connected')

        const allKoders = await Koder.find({})
        console.log(allKoders)

        //const newKoder = {
        //    name: ' Rodolfo',
        //    lastName: 'Perez',
        //    age: '23',
        //    gender: 'h'
        //}
        //const koderCreated = await Koder.create(newKoder)
        //console.log(koderCreated)


        //const newData = {
        //    name: 'Rodolfo',
        //    age: 23
        //}
        //const koderUpdated = await Koder.findByIdAndUpdate("643dfff85ac746da65ac99b7", newData, {new:true})
        //console.log(koderUpdated)


        //const koderDeleted = await Koder.findByIdAndDelete("643dfff85ac746da65ac99b7")
        //console.log(koderDeleted)
    })


    .catch((error) => {
        console.log('Error: ', error)
    })