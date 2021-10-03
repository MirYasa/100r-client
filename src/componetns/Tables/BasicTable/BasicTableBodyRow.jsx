import React, {useEffect, useState} from 'react'
import {Button} from 'react-bootstrap'
import BasicTablePopup from './BasicTablePopup'
import {APIRequest} from '../../../functions/APIRequest'
import {BodyRow, ButtonTable} from '../StyledComponentsTable'

const BasicTableBodyRow = ({isActive, rowData, currentTable, dispatch, inputTypes, url, isPretty}) => {
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
          if (isPretty) {
            if (index > 1) {
              return null
            }
          }
          return (
            <td key={index}>{item}</td>
          )
        })}
        <td><ButtonTable variant={'link'} onClick={() => {
          setOpen(true)
        }}>Смотреть</ButtonTable></td>
        <td><Button style={{width: 90}} variant={'danger'} onClick={() => {
          APIRequest(currentTable, 'Удалить запись?', dispatch, rowData.id, 'GET_CONTENT')
        }}>Удалить</Button></td>
      </BodyRow>
      <BasicTablePopup
        show={open}
        handleClose={setOpen}
        formData={inputTypes}
        formDataValue={d}
        url={url}
        id={rowData.id}
        modalTitle={'Просмотр и изменение'}
        dispatch={dispatch}
      />
    </React.Fragment>

  )
}
export default BasicTableBodyRow