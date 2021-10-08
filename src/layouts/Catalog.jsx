import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import CatalogTable from '../componetns/Tables/CatalogTable/CatalogTable'
import CatalogTablePopup from '../componetns/Tables/CatalogTable/CatalogTablePopup'
import {getDefaultContent} from '../store/actions/contentAction'
import instance from '../settings/defaultAxios'
import PaginationList from '../componetns/PaginationList'
import {getCatalog} from '../store/actions/catalogAction'
import {Container, CreateButton} from './LayoutStyles'

const Catalog = () => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const {catalog} = useSelector(state => state.catalog)
  const {products} = useSelector(state => state.catalog)
  const [count, setCount] = useState(0)
  const [page, setPage] = useState(0)

  useEffect(() => {
    getDefaultContent(dispatch, 'GET_CATEGORY', '/category')
    getDefaultContent(dispatch, 'GET_MANUFACTURE', '/manufacturer')
    instance.get('/admin_catalog')
      .then(data => {
        setCount(data.data.count)
      })
  }, [])

  useEffect(() => {
    getCatalog(dispatch, 'GET_CATALOG', `/admin_catalog?page=${page}`)
  }, [page])

  return (
    <Container>
      <CreateButton variant={'warning'} onClick={()=>{setOpen(true)}}>Создать</CreateButton>
      <CatalogTable
        tableData={catalog}
        currentPage={page}/>
        <PaginationList
        count={count}
        updatePage={setPage}/>
      <CatalogTablePopup
      show={open}
      handleClose={setOpen}
      id={1}
      modalTitle={'Создать'}
      isCreate={true}
      data={products}
      />
    </Container>
  )
}
export default Catalog