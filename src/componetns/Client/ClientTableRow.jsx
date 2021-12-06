import React, {useEffect, useState} from 'react'
import {Button} from 'react-bootstrap'
import {Delete} from '../../functions/APIRequest'
import {ActionsCell, BodyRow} from '../Tables/StyledComponentsTable'
import {MdDelete, MdEdit} from 'react-icons/md'

const ClientTableRow = ({isActive, rowData, currentTable, dispatch, inputTypes, openModal}) => {
  const [active, setActive] = useState(isActive)
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
    <BodyRow active={active}>
      <td><input type="checkbox" checked={active} onChange={() => {
      }} onClick={() => {
        setActive(!active)
      }}/></td>
      {Object.entries(rowData).map(([key,item], index) => {
        if (key === 'client_source_id') {
          return  null
        }
        return <td key={index}>{item}</td>
      })}
      <ActionsCell>
        <Button variant={'success'} onClick={() => {
          openModal(true, 'Обновление категории', false, rowData.id, d)
        }}><MdEdit/></Button>
        <Button variant={'danger'} onClick={() => {
          Delete(currentTable, 'Удалить клиента?', dispatch, rowData.id, 'GET_CONTENT', 'content')
        }}><MdDelete/></Button>
      </ActionsCell>
    </BodyRow>
  )
}
export default ClientTableRow