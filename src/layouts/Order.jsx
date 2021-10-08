import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import instance from '../settings/defaultAxios'
import {getCatalog} from '../store/actions/catalogAction'
import {Button} from 'react-bootstrap'
import CategoryTable from '../componetns/Tables/CategoryTable/CategoryTable'
import PaginationList from '../componetns/PaginationList'
import CategoryTablePopup from '../componetns/Tables/CategoryTable/CategoryTablePopup'
import styled from 'styled-components'
import OrderTable from '../componetns/Tables/OrdersTable/OrderTable'
import OrderTablePopup from '../componetns/Tables/OrdersTable/OrderTablePopup'

const CategoryContainer = styled.div`
width: 95%;
margin: 50px auto 0;
`

const Order = () => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [page, setPage] = useState(0)
  // const [data, setData] = useState([])
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
    <CategoryContainer>
      <Button style={{margin: '10px 0'}} variant={'warning'} onClick={() => {
        setOpen(true)
      }}>Создать</Button>
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
    </CategoryContainer>
  )
}
export default Order