import React from 'react'
import {Col, Row} from 'react-bootstrap'
import './SideBarUser.scss'

const SideBarUser = ({userName, userPhoto}) => {
    return (
     <Row className={'SideBarUser'}>
      <Col lg={4}>
        <img src={userPhoto} alt="UserPhoto"/>
      </Col>
       <Col lg={5}>
         <p>Welcome,</p>
         <p>{userName}</p>
       </Col>
     </Row>
    )    
}
export default SideBarUser