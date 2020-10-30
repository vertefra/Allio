import MenuScreen from './component/screen/MenuScreen'
import { Container, Row, Col } from 'react-bootstrap'
import Header from './component/layout/Header'

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Header />
        </Row>
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
