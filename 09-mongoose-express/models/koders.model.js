import mongoose from "mongoose"

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

export { Koder }