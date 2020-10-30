import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Navbar, Container, Form, FormControl, Button } from 'react-bootstrap'
import { submitOrder } from '../../actions/orderActions'

const Header = () => {
  const dispatch = useDispatch()
  const order = useSelector(state => {
    return state.order
  })
  const { totalPrice } = order || 0

  const handleSubmitOrder = ev => {
    ev.preventDefault()
    dispatch(submitOrder(order))
  }

  return (
    <Navbar as="header" expand="lg" collapseOnSelect>
      <Container>
        <Form inline>
          <Navbar.Text>Total order $ </Navbar.Text>
          <FormControl
            type="number"
            value={`${totalPrice / 100}`}
            readOnly={true}
          />
          <Button type="submit" onClick={handleSubmitOrder}>
            Send Order!
          </Button>
        </Form>
      </Container>
    </Navbar>
  )
}

export default Header
