import React from 'react'
import {Col} from 'react-bootstrap'
import SideBarUser from './SideBarUser'
import Photo from '../../Assets/userPhoto.jpg'
import SideBarList from './SideBarList'
import styled from 'styled-components'

const SideBarCom = styled(Col)`
  background-color: #2a3f54;
  height: 100vh;
  color: white;
  position: sticky;
  top: 0;
  overflow-y: scroll;
  &::-webkit-scrollbar{
  width: 0;
  }
  scrollbar-width: none;
`
const SideBarTitle = styled.h3`
  text-align: center;
  margin-top: 5%;
`
const SideBar = () => {
  return (
    <SideBarCom lg={2}>
      <SideBarTitle>Admin panel</SideBarTitle>
      <SideBarUser
        userName={'John Doe'}
        userPhoto={Photo}/>
      <SideBarList/>
    </SideBarCom>
  )
}
export default SideBar