import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Row, Col, Form, Button } from "react-bootstrap"
import Renting from "../components2/Renting"
import Message from "../components2/Message"
import Loader from "../components2/Loader"
import Paginate from "../components2/Paginate"
// import ProductCarousel from '../components/ProductCarousel'
import RentingCarousel from "../components2/RentingCarousel"
import Meta from "../components2/Meta"
import { listRentings } from "../actions/rentingActions"

const RentingScreen = ({ history, match }) => {
  // const keyword = match.params.keyword
  const [keyword, setKeyword] = useState("")

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const rentingList = useSelector((state) => state.rentingList)
  const { loading, error, rentings, page, pages } = rentingList

  useEffect(() => {
    dispatch(listRentings(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])


  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push("/")
    }
  }

  return (
    <>
      <Meta />
      {!keyword ? (
        <RentingCarousel />
      ) : (
        <Link to="/" className="btn btn-light">
          Go Back
        </Link>
      )}
      <div className="row justify-content-center">

        <h1 className="mt-3">Our Doctors</h1>
        <Form onSubmit={submitHandler} inline style={{ marginLeft: "30px" }}>
          <Form.Control
            style={{ borderRadius: "10px", width: "200px", marginLeft: "40px" }}
            type="text"
            name="q"
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search Doctor"
            className="mr-sm-2 "
          ></Form.Control>
        </Form>
      </div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {rentings.map((renting) => (
              <Col key={renting._id} sm={12} md={6} lg={4} xl={3}>
                <Renting renting={renting} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  )
}

export default RentingScreen
