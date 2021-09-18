import React from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Col, Container, Row} from 'react-bootstrap'
import Home from './layouts/Home'
import SideBar from './componetns/SideBar/SideBar'
import Forms from './layouts/Forms'
import NavBar from './componetns/NavBar/Navbar'

function App() {
  return (
    <Router>
      <Container fluid>
        <Row>
          <SideBar/>
          <Col lg={10} style={{padding: 0}}>
            <NavBar
            userName={'John Doe'}/>
            <Switch>
              <Route path={'/'} exact component={Home}/>
              <Route path={'/Forms'} exact component={Forms}/>
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  )
}

export default App
