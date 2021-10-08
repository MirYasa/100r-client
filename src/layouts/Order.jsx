import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import instance from '../settings/defaultAxios'
import {getCatalog} from '../store/actions/catalogAction'
import PaginationList from '../componetns/PaginationList'
import OrderTable from '../componetns/Tables/OrdersTable/OrderTable'
import OrderTablePopup from '../componetns/Tables/OrdersTable/OrderTablePopup'
import {Container, CreateButton} from './LayoutStyles'

const Order = () => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [page, setPage] = useState(0)
  const [count, setCount] = useState(0)
  const {orders} = useSelector(state => state.catalog)

  useEffect(() => {
    instance.get(`/admin_orders`)
      .then(data => {
        setCount(data.data.count)
      })
  }, [])
  useEffect(() => {
    getCatalog(dispatch, 'GET_ORDERS', `/admin_orders?page=${page}&order=id&direction=asc`)
  }, [page])

  return (
    <Container>
      <CreateButton variant={'warning'} onClick={() => {
        setOpen(true)
      }}>Создать</CreateButton>
      <OrderTable
        tableData={orders}
        currentPage={page}
        currentTable={'admin_orders'}
        dispatch={dispatch}/>
      <PaginationList
        count={count}
        updatePage={setPage}/>
      <OrderTablePopup
        show={open}
        handleClose={setOpen}
        id={1}
        modalTitle={'Создать'}
        isCreate={true}
        data={orders}
        url={'/admin_orders'}
        dispatch={dispatch}
      />
    </Container>
  )
}
export default Order