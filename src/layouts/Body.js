import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import HomePage from './../pages/HomePage';

const Body = () => {
  return (
    <Container className="body-container" fluid>
      <Row>
        <Col>
          <Router>
            <Switch>
              <Route path="/about">
                Hello World
            </Route>
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </Router>
        </Col>
      </Row>
    </Container >
  )
}

export default Body
