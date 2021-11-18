import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import CatalogTable from '../componetns/Tables/CatalogTable/CatalogTable'
import CatalogTablePopup from '../componetns/Tables/CatalogTable/CatalogTablePopup'
import {getDefaultContent} from '../store/actions/contentAction'
import instance from '../settings/defaultAxios'
import PaginationList from '../componetns/PaginationList'
import {getCatalog} from '../store/actions/catalogAction'
import {Container, CreateButton} from './LayoutStyles'
import CatalogView from '../componetns/Catalog/CatalogView'

const Catalog = () => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [updateOpen, setUpdateOpen] = useState({
    show: false,
    id: 0,
    title: 'Обновление продукта'
  })
  const {catalog} = useSelector((state) => state.catalog)
  const [count, setCount] = useState(0)
  const [page, setPage] = useState(0)

  if (open || updateOpen.show) {
    document.body.style.overflowY = 'hidden'
  } else {
    document.body.style.overflowY = 'scroll'
  }

  useEffect(() => {
    getDefaultContent(dispatch, 'GET_CATEGORY', '/category')
    getDefaultContent(dispatch, 'GET_MANUFACTURE', '/manufacturer')
    instance.get('/admin_catalog').then((data) => {
      setCount(data.data.count)
    })
  }, [])
  useEffect(() => {
    getCatalog(dispatch, 'GET_CATALOG', `/admin_catalog?page=${page}&order=product_id&direction=asc`)
  }, [page])

  const openModal = (show, id, title) => {
    setUpdateOpen({
      ...updateOpen,
      show: show,
      id: id,
      title: title
    })
  }

  return (
    <Container>
      <CreateButton
        variant={'warning'}
        onClick={() => {
          setOpen(true)
        }}
      > Создать </CreateButton>
      <CatalogTable tableData={catalog} currentPage={page} openModal={openModal}/>
      <PaginationList count={count} updatePage={setPage}/>
      <CatalogTablePopup
        show={open}
        handleClose={setOpen}
        modalTitle={'Создать'}
        isCreate={true}
      />
      <CatalogView
        isShow={false}
        handleClose={() => {
          setUpdateOpen({
            show: false
          })
        }}
        show={updateOpen.show}
        title={updateOpen.title}
        id={updateOpen.id}
      />
    </Container>
  )
}
export default Catalog
