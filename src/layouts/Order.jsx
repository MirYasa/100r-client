import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import instance from '../settings/defaultAxios'
import {getCatalog} from '../store/actions/catalogAction'
import PaginationList from '../componetns/PaginationList'
import OrderTable from '../componetns/Tables/OrdersTable/OrderTable'
import OrderTablePopup from '../componetns/Tables/OrdersTable/OrderTablePopup'
import {Container, CreateButton, RowContainer} from './LayoutStyles'
import FilterPanel from '../componetns/FilterPanel'

const Order = () => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [page, setPage] = useState(0)
  const [count, setCount] = useState(0)
  const [modalSettings, setModalSettings] = useState({
    id: 1,
    title: 'Заказ',
    isCreate: true
  })
  const {orders} = useSelector((state) => state.catalog)

  useEffect(() => {
    instance.get(`/admin_orders`).then((data) => {
      setCount(data.data.count)
    })
  }, [])
  useEffect(() => {
    getCatalog(dispatch, 'GET_ORDERS', `/admin_orders?page=${page}&order=id&direction=asc`)
  }, [page])

  const openModal = (id, title, isCreate) => {
    setModalSettings({
      id: id,
      title: title,
      isCreate: isCreate
    })
    setOpen(true)
  }

  return (
    <Container>
      <RowContainer>
        <CreateButton
          variant={'warning'}
          onClick={() => {
            openModal(1, 'Заказ', true)
          }}>Создать
        </CreateButton>
        <FilterPanel/>
      </RowContainer>
      <OrderTable
        tableData={orders}
        currentPage={page}
        currentTable={'admin_orders'}
        dispatch={dispatch}
        open={openModal}
      />
      <PaginationList count={count} updatePage={setPage}/>
      <OrderTablePopup
        show={open}
        handleClose={setOpen}
        id={modalSettings.id}
        modalTitle={modalSettings.title}
        isCreate={modalSettings.isCreate}
        url={'/admin_orders'}
      />
    </Container>
  )
}
export default Order
