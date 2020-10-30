import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Col, Row, ListGroup, Button } from 'react-bootstrap'

import Quantity from './Quantity.js'
import { defaultOrderState } from '../../../states.js'
import { updateOrder } from '../../../actions/orderActions'

const Section = ({ sectionItems, sectionName }) => {
  const [orderItems, setOrderItems] = useState({})

  const dispatch = useDispatch()
  const appState = useSelector(state => {
    return state.appState
  })

  const { loading, error } = appState

  // const orderState = useSelector(state => {
  //   return state.order
  // })

  const addItemQuantity = ev => {
    const item = ev.target.name
    const price = parseInt(ev.target.dataset.price)

    const totalPrice = orderItems.totalPrice + price

    const quantity = orderItems[sectionName][item] + 1 || 1
    setOrderItems({
      ...orderItems,
      ...(orderItems[sectionName][item] = quantity),
      totalPrice,
    })
  }

  const subItemQuantity = ev => {
    const item = ev.target.name
    let price = parseInt(ev.target.dataset.price)

    price = orderItems[sectionName][item] > 0 ? price : 0
    let quantity = orderItems[sectionName][item] - 1 || 0

    const totalPrice = orderItems.totalPrice - price
    quantity = quantity < 0 ? 0 : quantity

    setOrderItems({
      ...orderItems,
      ...(orderItems[sectionName][item] = quantity),
      totalPrice,
    })
  }

  useEffect(() => {
    dispatch(updateOrder(orderItems))
  }, [orderItems])

  useEffect(() => {
    setOrderItems(defaultOrderState)
  }, [sectionName])

  return (
    <Container>
      {loading ? (
        <h3> ...Loading </h3>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Col>
          <div className={`section ${sectionName}`} key={sectionName}>
            <h1>{sectionName}</h1>
          </div>
          <ListGroup variant="flush">
            {sectionItems.length > 0 &&
              sectionItems.map((item, idx) => {
                return (
                  <div key={idx}>
                    <ListGroup.Item variant="dark" key={item.id}>
                      <Row>
                        <Col>
                          {item.title}
                          {sectionName === 'wines'
                            ? `$${item.bottlePrice / 100}/$${
                                item.glassPrice / 100
                              }`
                            : `$${item.price / 100}`}
                        </Col>
                        <Row>
                          <Col>
                            <Button
                              name={item.title}
                              data-price={item.price || item.glassPrice}
                              onClick={addItemQuantity}
                              variant="outline-primary"
                            >
                              Add
                            </Button>
                          </Col>
                          <Col>
                            <Button
                              name={item.title}
                              data-price={item.price || item.glassPrice}
                              onClick={subItemQuantity}
                              variant="outline-primary"
                            >
                              Sub
                            </Button>
                          </Col>
                          <Col>
                            <Quantity
                              quantity={
                                orderItems[sectionName][item.title] || 0
                              }
                            />
                          </Col>
                        </Row>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong className="description">
                        {item.description}
                      </strong>
                    </ListGroup.Item>
                  </div>
                )
              })}
          </ListGroup>
        </Col>
      )}
    </Container>
  )
}

export default Section
