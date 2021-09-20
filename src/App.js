import React, {} from 'react'
import {Route, Switch, useLocation} from 'react-router-dom'
import {Col, Container, Row} from 'react-bootstrap'
import Home from './layouts/Home'
import SideBar from './componetns/SideBar/SideBar'
import Forms from './layouts/Forms'
import NavBar from './componetns/NavBar/Navbar'
import Tables from './layouts/Tables'
import LoginPage from './layouts/LoginPage'

function App() {
  let location = useLocation()

  if (location.pathname === '/' || location.pathname === '/createAccount')
    return <LoginPage/>

  return (
    <Container fluid>
      <Row>
        <SideBar/>
        <Col lg={10} style={{padding: 0}}>
          <NavBar
            userName={'John Doe'}/>
          <Switch>
            <Route path={'/home'} exact component={Home}/>
            <Route path={'/forms'} exact component={Forms}/>
            <Route path={'/tables'} exact component={Tables}/>
          </Switch>
        </Col>
      </Row>
    </Container>
  )
}

export default App
