import React, { useEffect, useState } from "react"
import { LinkContainer } from "react-router-bootstrap"
import { Table, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import Message from "../components2/Message"
import Loader from "../components2/Loader"
import { listOrders } from "../actions/orderActions"
import axios from "axios"

const AppointmentList = ({ history }) => {
    const [appointment, setAppointment] = useState([])
    const [loading, setLoading] = useState(false)

    const getAppointment = async () => {
        setLoading(true)
        const { data } = await axios.get("http://localhost:5000/api/appointment")
        setAppointment(data)
        setLoading(false)
    }
    useEffect(() => {
        getAppointment()
    }, [])

    const delOrder = async (id) => {
        const choice = window.confirm("Are you sure?")
        if (choice) {
            await axios.delete(`http://localhost:5000/api/appointment/${id}`)
            window.location.reload();
        }
    }

    return (
        <>
            <h1 style={{ textAlign: "center" }}>Appointment</h1>
            {
                loading ? <Loader /> :
                    <Table variant="outline-success" className="table-sm table-bordered">
                        <thead style={{ backgroundColor: "#1eb2a6" }}>
                            <tr style={{ color: "#FFFFFF" }}>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>Date</th>
                                <th>EMAIL</th>
                                <th>ADDRESS</th>
                                <th>CITY</th>
                                <th>PHONE</th>
                                <th>REMOVE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appointment?.map((appointment) => (
                                <tr key={appointment._id}>
                                    <td>{appointment._id}</td>
                                    <td>{appointment.name}</td>
                                    <td>{appointment.date}</td>
                                    <td>{appointment.email}</td>
                                    <td>Rs.{appointment.address}</td>
                                    <td> {appointment.city} </td>
                                    <td>  {appointment.phone}  </td>
                                    <td><i className="fas fa-times" onClick={() => delOrder(appointment._id)} style={{ color: "red", cursor: "pointer" }}></i></td>

                                </tr>
                            ))}
                        </tbody>
                    </Table>
            }
        </>
    )
}

export default AppointmentList
