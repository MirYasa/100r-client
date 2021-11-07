import React, {useEffect} from 'react'
import {Redirect, Route, Switch, useLocation} from 'react-router-dom'
import {Col, Container, Row} from 'react-bootstrap'
import Home from './layouts/Home'
import SideBar from './componetns/SideBar/SideBar'
import Forms from './layouts/Forms'
import NavBar from './componetns/NavBar/Navbar'
import Tables from './layouts/Tables'
import LoginPage from './layouts/LoginPage'
import {useDispatch} from 'react-redux'
import {getTabs} from './store/actions/tabsAction'
import Table from './layouts/Table'
import Catalog from './layouts/Catalog'
import Category from './layouts/Category'
import Client from './layouts/Client'
import Order from './layouts/Order'

function App() {
  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    getTabs(dispatch, 'GET_TABS', '/tabs')
  }, [])

  if (location.pathname === '/admin/' || location.pathname === '/admin/createAccount')
    return <LoginPage/>

  return (
    <Container fluid>
      <Row>
        <SideBar/>
        <Col lg={10} style={{padding: 0}}>
          <NavBar
            userName={'John Doe'}/>
          <Switch>
            <Route path={'/admin/home'} exact component={Home}/>
            <Route path={'/admin/forms'} exact component={Forms}/>
            <Route path={'/admin/tables'} exact component={Tables}/>
            <Route path={'/admin/tables/:table'} component={Table}/>
            <Route path={'/admin/admin_catalog'} exact component={Catalog}/>
            <Route path={'/admin/admin_categories'} exact component={Category}/>
            <Route path={'/admin/admin_orders'} exact component={Order}/>
            <Route path={'/admin/clients'} exact component={Client}/>
            <Route path={'/admin/:table'} exact component={Table}/>
            <Redirect to={'/admin/home'}/>
          </Switch>
        </Col>
      </Row>
    </Container>
  )
}

export default App
