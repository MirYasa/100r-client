import React from 'react'
import {Col} from 'react-bootstrap'
import {Img, PFirst, SideBarUserRow} from './SideBarSryles'

const SideBarUser = ({userName, userPhoto}) => {
  return (
    <SideBarUserRow>
      <Col lg={4}>
        <Img src={userPhoto} alt="UserPhoto"/>
      </Col>
      <Col lg={5}>
        <PFirst>Welcome,</PFirst>
        <p style={{padding: 0, margin: 0}}>{userName}</p>
      </Col>
    </SideBarUserRow>
  )
}
export default SideBarUser
