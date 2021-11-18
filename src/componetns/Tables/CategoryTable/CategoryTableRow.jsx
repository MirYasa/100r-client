import React, {useState} from 'react'
import {ActionsCell, BodyRow} from '../StyledComponentsTable'
import {Button} from 'react-bootstrap'
import {Delete} from '../../../functions/APIRequest'
import {useDispatch} from 'react-redux'
import {useLocation} from 'react-router-dom'
import {MdDelete, MdEdit} from 'react-icons/md'

const CategoryTableRow = ({rowData, openModal}) => {
  const dispatch = useDispatch()
  const [active, setActive] = useState(false)
  const local = useLocation().pathname

  return (
    <BodyRow active={active}>
      <td>
        <input type="checkbox" checked={active} onChange={() => {
          setActive(!active)
        }}/>
      </td>
      {Object.entries(rowData).map(([key, val]) => {
        return <td key={key}>{key === 'parent_id' ? (val === null ? 'Нет' : val.name) : val}</td>
      })}
      <ActionsCell>
        <Button variant={'success'} onClick={() => {
          openModal(true, 'Обновление категории', rowData.id, false)
        }}><MdEdit/></Button>
        <Button variant={'danger'} onClick={() => {
          Delete(local, 'Удалить категорию?', dispatch, rowData.id, 'GET_CATEGORIES', 'catalog')
        }}><MdDelete/></Button>
      </ActionsCell>
    </BodyRow>
  )
}
export default CategoryTableRow