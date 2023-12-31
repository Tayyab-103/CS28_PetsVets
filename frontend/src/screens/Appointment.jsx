import React, { useState, useEffect } from "react"
import { Table, Form, Button, Row, Col } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import Message from "../components2/Message"
import Loader from "../components2/Loader"
import { getUserDetails, updateUserProfile } from "../actions/userActions"
import { listMyOrders } from "../actions/orderActions"
import { USER_UPDATE_PROFILE_RESET } from "../constants/userConstants"
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap"
import { saveShippingAddress } from "../actions/cartActions"
import axios from "axios"
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { TimePicker } from '@mui/x-date-pickers/TimePicker';


const Appointment = ({ location, history }) => {
    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [email, setEmail] = useState("")
    const [city, setCity] = useState("")
    const [address, setAddress] = useState("")
    const [postalCode, setPostalCode] = useState(null)
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userDetails = useSelector((state) => state.userDetails)
    const { loading, error, user } = userDetails

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
    const { success } = userUpdateProfile

    const orderListMy = useSelector((state) => state.orderListMy)
    const { loading: loadingOrders, error: errorOrders, orders } = orderListMy

    useEffect(() => {
        if (!userInfo) {
            history.push("/login")
        } else {
            if (!user || !user.name || success) {
                dispatch({ type: USER_UPDATE_PROFILE_RESET })
                dispatch(getUserDetails("profile"))
                // dispatch(listMyOrders())
            } else {
                setName(user.name)
                setEmail(user.email)
                setAddress(user.address)
                setPhone(user.phone)
                setCity(user.city)
                setPostalCode(user.postalCode)
            }
        }
    }, [dispatch, history, userInfo, user, success])

    // const submitHandler = (e) => {
    //   e.preventDefault()
    //   if (password !== confirmPassword) {
    //     setMessage('Passwords do not match')
    //   } else {
    //     dispatch(updateUserProfile({ id: user._id, name, email, password,city,address,postalCode,phone }))
    //   }
    // }
    const submitHandler = async (e) => {
        e.preventDefault()
        // console.log(date, time);
        await axios.post("http://localhost:5000/api/appointment", { name, email, address, city, postalCode, phone, date })
        history.push('/renting')
    }


    return (
        <div>
            <Col md={5} style={{ marginLeft: 300 }}>
                <h2>Details</h2>
                {/* <LinkContainer to="/shippingedit">
                    <Nav.Link>
                        <i className="fas fa-edit"></i> Edit
                    </Nav.Link>
                </LinkContainer> */}
                {message && <Message variant="danger">{message}</Message>}
                { }
                {success && <Message variant="success">Profile Updated</Message>}
                {loading ? (
                    <Loader />
                ) : error ? (
                    <Message variant="danger">{error}</Message>
                ) : (
                    <Form onSubmit={submitHandler}>
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="name"
                                placeholder="Enter name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="email">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="address"
                                placeholder="Enter address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="city">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="city"
                                placeholder="City"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="postalCode">
                            <Form.Label>Postal Code</Form.Label>
                            <Form.Control
                                type="postalCode"
                                placeholder="PostalCode"
                                value={postalCode}
                                onChange={(e) => setPostalCode(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="phone">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="phone"
                                placeholder="Phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="phone">
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                                type="date"
                                placeholder="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                required
                            ></Form.Control>
                        </Form.Group>

                        {/* <Form.Group controlId="phone">
                            <Form.Label>Time</Form.Label>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <TimePicker
                                    label="Select Time"
                                    value={time}
                                    onChange={(newDate) => {
                                        setTime(newDate);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </Form.Group> */}

                        <Button
                            type="submit"
                            variant="primary"
                            style={{ backgroundColor: "#1eb2a6" }}
                        >
                            Submit
                        </Button>

                        {/* <LinkContainer to='/payment'>
                <Nav.Link>
                  <i className='fas fa-shopping-edit'></i> Continue
                </Nav.Link>
              </LinkContainer> */}
                    </Form>
                )}
            </Col>
        </div>
    )
}

export default Appointment
