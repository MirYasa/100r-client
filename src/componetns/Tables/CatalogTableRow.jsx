import React, {useEffect, useState} from 'react'
import {BodyRow, ButtonTable} from './StyledComponentsTable'
import {Button} from 'react-bootstrap'
import {APIRequest} from '../../functions/APIRequest'
import CatalogTablePopup from './CatalogTablePopup'
import {getProduct} from '../../store/actions/catalogAction'
import {useDispatch, useSelector} from 'react-redux'
import {useLocation} from 'react-router-dom'
import {getInputs} from '../../store/actions/inputDataAction'

const CatalogTableRow = ({rowData}) => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(false)
  const local = useLocation().pathname
  const {products} = useSelector(state => state.catalog)
  // console.log(products)

  useEffect(() => {
    getProduct(dispatch, 'GET_PRODUCTS', '/admin_catalog', rowData.product_id)
  }, [])
  return (
    <React.Fragment>
      <BodyRow active={active}>
        <td><input type="checkbox" checked={active} onChange={() => {
        }} onClick={() => {
          setActive(!active)
          // console.log(rowData.product_id)
          // getInputs(dispatch, 'GET_INPUT_DATA', `/admin_catalog/create?category=${rowData.product_id}`)
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