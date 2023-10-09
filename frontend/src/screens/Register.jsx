import Button from 'react-bootstrap/Button';
import React from 'react'
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
const Register = () => {

    return (
        <>
            <div style={{
                height: "100vh",
                background: "#f7f7f7b8",
                padding: "1px",
            }}>

                <div className="titles">
                    <h1 className="text-center font-weight-bold" style={{ marginTop: "50px", fontSize: "21px" }}>We're glad you're here!</h1>
                    <p className="text-center mt-3" style={{ fontSize: "16px" }}>First of all, what do you want to do?</p>

                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "baseline", gap: "68px", flexWrap: "wrap" }} >

                    <Card style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "275px" }}>
                        <Card.Body>


                            <h5 style={{ textAlign: "center", marginTop: "7px" }}>
                                Create your boarding account
                            </h5>
                            <NavLink to="/signup/boarding">
                                <Button variant="success" style={{ outline: "none", width: "100%", marginTop: "15px" }}>Add Boarding</Button>
                            </NavLink>
                            {/* <p >

You can also signup using
<NavLink href="#" variant="body2">
Google, facebook
</NavLink>
</p> */}

                        </Card.Body>

                    </Card >
                    <h1 style={{ fontWeight: "bold" }}> or </h1>
                    <Card style={{ marginTop: "100px", display: "flex", justifyContent: "center", alignItems: "center", width: "275px" }}>
                        <Card.Body>

                            <h5 style={{ textAlign: "center", marginTop: "7px" }}>
                                Create a doctor account
                            </h5>
                            <NavLink to="/signup/doctor">
                                <Button variant="success" style={{ outline: "none", width: "100%", marginTop: "15px" }} > Join as a Doctor</Button>
                            </NavLink>

                        </Card.Body>

                    </Card>
                </div>
            </div>

        </>
    )
}

export default Register