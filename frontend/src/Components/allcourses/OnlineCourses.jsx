import React, { useEffect } from "react"
import "./courses.css"
import { online } from "../../dummydata"
import Heading from "../common/heading/Heading"
import Aos from "aos"
import 'aos/dist/aos.css';
import { Link } from "react-router-dom"
const OnlineCourses = () => {
  useEffect(() => {
    // eslint-disable-next-line
    Aos.init({ duration: 1500 })
  }, [])
  return (
    <>
      <section className="online" data-aos="zoom-in-up">
        <div className="container" >
          <Heading title="Browse different services" />
          <div className="content grid3 d-flex justify-content-center">
            {online.map((val) => (
              <Link to={val.link} style={{ textDecoration: "none" }}>
                <div className="box mr-5" style={{ borderRadius: "14px", width: "300px" }}>
                  <div className="img">
                    <img src={val.cover} />
                    <img src={val.hoverCover} alt="" className="show" />
                  </div>
                  <h1>{val.courseName}</h1>
                  {/* <span>{val.course}</span> */}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default OnlineCourses
