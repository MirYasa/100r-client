import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {Button} from 'react-bootstrap'
import BasicTablePopup from './BasicTablePopup'

const BodyRow = styled.tr`
background-color: ${props => props.active ? '#cff0e9' : ''};
color: #212529;
td {
border: none;
}`
const ButtonTable = styled(Button)`
text-decoration: none;
color: #6e889d;
padding: 0;
&:hover{color: rgba(40,44,52,0.8)};
`

const BasicTableBodyRow = ({isActive, rowData}) => {
  const [active, setActive] = useState(isActive)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    setActive(isActive)
  }, [isActive])
  return (
    <React.Fragment>
      <BodyRow active={active}>
        <td><input type="checkbox" checked={active} onChange={() => {
        }} onClick={() => {
          setActive(!active)
        }}/></td>
        <td>{rowData.invoice}</td>
        <td>{rowData.invoiceDate}</td>
        <td>{rowData.order}</td>
        <td>{rowData.billToName}</td>
        <td>{rowData.status}</td>
        <td>{rowData.amount}</td>
        <td><ButtonTable variant={'link'} onClick={()=> {setOpen(true)}}>View</ButtonTable></td>
      </BodyRow>
      <BasicTablePopup
        show={open}
        handleClose={setOpen}/>
    </React.Fragment>

  )
}
export default BasicTableBodyRow