import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"
import "././../../src/css/SearchBox.css"
const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push("/")
    }
  }

  return (
    <Form onSubmit={submitHandler} inline style={{ marginLeft: "30px" }}>
      <Form.Control
        style={{ borderRadius: "10px", width: "200px", marginLeft: "40px" }}
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Products"
        className="mr-sm-2 "
      ></Form.Control>
      <Button type="submit" className="searchButton" style={{ borderRadius: "10px" }}>
        Search
      </Button>
    </Form>
  )
}

export default SearchBox
