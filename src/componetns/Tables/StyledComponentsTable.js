import styled from 'styled-components'
import {Button, Table} from 'react-bootstrap'

export const HeadRow = styled.tr`
background-color: #3f5367;
color: white;
th {
border: none;
}`
export const CustomTable = styled(Table)`
input {
width: 16px;
height: 16px;
overflow-x: scroll;
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