import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import instance from '../settings/defaultAxios'
import {getCatalog} from '../store/actions/catalogAction'
import PaginationList from '../componetns/PaginationList'
import OrderTable from '../componetns/Order/Table/OrderTable'
import OrderTablePopup from '../componetns/Order/OrderTablePopup'
import {Container, CreateButton, RowContainer} from './LayoutStyles'
import FilterPanel from '../componetns/FilterPanel'
import CatalogView from '../componetns/Catalog/CatalogView'
import {getOrderSatus} from '../store/actions/orderAction'
import OrderViewModal from '../componetns/Order/OrderViewModal'

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
  const [productModalSettings, setProductModalSettings] = useState({
    id: 0,
    title: 'Просмотр',
    open: false
  })
  const [orderViewModal, setOrderViewModal] = useState({
    show: false,
    id: 0
  })
  const {orders} = useSelector((state) => state.catalog)
  const {status} = useSelector(state => state.order)

  const [filterReady, setFilterReady] = useState(false)

  useEffect(() => {
    instance.get(`/admin_orders`)
      .then((data) => {
        setCount(data.data.count)
      })
    getOrderSatus(dispatch)
      .then(setFilterReady(true))
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
  const openProductModal = (id, open) => {
    setProductModalSettings({
      id: id,
      open: open
    })
  }
  const openOrderViewModal = (id) => {
    setOrderViewModal({
      show: true,
      id: id
    })
  }

  if (open) {
    document.body.style.overflowY = 'hidden'
  } else {
    document.body.style.overflowY = 'scroll'
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
        <FilterPanel
          options={[{id: '', name: 'Выберите'}, ...status]}
          ready={filterReady}
          dispatch={dispatch}/>
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
        openProduct={openProductModal}
        openOrderView={openOrderViewModal}
      />
      <CatalogView
        show={productModalSettings.open}
        id={productModalSettings.id}
        handleClose={() => {
          setProductModalSettings({
            open: false
          })
        }}
        isShow={true}
        title={'Просмотр'}
      />
      <OrderViewModal
        show={orderViewModal.show}
        handleClose={() => {
          setOrderViewModal({
            ...orderViewModal,
            show: false
          })
        }}
        id={orderViewModal.id}
      />
    </Container>
  )
}
export default Order
