import React from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Col, Container, Row} from 'react-bootstrap'
import Home from './layouts/Home'
import SideBar from './componetns/SideBar'
import Forms from './layouts/Forms'

function App() {
  return (
    <Router>
      <Container fluid>
       <Row>
         <SideBar/>
         <Col lg={10}>
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
