import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {Button} from 'react-bootstrap'
import BasicTablePopup from './BasicTablePopup'
import {confirm} from '../../functions/confirm'

const BodyRow = styled.tr`
background-color: ${props => props.active ? '#cff0e9' : ''};
color: #212529;
td {
border: none;
word-wrap: anywhere;
}`
const ButtonTable = styled(Button)`
text-decoration: none;
color: #6e889d;
padding: 0;
&:hover{color: rgba(40,44,52,0.8)};
`

const BasicTableBodyRow = ({isActive, rowData, currentTable, dispatch, inputTypes, url}) => {
  const [active, setActive] = useState(isActive)
  const [open, setOpen] = useState(false)
  const filted = Object.keys(rowData).filter(x => Object.keys(inputTypes).includes(x))
  let d = {}

  filted.map(item => {
    for (let a in rowData) {
      if (a === item)
        d[item] = rowData[item]
    }
  })

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
        {Object.values(rowData).map((item, index) => {
          return (
            <td key={index}>{item}</td>
          )
        })}
        <td><ButtonTable variant={'link'} onClick={() => {
          setOpen(true)
        }}>View</ButtonTable></td>
        <td style={{width: '90px'}}><Button variant={'danger'} onClick={() => {
          confirm(currentTable, 'Удалить запись?', dispatch, rowData.id, 'GET_CONTENT')
        }}>Delete</Button></td>
      </BodyRow>
      <BasicTablePopup
        show={open}
        handleClose={setOpen}
        formData={inputTypes}
        formDataValue={d}
        url={`${url}/${rowData.id}`}
      />
    </React.Fragment>

  )
}
export default BasicTableBodyRow