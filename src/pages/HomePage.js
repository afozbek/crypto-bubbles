import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import CurrencyTable from '../components/CurrencyTable';

const HomePage = () => {
  return (
    <Container id="HomePage">
      <Row>
        <Col>
          <CurrencyTable />
        </Col>
      </Row>
    </Container>
  )
}

export default HomePage
