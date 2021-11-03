import React, {useState} from 'react'
import {BodyRow, ButtonTable} from '../StyledComponentsTable'
import {Button} from 'react-bootstrap'
import {Delete} from '../../../functions/APIRequest'
import {useDispatch, useSelector} from 'react-redux'
import {useLocation} from 'react-router-dom'
import CatalogView from '../../Catalog/CatalogView'

const CatalogTableRow = ({rowData}) => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(false)
  const local = useLocation().pathname
  const {products} = useSelector(state => state.catalog)

  return (
    <React.Fragment>
      <BodyRow active={active}>
        <td><input type="checkbox" checked={active} onChange={() => {
        }} onClick={() => {
          setActive(!active)
        }}/></td>
        {Object.values(rowData).map((item, index) => {
          return (
            <td key={index}>{item === true ? 'Да' : item === false ? 'Нет' : item}</td>
          )
        })}
        <td><ButtonTable variant={'link'} onClick={() => {
          setOpen(true)
        }}>Смотреть</ButtonTable></td>
        <td><Button style={{width: 90}} variant={'danger'} onClick={() => {
          Delete(local, 'Удалить продукт?', dispatch, rowData.product_id, 'GET_CATALOG', 'catalog')
        }}>Удалить</Button></td>
      </BodyRow>
      <CatalogView
        modalTitle={'Просмотр и изменение'}
        show={open}
        handleClose={setOpen}
        id={rowData.product_id}
        isCreate={false}
        data={products}/>
    </React.Fragment>
  )
}
export default CatalogTableRow