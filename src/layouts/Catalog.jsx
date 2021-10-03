import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import CatalogTable from '../componetns/Tables/CatalogTable/CatalogTable'
import styled from 'styled-components'
import {Button} from 'react-bootstrap'
import CatalogTablePopup from '../componetns/Tables/CatalogTable/CatalogTablePopup'
import {getContent} from '../store/actions/contentAction'
import {useParams} from 'react-router'
import {getInputs} from '../store/actions/inputDataAction'
import instance from '../settings/defaultAxios'
import PaginationList from '../componetns/PaginationList'
import {getCatalog} from '../store/actions/catalogAction'
const CatalogContainer = styled.div`
width: 95%;
margin: 50px auto 0;
`

const Catalog = () => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const {catalog} = useSelector(state => state.catalog)
  const {products} = useSelector(state => state.catalog)
  const [count, setCount] = useState(0)
  const [page, setPage] = useState(0)

  useEffect(() => {
    getContent(dispatch, 'GET_CATEGORY', '/category')
    getContent(dispatch, 'GET_MANUFACTURE', '/manufacturer')
    instance.get('/admin_catalog')
      .then(data => {
        setCount(data.data.count)
      })
  }, [])

  useEffect(() => {
    getCatalog(dispatch, 'GET_CATALOG', `/admin_catalog?page=${page}`)
  }, [page])

  return (
    <CatalogContainer>
      <Button style={{margin: '10px 0'}} variant={'warning'} onClick={()=>{setOpen(true)}}>Создать</Button>
      <CatalogTable
        tableData={catalog}/>
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
    </CatalogContainer>

  )
}
export default Catalog