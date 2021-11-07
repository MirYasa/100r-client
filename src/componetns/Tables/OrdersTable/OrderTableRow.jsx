import React, {useEffect, useState} from 'react'
import {Button} from 'react-bootstrap'
import {Delete} from '../../../functions/APIRequest'
import {BodyRow, ButtonTable} from '../StyledComponentsTable'
import OrderTablePopup from './OrderTablePopup'

const BasicTableBodyRow = ({isActive, rowData, currentTable, dispatch, inputTypes, url, isPretty}) => {
  const [active, setActive] = useState(isActive)
  const [open, setOpen] = useState(false)
  let d = {}

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
        {Object.entries(rowData).map(([key,item], index) => {
          if (key === 'comment') {
            return  null
          }
          return (
            <td key={index}>{item}</td>
          )
        })}
        <td><ButtonTable variant={'link'} onClick={() => {
          setOpen(true)
        }}>Смотреть</ButtonTable></td>
        <td><Button style={{width: 90}} variant={'danger'} onClick={() => {
          Delete(currentTable, 'Удалить заказ?', dispatch, rowData.id, 'GET_ORDERS', 'catalog')
        }}>Удалить</Button></td>
      </BodyRow>
      <OrderTablePopup
        show={open}
        isPretty={true}
        handleClose={setOpen}
        formData={inputTypes}
        formDataValue={d}
        isCreate={false}
        url={currentTable}
        id={rowData.id}
        modalTitle={'Просмотр и изменение'}
        dispatch={dispatch}
      />
    </React.Fragment>

  )
}
export default BasicTableBodyRow