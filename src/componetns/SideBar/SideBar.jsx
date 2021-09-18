import React from 'react'
import {Row, Col} from 'react-bootstrap'
import './SideBar.scss'
import SideBarUser from './SideBarUser/SideBarUser'
import Photo from '../../Assets/userPhoto.jpg'

const SideBar = () => {
  return (
    <Col lg={2} className={'SideBar'}>
      <h3>Admin panel</h3>
      <SideBarUser
      userName={'John Doe'}
      userPhoto={Photo}/>
    </Col>
  )
}
export default SideBar