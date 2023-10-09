import React from "react"
import ReactPlayer from "react-player"
import Card from "react-bootstrap/Card"
import { Row, Col } from "react-bootstrap"
function Videos() {
  return (
    <>
      <div className="App">
        <h1 style={{ textAlign: "center" }}>Latest  Information </h1>
        <hr />
        {/* <ReactPlayer url="https://www.youtube.com/watch?v=3FGxEYWAPf8"     /> */}

        {
          <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 1 }).map((_, idx) => (
              <Col md={5} style={{ marginLeft: -100 }}>
                {/* <Card > */}
                <Card.Body>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=Ebrp_VSInls"
                    controls={true}
                  />
                  <br />
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=qOoCIlYxLb4"
                    controls={true}
                  />
                </Card.Body>

                <Card.Body>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=JJVFSWHZYjY"
                    controls={true}
                  />
                  <br />
                  <ReactPlayer
                    url="hhttps://www.youtube.com/watch?v=js6IrC_6VcM"
                    controls={true}
                  />
                </Card.Body>
                {/* </Card> */}
              </Col>
            ))}
            <Col md={2}></Col>
            {Array.from({ length: 1 }).map((_, idx) => (
              <Col md={5}>
                {/* <Card style={{marginRight:'-200px'}}> */}
                <Card.Body>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=KHmrh6eQ6EQ"
                    controls={true}
                  />
                  <br />
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=5P6JohWZFQY"
                    controls={true}
                  />
                </Card.Body>
                <Card.Body>
                  <ReactPlayer
                    url="hhttps://www.youtube.com/watch?v=js6IrC_6VcM"
                    controls={true}
                  />
                  <br />
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=m-VAm8B-19Q"
                    controls={true}
                  />
                </Card.Body>
                {/* </Card> */}
              </Col>
            ))}
          </Row>
        }
      </div>
    </>
  )
}

export default Videos
