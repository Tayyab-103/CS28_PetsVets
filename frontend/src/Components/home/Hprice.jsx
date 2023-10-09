import Aos from "aos"
import React, { useEffect } from "react"
import Heading from "../common/heading/Heading"
import PriceCard from "../pricing/PriceCard"
import 'aos/dist/aos.css';

const Hprice = () => {
  useEffect(() => {
    // eslint-disable-next-line
    Aos.init({ duration: 1500 })
  }, [])
  return (
    <>
      <section className="hprice padding" data-aos="zoom-in-up">
        <Heading subtitle="OUR SERVICES" title="WE PROVIDE..." />
        <div className="price container grid">
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Hprice
