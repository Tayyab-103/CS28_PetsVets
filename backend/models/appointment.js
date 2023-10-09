import mongoose from 'mongoose'

const appointmentSchema = mongoose.Schema(
    {
        name: {
            type: String,
            // required: true,
        },
        email: {
            type: String,
        },

        address: {
            type: String,
            // required:true
        },
        city: {
            type: String,
            // required: true
        },
        postalCode: {
            type: Number,
            // required: true
        },
        phone: {
            type: String,
            // required: true
        },
        date: {
            type: String,
            // required: true
        },
        isAdmin: {
            type: Boolean,
            // required: true,
            default: false,
        },

    },
    {
        timestamps: true,
    }
)


const Appointment = mongoose.model('Appointment', appointmentSchema)

export default Appointment
