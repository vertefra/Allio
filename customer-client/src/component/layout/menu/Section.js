import { Container, Col, Row, ListGroup, Button } from 'react-bootstrap'
import Quantity from './Quantity.js'

const Section = ({ sectionItems, sectionName }) => {
  const addItemQuantity = ev => {
    console.log(ev)
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
                            variant="outline-primary"
                            onClick={addItemQuantity}
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
