import express from 'express'
const router = express.Router()
import {
    DelAppointment,
    getAppointment,
    postAppointment,
} from '../controllers/orderController.js'


router.route('/').get(getAppointment)
router.route('/').post(postAppointment)
router.route('/:id').delete(DelAppointment)

export default router
