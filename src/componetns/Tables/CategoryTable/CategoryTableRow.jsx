import React, {useState} from 'react'
import {BodyRow, ButtonTable} from '../StyledComponentsTable'
import {Button} from 'react-bootstrap'
import {Delete} from '../../../functions/APIRequest'
import CategoryTablePopup from './CategoryTablePopup'
import {useDispatch} from 'react-redux'
import {useLocation} from 'react-router-dom'

const CategoryTableRow = ({rowData}) => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(false)
  const local = useLocation().pathname

  return (
    <React.Fragment>
      <BodyRow active={active}>
        <td><input type="checkbox" checked={active} onChange={() => {
        }} onClick={() => {
          setActive(!active)
        }}/></td>
        {Object.entries(rowData).map(([key, val]) => {
          return <td key={key}>{key === 'parent_id' ? (val === null ? 'Нет' : val.name) : val}</td>
        })}
        <td>
          <ButtonTable variant={'link'} onClick={() => {
            setOpen(true)
          }}>Смотреть</ButtonTable>
        </td>
        <td><Button style={{width: 90}} variant={'danger'} onClick={() => {
          Delete(local, 'Удалить категорию?', dispatch, rowData.id, 'GET_CATEGORIES', 'catalog')
        }}>Удалить</Button></td>
      </BodyRow>
      <CategoryTablePopup
        modalTitle={'Просмотр и изменение'}
        show={open}
        handleClose={setOpen}
        isCreate={false}
        data={rowData.id}/>
    </React.Fragment>
  )
}
export default CategoryTableRow