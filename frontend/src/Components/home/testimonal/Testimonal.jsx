import React, { useEffect } from "react"
import { testimonal } from "../../../dummydata"
import Heading from "../../common/heading/Heading"
// import "./style.css"
import { LinkContainer } from "react-router-bootstrap"
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap"
import Aos from "aos"
import 'aos/dist/aos.css';
import RentingCarousel from "../../../components2/RentingCarousel"

const Testimonal = () => {
  useEffect(() => {
    // eslint-disable-next-line
    Aos.init({ duration: 1500 })
  }, [])
  return (
    <>
      <section className="testimonal padding" data-aos="zoom-in-up">
        <div className="container">
          <div className="text-center mt-4">

            <Heading subtitle="DOCTORS" title="Our Trusted Doctors" />
          </div>

          {/* <div className="content grid2">
            {testimonal.map((val) => (
              <div className="items shadow my-5">
                <div className="box flex">
                  <div className="img">
                    <img src={val.cover} alt="" />
                    <i className="fa fa-quote-left icon"></i>
                  </div>
                  <div className="name">
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                  </div>
                </div>
                <p>{val.desc}</p>
                <LinkContainer to="/renting">
                  <Nav.Link>
                    <button className="btn btn-primary">Get Started</button>
                  </Nav.Link>
                </LinkContainer>
              </div>
            ))}
          </div> */}
          <RentingCarousel />
        </div>
      </section>
    </>
  )
}

export default Testimonal
