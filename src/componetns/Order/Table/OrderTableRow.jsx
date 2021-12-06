import React, {useEffect, useState} from 'react'
import {Button} from 'react-bootstrap'
import {Delete} from '../../../functions/APIRequest'
import {ActionsCell, BodyRow} from '../../Tables/StyledComponentsTable'
import {MdDelete, MdEdit} from 'react-icons/md'

const BasicTableBodyRow = ({isActive, rowData, currentTable, dispatch, open}) => {
  const [active, setActive] = useState(isActive)

  useEffect(() => {
    setActive(isActive)
  }, [isActive])

  return (
      <BodyRow active={active}>
        <td><input type="checkbox" checked={active} onChange={() => {
        }} onClick={() => {
          setActive(!active)
        }}/></td>
        {Object.entries(rowData).map(([key, item], index) => {
          if (key === 'comment') {
            return null
          }
          return <td key={index}>{item}</td>
        })}
        <ActionsCell>
          <Button variant={'success'} onClick={() => {
            open(rowData.id, 'Просмотр и изменение', false)
          }}><MdEdit/></Button>
          <Button variant={'danger'} onClick={() => {
            Delete(currentTable, 'Удалить заказ?', dispatch, rowData.id, 'GET_ORDERS', 'catalog')
          }}><MdDelete/></Button>
        </ActionsCell>
      </BodyRow>
  )
}
export default BasicTableBodyRow