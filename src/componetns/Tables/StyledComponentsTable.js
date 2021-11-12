import styled from 'styled-components'
import {Button, Modal, Table} from 'react-bootstrap'

export const HeadRow = styled.tr`
background-color: #3f5367;
color: white;
th {
border: none;
width: ${props => props.width === 'created_at' ? '130px' : ''};
}`
export const CustomTable = styled(Table)`
input {
width: 16px;
height: 16px;
}
`
export const BodyRow = styled.tr`
background-color: ${props => props.active ? '#cff0e9' : ''};
color: #212529;
td {
border: none;
word-wrap: anywhere;
}`
export const ButtonTable = styled(Button)`
text-decoration: none;
color: #6e889d;
padding: 0;
&:hover{color: rgba(40,44,52,0.8)};
`
export const Popup = styled(Modal)`

  .modal-dialog {
    min-width: 1400px;
    position: absolute;
    right: 10px;
    top: 10px;
    margin: 0;
      .modal-body {
        min-height: 630px;
      }
  }
`
export const ClientHandlingTableContainer = styled.div`
height: 260px;
overflow-y: scroll; 
`

export const Backdrop = styled.div`
position: fixed;
top: 0;
left: 0;
z-index: 1050;
width: 100vw;
height: 100vh;
//height: ${props => props.height + 'px'};
background-color: rgba(0,0,0,0.4);
`

export const CustomPopup = styled.div`
  position: fixed;
  overflow-y: scroll;
  right: 0;
  top: 0;
  z-index: 1051;
  background: white;
   width: 1300px;
   height: 100vh;
`