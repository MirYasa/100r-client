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
min-height: 500px;
.modal-dialog {
max-width: 1200px;
}
`
export const ClientHandlingTableContainer = styled.div`
height: 260px;
overflow-y: scroll; 
`