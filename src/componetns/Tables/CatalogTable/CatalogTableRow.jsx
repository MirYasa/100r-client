import React, {useState} from 'react'
import {ActionsCell, BodyRow} from '../StyledComponentsTable'
import {Button} from 'react-bootstrap'
import {Delete} from '../../../functions/APIRequest'
import {useDispatch} from 'react-redux'
import {useLocation} from 'react-router-dom'
import {MdDelete, MdEdit} from 'react-icons/md'

const CatalogTableRow = ({rowData, openModal}) => {
  const dispatch = useDispatch()
  const [active, setActive] = useState(false)
  const local = useLocation().pathname

  return (
    <BodyRow active={active}>
      <td><input type="checkbox" checked={active} onChange={() => {
        setActive(!active)
      }}/></td>
      {Object.values(rowData).map((item, index) => {
        return <td key={index}>{item === true ? 'Да' : item === false ? 'Нет' : item}</td>
      })}
      <ActionsCell>
        <Button variant={'success'} onClick={() => {
          openModal(true, rowData.product_id, 'Обновление продукта')
        }}><MdEdit/></Button>
        <Button variant={'danger'} onClick={() => {
          Delete(local, 'Удалить продукт?', dispatch, rowData.product_id, 'GET_CATALOG', 'catalog')
        }}><MdDelete/></Button>
      </ActionsCell>
    </BodyRow>
  )
}
export default CatalogTableRow