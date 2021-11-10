import styled from 'styled-components'
import {Col, Row} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

//SideBar
export const SideBarCom = styled(Col)`
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
export const SideBarTitle = styled.h3`
  text-align: center;
  margin-top: 5%;
`

//SideBarUser
export const Img = styled.img`
 width: 100%;
 border: solid white 4px;
 border-radius: 50%;
`
export const PFirst = styled.p`
 color: #ababad;
 padding: 0;
 margin: 10% 0 0;
`
export const SideBarUserRow = styled(Row)`
  margin: 20px 0;
`

//SubMenu
export const SideBarLink = styled.div`
  display: flex;
  color: #f5f5f5; 
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 17px;
   &.active {
   border-right: 4px solid #1abb9c;
  }
  &:hover {
  color: #e1e9fc;
    cursor: pointer;
  }
`

export const SideBarLabel = styled.span`
  margin-left: 16px;
`

export const DropdownLink = styled(NavLink)`
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5; 
  border-right: 4px solid #1abb9c;
  font-size: 16px;
  &:hover {
  color: #e1e9fc;
    cursor: pointer;
  }
`