import React from "react"
import { Route } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { LinkContainer } from "react-router-bootstrap"
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap"
import SearchBox from "./SearchBox"
import { logout } from "../actions/userActions"
import digi from "../images/digi.jpeg"
const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header>
      <Navbar
        variant="dark"
        expand="lg"
        collapseOnSelect
        style={{ backgroundColor: "#1eb2a6" }}
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img src={digi} width={100} height={70} />
              <strong>PETS VETS</strong>
              {/* &nbsp; <strong>VETS</strong> */}
              {/* <img src='https://i.pinimg.com/236x/f8/0f/66/f80f66ae640dca558e06d7266ef391c1.jpg' width={50}/></Navbar.Brand> */}
            </Navbar.Brand>
          </LinkContainer>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Route render={({ history }) => <SearchBox history={history} />} />

            <Nav className="ml-auto d-flex justify-content-center align-items-center">
              <LinkContainer to="/homeScreen">
                <Nav.Link>Products</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/renting">
                <Nav.Link>
                  <i></i> Doctors
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/blogs">
                <Nav.Link>Boarding</Nav.Link>
              </LinkContainer>
              {/* {userInfo ? (
                <NavDropdown title="Services" id="services">
                  <LinkContainer to="/blogs">
                    <NavDropdown.Item>Our Services</NavDropdown.Item>
                  </LinkContainer> */}
              {/* <LinkContainer to="/videos">
                    <NavDropdown.Item>Videos</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/forum">
                    <NavDropdown.Item>App development</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/renting">
                    <NavDropdown.Item>SQA</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/vg">
                    <NavDropdown.Item>Game Development</NavDropdown.Item>
                  </LinkContainer> */}
              {/* </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )} */}

              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin Panel" id="adminmenu">
                  <LinkContainer to="/admin/userlist">
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/productlist">
                    <NavDropdown.Item>Add Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/bloglist">
                    <NavDropdown.Item>Add Boarding</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/rentinglist">
                    <NavDropdown.Item>Add Doctors</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/orderlist">
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/appointmentlist">
                    <NavDropdown.Item>Appointment</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
              <LinkContainer to="/videos" style={{ width: "300px !important" }}>
                <Nav.Link >NewInfo</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i> Cart
                </Nav.Link>
              </LinkContainer>

              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <>
                  <LinkContainer to='/login'>
                    <Nav.Link>
                      Login
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/signup'>
                    <Nav.Link>
                      Signup
                    </Nav.Link>
                  </LinkContainer>

                  <div></div>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
