import React, { useEffect } from "react"
import OnlineCourses from "../allcourses/OnlineCourses"
import Heading from "../common/heading/Heading"
import "../allcourses/courses.css"
import { coursesCard } from "../../dummydata"
import { LinkContainer } from "react-router-bootstrap"
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap"
const HAbout = () => {

  return (
    <LinkContainer to="/homeScreen">
      <Nav.Link>
        <OnlineCourses />
      </Nav.Link>
    </LinkContainer>
  )
}

export default HAbout
