import React, {useEffect, useState} from 'react'
import {Button} from 'react-bootstrap'
import {Delete} from '../../../functions/APIRequest'
import {BodyRow, ButtonTable} from '../StyledComponentsTable'

const BasicTableBodyRow = ({isActive, rowData, currentTable, dispatch, inputTypes, url, isPretty, openModal}) => {
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
        openModal(true, 'Просмотр и изменение', false, rowData.id, d)
      }}>Смотреть</ButtonTable></td>
      <td><Button style={{width: 90}} variant={'danger'} onClick={() => {
        Delete(currentTable, 'Удалить запись?', dispatch, rowData.id, 'GET_CONTENT', 'default')
      }}>Удалить</Button></td>
    </BodyRow>
  )
}
export default BasicTableBodyRow