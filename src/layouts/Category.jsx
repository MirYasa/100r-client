import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {getCatalog, getCategory} from '../store/actions/catalogAction'
import {useDispatch, useSelector} from 'react-redux'
import instance from '../settings/defaultAxios'
import {Button} from 'react-bootstrap'
import CatalogTable from '../componetns/Tables/CatalogTable/CatalogTable'
import PaginationList from '../componetns/PaginationList'
import CatalogTablePopup from '../componetns/Tables/CatalogTable/CatalogTablePopup'
import CategoryTable from '../componetns/Tables/CategoryTable/CategoryTable'
import CategoryTablePopup from '../componetns/Tables/CategoryTable/CategoryTablePopup'

const CategoryContainer = styled.div`
width: 95%;
margin: 50px auto 0;
`

const Category = () => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [page, setPage] = useState(0)
  // const [data, setData] = useState([])
  const [count, setCount] = useState(0)
  const {categories} = useSelector(state => state.catalog)

  useEffect(() => {
    instance.get(`/admin_categories`)
      .then(data => {
        setCount(data.data.count)
      })
  }, [])
  useEffect(() => {
    getCatalog(dispatch, 'GET_CATEGORIES', `/admin_categories?page=${page}`)
  }, [page])

  return (
    <CategoryContainer>
      <Button style={{margin: '10px 0'}} variant={'warning'} onClick={() => { setOpen(true)
      }}>Создать</Button>
      <CategoryTable
        tableData={categories}
        currentPage={page}/>
      <PaginationList
        count={count}
        updatePage={setPage}/>
      <CategoryTablePopup
        show={open}
        handleClose={setOpen}
        id={1}
        modalTitle={'Создать'}
        isCreate={true}
        data={categories}
      />
    </CategoryContainer>
  )
}
export default Category