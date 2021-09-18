import React from 'react'
import {Col, Row} from 'react-bootstrap'
import styled from 'styled-components'

const Img = styled.img`
 width: 100%;
 border: solid white 4px;
 border-radius: 50%;
`
const PFirst = styled.p`
 color: #ababad;
 padding: 0;
 margin: 10% 0 0;
`
const SideBarUserRow = styled(Row)`
  margin: 20px 0;
`

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
