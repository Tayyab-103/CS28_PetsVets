import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row d-flex flex-column" >
            <Heading
              subtitle="WELCOME TO PETS-VETS"
              title="BEST ONLINE DOCTOR AND BOARDING FACILITIES"
            />
            <p>
              This project will provide a single platform of web portal to cater to all the needs of your
pet.
            </p>
            <div className="button">
              <button className="primary-btn mr-3">
                PURCHASE NOW <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button className="primary-btn">
                VIEW PRODUCTS <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  )
}

export default Hero
