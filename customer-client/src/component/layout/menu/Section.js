import { useState } from 'react'
import { Container, Col, Row, ListGroup, Button } from 'react-bootstrap'
import Quantity from './Quantity.js'

const Section = ({ sectionItems, sectionName }) => {
  const [orderIDS, setOrderIDS] = useState([])

  const addItemQuantity = ev => {
    setOrderIDS([...setOrderIDS, ev.target.id])
  }

  return (
    <Container>
      <Col>
        <div className={`section ${sectionName}`}>
          <h1>{sectionName}</h1>
        </div>
        <ListGroup variant="flush">
          {sectionItems.length > 0 &&
            sectionItems.map((item, idx) => {
              return (
                <>
                  <ListGroup.Item variant="dark">
                    <Row>
                      <Col>
                        {item.title} -{' '}
                        {sectionName === 'wines'
                          ? `$${item.bottlePrice / 100}/$${
                              item.glassPrice / 100
                            }`
                          : `$${item.price / 100}`}
                      </Col>
                      <Row>
                        <Col>
                          <Button
                            id={item.id}
                            onClick={addItemQuantity}
                            variant="outline-primary"
                          >
                            Add
                          </Button>
                        </Col>
                        <Col>
                          <Quantity id="" />
                        </Col>
                      </Row>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong className="description">{item.description}</strong>
                  </ListGroup.Item>
                </>
              )
            })}
        </ListGroup>
      </Col>
    </Container>
  )
}

export default Section
