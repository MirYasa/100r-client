import React, {useEffect, useState} from 'react'
import {BodyRow, ButtonTable} from '../StyledComponentsTable'
import {Button} from 'react-bootstrap'
import {APIRequest} from '../../../functions/APIRequest'
import CatalogTablePopup from './CatalogTablePopup'
import {getCatalog, getProduct} from '../../../store/actions/catalogAction'
import {useDispatch, useSelector} from 'react-redux'
import {Link, useLocation} from 'react-router-dom'

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
        <td><Link to={`/admin_catalog/${rowData.product_id}`}>
          <ButtonTable variant={'link'} onClick={() => {
          }}>Смотреть</ButtonTable>
        </Link></td>
        <td><Button style={{width: 90}} variant={'danger'} onClick={() => {
          APIRequest(local, 'Удалить запись?', dispatch, rowData.product_id, 'GET_CONTENT')
        }}>Удалить</Button></td>
      </BodyRow>
      <CatalogTablePopup
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