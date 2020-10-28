import { useState } from 'react'
import MenuScreen from './component/screen/MenuScreen'
import { Container, Row, Col } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <MenuScreen />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
