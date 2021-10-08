import React, {useEffect, useState} from 'react'
import {Route, Switch, useLocation} from 'react-router-dom'
import {Col, Container, Row} from 'react-bootstrap'
import Home from './layouts/Home'
import SideBar from './componetns/SideBar/SideBar'
import Forms from './layouts/Forms'
import NavBar from './componetns/NavBar/Navbar'
import Tables from './layouts/Tables'
import LoginPage from './layouts/LoginPage'
import {useDispatch, useSelector} from 'react-redux'
import {getTabs} from './store/actions/tabsAction'
import Table from './layouts/Table'
import {getCatalog, getProduct} from './store/actions/catalogAction'
import Catalog from './layouts/Catalog'
import CatalogView from './componetns/Catalog/CatalogView'
import instance from './settings/defaultAxios'
import Category from './layouts/Category'
import Client from './layouts/Client'
import Order from './layouts/Order'

function App() {
  const location = useLocation()
  const dispatch = useDispatch()


  useEffect(() => {
    getTabs(dispatch, 'GET_TABS', '/tabs')
    getCatalog(dispatch, 'GET_CATALOG', '/admin_catalog')
  }, [])


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
            <Route path={'/tables/:table'} component={Table}/>
            <Route path={'/admin_catalog'} exact component={Catalog}/>
            <Route path={'/admin_catalog/:id'} exact component={CatalogView}/>
            <Route path={'/admin_categories'} exact component={Category}/>
            <Route path={'/admin_orders'} exact component={Order}/>
            <Route path={'/clients'} exact component={Client}/>
            <Route path={'/:table'} exact component={Table}/>
          </Switch>
        </Col>
      </Row>
    </Container>
  )
}

export default App
